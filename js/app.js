var webSdb = angular.module('webSdb',[
    'ngRoute',
    'sdbControllers'
]);

webSdb.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'parts/home.html',
                controller: 'HomeController'
            })
            .when('/photos', {
                templateUrl: 'parts/photos.html',
                controller: 'PhotosController'
            })
            .when('/videos', {
                templateUrl: 'parts/videos.html',
                controller: 'VideosController'
            })
            .when('/workshops', {
                templateUrl: 'parts/workshops.html',
                controller: 'WorkshopController'
            })
            .when('/shop', {
                templateUrl: 'parts/shop.html',
                controller: 'ShopController'
            })
            .when('/message', {
                templateUrl: 'parts/message.html',
                controller: 'MessageController'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }
]);