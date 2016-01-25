angular.module('app').controllerProvider.register('Page3Controller', ["$scope", "PassNameService", function($scope, PassNameService){
	
	$scope.name = PassNameService.getName();

}]);