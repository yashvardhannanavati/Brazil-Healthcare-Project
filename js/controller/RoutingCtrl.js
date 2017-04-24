/* 
 * Routing Controller
 * @Framework: AngularJS 
 * @Author: Allen Yingyuan Zhang
 * @Update Date: 2014-10-12
 */ 
'use strict';


// Define an angular module for the application

var app = angular.module('brazilApp', ['ngRoute',
    'ngCookies'])

app.config(['$routeProvider', "$locationProvider",
    function($routeProvider,  $locationProvider) {
      $locationProvider.hashPrefix("");
      $routeProvider.
        when('/home', {
          templateUrl: 'view/home.html'
          //controller: 'ClickController'
        }).
        when('/brazil', {
          //controller: 'ClickController',
          templateUrl: 'view/brazil.html'      
          /*resolve:{
             loggedIn:onlyLoggedIn
            }*/
        }).
        when('/toxin', {
          templateUrl: 'view/toxin.html',
          //controller: 'ClickController'
        }).
        when('/login', {
          templateUrl: 'modules/authentication/views/login.html',
          controller: 'LoginController'
        }).
        when('/FAQ', {
          templateUrl: 'view/FAQ.html'
          //controller: 'ClickController'
        }).
        otherwise({
          redirectTo: '/home'
        });
}]);


app.factory('AuthenticationService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            $timeout(function () {
                var response = { success: username === 'test' && password === 'test' };
                if (!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);


            /* Use this for real authentication
             ----------------------------------------------*/
            //$http.post('/api/authenticate', { username: username, password: password })
            //    .success(function (response) {
            //        callback(response);
            //    });

        };

        service.SetCredentials = function (username, password) {
            var authdata = Base64.encode(username + ':' + password);

            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authdata: authdata
                }
            };

            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        };

        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };

        return service;
    }])

app.factory('Base64', function () {
    /* jshint ignore:start */

    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    return {
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        },

        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                window.alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            do {
                enc1 = keyStr.indexOf(input.charAt(i++));
                enc2 = keyStr.indexOf(input.charAt(i++));
                enc3 = keyStr.indexOf(input.charAt(i++));
                enc4 = keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";

            } while (i < input.length);

            return output;
        }
    };

    /* jshint ignore:end */
});

app.controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();

        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/brazil');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);

var onlyLoggedIn = function ($location,$q,Auth) {
    var deferred = $q.defer();
    if (Auth.isLogin()) {
        deferred.resolve();
    } else {
        deferred.reject();
        $location.url('/login');
    }
    return deferred.promise;
};


app.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
                if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                    $location.path('/login');
                }
        });
    }]);



/*  
 * Functions for navigation tab click event 
 

$("#tab-home").click(function() { 
  switchTabActivation(0);
});
$("#tab-brazil, #brazil-link").click(function() {
  switchTabActivation(1);
});
$("#tab-toxin, #toxin-link").click(function() {
  switchTabActivation(2);
});
$("#tab-FAQ").click(function() {
  switchTabActivation(3);
});

/*
 * Browser back/forward button handler
 
$(window).on('hashchange', function() { // detect URL change
  initiateTabActivation();
});

// Reset the value of id="option" component in the index page
function resetOptionValue() {
  $('#option').val("");
}

function initiateTabActivation() {
  var currentPage = $(location).attr('hash').slice(2);
  switch(currentPage) {
    case "home":
      switchTabActivation(0);
      break;
    case "brazil":
      switchTabActivation(1);
      break;
    case "toxin":
      switchTabActivation(2);
      break;
    case "FAQ":
      switchTabActivation(3);
      break;
    default: // Home page is default
      switchTabActivation(0); 
  }
}

function switchTabActivation(tabIndex) {
  $(".main-nav-ul li").each(function() {
    $(this).removeClass("active");
  }); 
  $(".main-nav-ul li:eq(" + tabIndex + ")").addClass("active");
}
*/


