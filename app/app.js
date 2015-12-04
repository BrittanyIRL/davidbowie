var app = angular.module('BandApp', ['ngRoute', 'ngAnimate', 'ui.materialize']);

app.controller('BandCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	$scope.pageClass = 'page-home';	
}]);

// about page controller
app.controller('AboutCtrl', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
app.controller('UpcomingCtrl', function($scope) {
    $scope.pageClass = 'page-upcoming';
});

app.config([
	"$routeProvider",
	"$locationProvider",
	function($routeProvider, $locationProvider){
		$routeProvider.when("/", {
			templateUrl: "views/index.html",
			controller: "BandCtrl"
		}).when("/about", {
			templateUrl: "views/about.html",
			controller: "AboutCtrl"
		}).when("/upcoming", {
			templateUrl: "views/upcoming.html",
			controller: "UpcomingCtrl"
		}).otherwise({
			templateUrl: "views/404.html"
		});
		$locationProvider.html5Mode(false).hashPrefix("!");
	}
]);