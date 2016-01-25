angular.module('app').controllerProvider.register('Page6Controller', ["$scope", "PassNameService", function($scope, PassNameService){

	$scope.name = PassNameService.getName();
	

}]);