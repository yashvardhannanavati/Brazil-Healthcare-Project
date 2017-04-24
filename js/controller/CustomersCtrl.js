
// app.controller('CustomersCtrl', function($scope, $http, $window) {
//   $scope.form = {};
//   $scope.masterForm = {};
//   $scope.names = [];
//   //$scope.form.region = {};
//   $scope.SocioEconomicDataColumns = [ "All", "State_cap", "Coin_code", "State_code", "Reigon", "gdp", "worker_expe", "expe_own", "edu_expense", "literacyrate_15plus", "gini_index", "lgdpr_pc", "inpc", "lgdpr", "min_wage", "developed", "efici_expvida_exponencial", "efici_mort_inf_expo", "illitera", "illiteibge", "mayor_school", "may_sch_code", "areakm2", "aream2", "distance_from_capital", "capital_state", "densidade"];
//   $scope.PopulationAndAgeColumns = ['All', 'ageunder1', 'age_14', 'age_49', 'age_1014', 'age_1519', 'age_2029', 'age_3039', 'age_4049', 'age_5059', 'age_6069', 'age_7079', 'more80', 'popb15', 'Pop_sus', 'pop40y' ];
//   $scope.HealthCareColumns = ['All', 'health_expend_tot', 'trans_sus', 'diabe_reg', 'diabe_track', 'insurance', 'bed', 'new_diabe_reg', 'new_diabe_track', 'obesity', 'diabe_0to14', 'diabe_15', 'sus_rate', 'psf_cove', 'sanita'];
//   $scope.Years = ['All', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'];
//   $scope.Regions = ['All', '1', '2', '3', '4', '5'];
//   $scope.States = ['All', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'Go', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'To'];
//   $scope.form.SocioEconomicDataColumn = ['All'];
//   $scope.form.PopulationAndAgeColumn = ['All'];
//   $scope.form.HealthCareColumn = ['All'];
//   $scope.form.offset = 0;
//   $scope.records = [];
//   $scope.allRecords = [];
//   $scope.myVar = false;
  
// $scope.getRecords =  function(form) {
//   $scope.myVar = true;
// 	var conditions = {
//     params: {
//         region: JSON.stringify($scope.form.region),
//         year: JSON.stringify($scope.form.year),
//         state: JSON.stringify($scope.form.state),
//         SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
// 		PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
// 		HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
// 		offset: 0,
// 		flag: '0'
		
//     }
// }
	
// 	$scope.masterForm = $scope.form;
// 	$http.get('action.php', conditions)
//    .then(function (response) {
   	
//    	$scope.records = JSON.parse(JSON.stringify(response.data));
   	 
//    });

//    //$scope.getAllRecords(); 
//    $scope.form = null;
//    //$scope.setPristine(true);
//    //$scope.masterform.offset += 100;
// }

// $scope.getAllRecords =  function(form) {
//   $scope.myVar = true;
// 	var conditions = {
//     params: {
//         region: JSON.stringify($scope.form.region),
//         year: JSON.stringify($scope.form.year),
//         state: JSON.stringify($scope.form.state),
//         SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
// 		PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
// 		HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
// 		offset: 0,
// 		flag: '1'
		
//     }
// }
	
// $http.get('action.php', conditions)
//    .then(function (response) {
   	
//    	$scope.allRecords = JSON.parse(JSON.stringify(response.data));
   	 
//    });

 
// return;

// }

// $scope.getMoreRecords =  function(form) {
// 	$scope.masterForm.offset += 100;
//   var conditions = {
//     params: {
//         region: JSON.stringify($scope.masterForm.region),
//         year: JSON.stringify($scope.masterForm.year),
//         state: JSON.stringify($scope.masterForm.state),
//         SocioEconomicDataColumn: JSON.stringify($scope.masterForm.SocioEconomicDataColumn),
// 		PopulationAndAgeColumn: JSON.stringify($scope.masterForm.PopulationAndAgeColumn),
// 		HealthCareColumn: JSON.stringify($scope.masterForm.HealthCareColumn),
// 		offset: $scope.masterForm.offset,
// 		flag: '0'
		
