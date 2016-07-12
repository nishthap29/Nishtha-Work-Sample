angular.module('myApp',[])

.controller('myController',function($scope,$http){

	$http.get('data/MOCK_DATA.JSON')
	  .then(function(response){
	  		$scope.myData = response.data;
	  		console.log($scope.myData);
	  })

	$scope.search = function(){
		$scope.SearchQuery = angular.copy($scope.gender);
	}
	$scope.clear = function(){
		$scope.gender = "";
		$scope.result = "";
	}

});