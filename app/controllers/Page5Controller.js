angular.module('app').controllerProvider.register('Page5Controller', ["$scope", "PassNameService", function($scope, PassNameService){
	
	$scope.name = PassNameService.getName();

	
}]);