//     }
// }
	
// 	$http.get('action.php', conditions)
//    .then(function (response) {
//    	//$scope.names = response.data;
//    	var oldJSON = $scope.records;
//    	//alert(JSON.stringify(oldJSON));
//    	if(oldJSON != '') {
//    		oldJSON = JSON.parse(JSON.stringify($scope.records));
//    		var someObj = JSON.parse(JSON.stringify(response.data));

//    		for(var index in someObj) {
//    			oldJSON.push(someObj[index]);
//    		}
//    	} else {
//    		oldJSON = JSON.parse(JSON.stringify(response.data));
//    	}
//    	$scope.records = oldJSON;
//    	//alert(JSON.stringify(oldJSON));
//    	//$scope.records = angular.merge($scope.records,$scope.names); 
//    });
//    //records = records.concat($scope.names);
   
// //$window.location.href = '/Brazil-Healthcare-Project/sample.html'

 


// }

// });

// app.controller('CustomersCtrl', function($scope, $http) {
//   $scope.form = {};
//   $scope.form.region = '';
//   $scope.test = '123';


  
// $scope.getRecords =  function(form) {
//  var config = {
//     params: {
//         region: $scope.form.region
//     }
// }
//  $http.get('action.php', config)
//    .success(function (response) {$scope.names = response.data; });


// }});




