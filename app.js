var app = angular.module('myApp', []);
app.controller('myctrl', function($scope) {
	$scope.message = "Cooking cost calculator";
	$scope.showMe1 = false;
	$scope.showMe2 = false;
	$scope.showMe3 = false;
	$scope.myFunc1 = function(){
		$scope.showMe1 = !$scope.showMe1;
	}
	$scope.myFunc2 = function(){
		$scope.showMe2 = !$scope.showMe2;
	}
	$scope.myFunc3 = function(){
		$scope.showMe3 = !$scope.showMe3;
	}
	$scope.pizza = [
		{name: 'bread',
		 price:100
		},
		{name:'sauce',
		 price:120
		},
		{name:'chicken',
		 price:200
		},
		{name:'capsicum',
		 price:400
		}
	];
	$scope.cake = [
		{name: 'cream',
		 price:200
		},
		{name:'butter',
		 price:500
		},
		{name:'suger',
		 price:60
		}
	];				
	$scope.juice = [
		{name: 'water',
		 price:150
		},
		{name:'orange',
		 price:620
		},
		{name:'suger',
		 price:80
		}
	];
	$scope.count = function(s){
	s.active = !s.active;
	};
	$scope.total1 = function(){
		var total = 0;
		angular.forEach($scope.pizza, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
	$scope.total2 = function(){
		var total = 0;
		angular.forEach($scope.juice, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
	$scope.total3 = function(){
		var total = 0;
		angular.forEach($scope.cake, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
	
	
});




