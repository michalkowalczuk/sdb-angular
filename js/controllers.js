var sdbControllers = angular.module('sdbControllers',[]);

sdbControllers.controller('HomeController', ['$scope',
    function($scope) {
        $scope.test = "Home";
    }
]);

sdbControllers.controller('PhotosController', ['$scope',
    function($scope) {
        $scope.test = "Photos";

        var imageHeight = 100;
        $scope.images = [
            { "src": "../img/img1.jpg", height: imageHeight },
            { "src": "../img/img2.jpg", height: imageHeight },
            { "src": "../img/img3.jpg", height: imageHeight }
        ];
    }
]);

sdbControllers.controller('VideosController', ['$scope', "$sce",
    function($scope, $sce) {
        $scope.test = "Videos";

        $scope.videos = [
            { "src": $sce.trustAsResourceUrl("http://youtube.com/embed/WqmeI5fZcho") },
            { "src": $sce.trustAsResourceUrl("http://www.youtube.com/embed/srt3OBP2kGc") }
        ];
    }
]);

sdbControllers.controller('WorkshopController', ['$scope',
    function($scope) {
        $scope.test = "Workshop";
    }
]);

sdbControllers.controller('ShopController', ['$scope',
    function($scope) {
        $scope.test = "Shop";
    }
]);

sdbControllers.controller('MessageController', ['$scope',
    function($scope) {
        $scope.message = {};
    }
]);