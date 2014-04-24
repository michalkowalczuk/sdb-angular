var sdbControllers = angular.module('sdbControllers',[]);

sdbControllers.controller('HomeController', ['$scope',
    function($scope) {

    }
]);

sdbControllers.controller('PhotosController', ['$scope', 'sdbResources',
    function($scope,sdbResources) {
        $scope.photos = sdbResources.images;
    }
]);

sdbControllers.controller('VideosController', ['$scope', 'sdbResources',
    function($scope, sdbResources) {
        $scope.videos = sdbResources.videos;
    }
]);

sdbControllers.controller('WorkshopController', ['$scope',
    function($scope) {

    }
]);

sdbControllers.controller('ShopController', ['$scope',
    function($scope) {

    }
]);

sdbControllers.controller('MessageController', ['$scope',
    function($scope) {

    }
]);

sdbControllers.controller('BookingController', ['$scope',
    function($scope) {

    }
]);

sdbControllers.controller('OrderController', ['$scope',
    function($scope) {

    }
]);