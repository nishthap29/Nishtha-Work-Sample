/*var myApp = angular.module('myApp',['ui.router','ngAnimate','ui.bootstrap']);*/
var myApp = angular.module('myApp',['ui.router','Datepicker']);

/*myApp.controller('TabCtrl',function(){

	$scope.tabs = [
		{
			title: 'Step 2'
		},
		{
			title: 'Step 3'
		}

	];
});
*/
myApp.config(function($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('/step1');

	$stateProvider

		.state('step1',{
			url: '/step1',
			templateUrl: 'step1.html'
		})

		.state('step2',{
			url: '/step2',
			templateUrl: 'step2.html'
		})

		.state('step3',{
			url: '/step3',
			templateUrl: 'step3.html'
		});
});

myApp.service('myService',function(){

	var data = {};
	this.data1 = {};
	
	this.saveOne = function(onedata){
		data = onedata;
	}
	this.getOne = function(){
		return data;
	}
	this.saveTwo = function(twodata){
		this.data1 = twodata;
	}


});

myApp.controller('myController',function($scope,myService){

		$scope.optionData = [
		{
			name: 'Boston'
		},
		{
			name: 'New York'
		},
		{
			name: 'Chicago'
		},
		{
			name: 'New Jersey'
		}];

	$scope.phoneNumber = /^(\+?(\d{1}|\d{2}|\d{3})[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{4}$/;

	$scope.saveDataOne = function(){
		
		myService.saveOne($scope.step);
		//alert(myService.saveOne());
		/*
		var obj = {
			Fname: $scope.step.first,
			Lname: $scope.step.last,
			email: $scope.step.email,
			phone: $scope.step.phone
		};
		//alert(obj.Fname+obj.Lname);
		localStorage.setItem('myData',obj);*/
	}
	$scope.saveDataTwo = function(){
		
		myService.saveTwo($scope.steps);

		//alert(myService.saveTwo());
	}

	/*$scope.showResult = localStorage.getItem('myData');*/

	$scope.details = myService.getOne();
	console.log("Controller step1" + $scope.details);
	$scope.details1 = myService.data1;
	console.log("Controller step2" + $scope.details1);

});


