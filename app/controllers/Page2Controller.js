angular.module('app').controllerProvider.register('Page2Controller', ["$scope", "PassNameService", function($scope, PassNameService){
	
	$scope.name = PassNameService.getName();

}]);