app.controller('CustomersCtrl', function($scope, $http, $window, $location, $anchorScroll) {
  $scope.form = {};
  $scope.masterform = {};
  $scope.names = [];
  //$scope.form.region = {};
  $scope.SocioEconomicDataColumns = [ "All", "State_cap", "Coin_code", "State_code", "Reigon", "gdp", "worker_expe", "expe_own", "edu_expense", "literacyrate_15plus", "gini_index", "lgdpr_pc", "inpc", "lgdpr", "min_wage", "developed", "efici_expvida_exponencial", "efici_mort_inf_expo", "illitera", "illiteibge", "mayor_school", "may_sch_code", "areakm2", "aream2", "distance_from_capital", "capital_state", "densidade"];
  $scope.PopulationAndAgeColumns = ['All', 'ageunder1', 'age_14', 'age_49', 'age_1014', 'age_1519', 'age_2029', 'age_3039', 'age_4049', 'age_5059', 'age_6069', 'age_7079', 'more80', 'popb15', 'Pop_sus', 'pop40y' ];
  $scope.HealthCareColumns = ['All', 'health_expend_tot', 'trans_sus', 'diabe_reg', 'diabe_track', 'insurance', 'bed', 'new_diabe_reg', 'new_diabe_track', 'obesity', 'diabe_0to14', 'diabe_15', 'sus_rate', 'psf_cove', 'sanita'];
  $scope.Years = ['All', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011'];
  $scope.Regions = ['All', '1', '2', '3', '4', '5'];
  $scope.States = ['All', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'Go', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'To'];
  $scope.region1States = ["All", 'AC', 'AM', 'AP','PA', 'Ro', 'RR', 'To'];
  $scope.region2States = ["All", 'AL', 'BA', 'CE', 'MA', 'PB', 'PE', 'PI', 'RN', 'SE'];
  $scope.region3States = ["All", 'ES', 'MG', 'RJ', 'SP'];
  $scope.region4States = ["All", 'PR', 'RS', 'SC'];
  $scope.region5States = ["All", 'DF', 'Go', 'MS', 'MT'];
  $scope.form.year = ['All'];
  $scope.form.region = ['All'];
  $scope.form.state = ['All'];
  $scope.form.SocioEconomicDataColumn = ['All'];
  $scope.form.PopulationAndAgeColumn = ['All'];
  $scope.form.HealthCareColumn = ['All'];
  $scope.form.offset = 0;
  $scope.records = [];
  $scope.allRecords = [];
  $scope.myVar = false;
  $scope.buttonLabel = "Download to CSV";
  $scope.isDisabled = false;

$scope.gotoTop = function() {
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');

      // call $anchorScroll()
      $anchorScroll();
    };

$scope.exportAllData = function () {
          alasql('SELECT * INTO CSV("data.csv",{headers:true, separator:","}) FROM ?',[$scope.allRecords]);

    };
  
$scope.getStates = function(form){

  if($scope.form.region == 'All')
    return $scope.States;
  if($scope.form.region == '1')
    return $scope.region1States;
  if($scope.form.region == '2')
    return $scope.region2States;
  if($scope.form.region == '3')
    return $scope.region3States;
  if($scope.form.region == '4')
    return $scope.region4States;
  if($scope.form.region == '5')
    return $scope.region5States;
}

$scope.getRecords =  function(form) {
  $scope.myVar = true;
  var conditions = {
    params: {
        region: JSON.stringify($scope.form.region),
        year: JSON.stringify($scope.form.year),
        state: JSON.stringify($scope.form.state),
        SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
    PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
    HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
    offset: 0,
    flag: '0'
    
    }
}
  
  $scope.masterform = $scope.form;
  $http.get('action.php', conditions)
   .then(function (response) {
    
    $scope.records = JSON.parse(JSON.stringify(response.data));
     
   });
   $scope.masterform.offset = 100;
   $scope.getAllRecords(); 
   $scope.form = null;
   //$scope.setPristine(true);
   
}

$scope.getAllRecords =  function(form) {
  $scope.myVar = true;
  var conditions = {
    params: {
        region: JSON.stringify($scope.form.region),
        year: JSON.stringify($scope.form.year),
        state: JSON.stringify($scope.form.state),
        SocioEconomicDataColumn: JSON.stringify($scope.form.SocioEconomicDataColumn),
    PopulationAndAgeColumn: JSON.stringify($scope.form.PopulationAndAgeColumn),
    HealthCareColumn: JSON.stringify($scope.form.HealthCareColumn),
    offset: '0',
    flag: '1'
    
    }
}
  
$http.get('action.php', conditions)
   .then(function (response) {
    
    $scope.allRecords = JSON.parse(JSON.stringify(response.data));
    $scope.isDisabled = true;
   });

 
return;

}

$scope.getMoreRecords =  function(form) {
  var conditions = {
    params: {
        region: JSON.stringify($scope.masterform.region),
        year: JSON.stringify($scope.masterform.year),
        state: JSON.stringify($scope.masterform.state),
        SocioEconomicDataColumn: JSON.stringify($scope.masterform.SocioEconomicDataColumn),
    PopulationAndAgeColumn: JSON.stringify($scope.masterform.PopulationAndAgeColumn),
    HealthCareColumn: JSON.stringify($scope.masterform.HealthCareColumn),
    offset: $scope.masterform.offset,
    flag: '0'
    
    }
}

  
  $http.get('action.php', conditions)
   .then(function (response) {
    //$scope.names = response.data;
    var oldJSON = $scope.records;
    //alert(JSON.stringify(oldJSON));
    if(oldJSON != '') {
      oldJSON = JSON.parse(JSON.stringify($scope.records));
      var someObj = JSON.parse(JSON.stringify(response.data));

      for(var index in someObj) {
        oldJSON.push(someObj[index]);
      }
    } else {
      oldJSON = JSON.parse(JSON.stringify(response.data));
    }
    $scope.records = oldJSON;
    //alert(JSON.stringify(oldJSON));
    //$scope.records = angular.merge($scope.records,$scope.names); 
   });
   //records = records.concat($scope.names);
   
//$window.location.href = '/Brazil-Healthcare-Project/sample.html'

$scope.masterform.offset += 100; 


}

});
