var myApp = angular.module("myApp",['ngRoute','ngAnimate','slick']);
myApp.config(function($routeProvider){
	$routeProvider

	.when('/wedding',{
		templateUrl :'pages/wedding.html',
		controller :'wedding'
	})
	.when('/review',{
		templateUrl :'pages/review.html',
		controller :'review'
	})
	.when('/photo',{
		templateUrl :'pages/photo.html',
		controller:'photo'
	})
	.when('/main',{
		templateUrl :'pages/main.html',
		controller:'main_img'	
	})
	.otherwise('/main',{
		templateUrl :'pages/main.html',
		controller:'main_img'
	})
});