angular.module('app').controllerProvider.register('Page1Controller', ["$scope", "PassNameService", function($scope, PassNameService){

	$scope.name = "Fede";
	$scope.nombre = $scope.name;

	$scope.setName = function(){
		PassNameService.setName($scope.nombre);
	}

	$scope.resetName = function(){
		if($scope.nombre == $scope.name) $scope.nombre = '';
	}

}]);