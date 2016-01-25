var app = angular.module('app', ['ngRoute','routeResolverServices', 'ngAnimate', 'filters', 'ui.router'])
.config(['$routeProvider', '$controllerProvider', 'routeResolverProvider', '$stateProvider', '$urlRouterProvider', function($routeProvider, $controllerProvider, routeResolverProvider, $stateProvider, $urlRouterProvider) {

	app.controllerProvider = $controllerProvider;
	var route = routeResolverProvider.route;


  $routeProvider
	.when('/', route.resolve('Page1'))
	.when('/page2', route.resolve('Page2'))
	.when('/page3', route.resolve('Page3'))
	.when('/page4', route.resolve('Page4'))
	.when('/page5', route.resolve('Page5'))
	.when('/page6', route.resolve('Page6'))
	.otherwise({
	  redirectTo: '/'
  });

    $stateProvider
	.state('content1', {
      url: "/page6",
      views: {
        "content1": { template: '<img style="width:850px;" src="app/assets/img/slide1.jpg" />'}
      }
    })
	.state('content2', {
      url: "/page6",
      views: {
        "content2": { template: '<img style="width:850px;" src="app/assets/img/slide2.jpg" />' }
      }
    })
	.state('content3', {
      url: "/page6",
      views: {
        "content3": { template: '<img style="width:850px;" src="app/assets/img/slide3.jpg" />' }
      }
    })
	
	

}]);
