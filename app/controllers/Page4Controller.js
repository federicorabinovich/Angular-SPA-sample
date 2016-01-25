angular.module('app').controllerProvider.register('Page4Controller', ["$scope", "PassNameService", "FetchJson", function($scope, PassNameService, FetchJson){
	
	$scope.name = PassNameService.getName();

	FetchJson.success(function(data) { 
		$scope.data = data.grades; 
	});

}]);