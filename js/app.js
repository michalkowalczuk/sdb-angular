var webSdb = angular.module('webSdb',[
    'ngRoute',
    'sdbControllers',
    'sdbDirectives',
    'sdbFactories',
    'sdbServices'
]);

webSdb.config(['$routeProvider','$sceDelegateProvider',
    function($routeProvider, $sceDelegateProvider) {

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
            .when('/booking', {
                templateUrl: 'parts/booking.html',
                controller: 'BookingController'
            })
            .when('/order', {
                templateUrl: 'parts/order.html',
                controller: 'OrderController'
            })
            .otherwise({
                redirectTo: '/home'
            });

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://youtube.com/**',
            'http://www.youtube.com/**'
        ]);
    }
]);

var mobileSdb = angular.module('mobileSdb',[
    'ngRoute',
    'sdbControllers',
    'sdbDirectives',
    'sdbFactories',
    'sdbServices'
]);

mobileSdb.config(['$routeProvider','$sceDelegateProvider',
    function($routeProvider,$sceDelegateProvider) {

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
            .when('/booking', {
                templateUrl: 'parts/booking.html',
                controller: 'BookingController'
            })
            .when('/order', {
                templateUrl: 'parts/order.html',
                controller: 'OrderController'
            })
            .otherwise({
                redirectTo: '/home'
            });

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://youtube.com/**',
            'http://www.youtube.com/**'
        ]);
    }
]);