var sdbControllers = angular.module('sdbControllers',[]);

sdbControllers.controller('HomeController', ['$scope',
    function($scope) {
        $scope.test = "Home";
    }
]);

sdbControllers.controller('PhotosController', ['$scope', '$http',
    function($scope,$http) {
        $scope.photos = [];
        $http.get('../resources/photos.json').success(function(data){
            $scope.photos = data;
        });

        $scope.showModalGallery = function(photo) {
            $scope.selectedPhoto = photo;
            $scope.galleryVisible = true;
        }

        $scope.hideModalGallery = function() {
            $scope.selectedPhoto = null;
        }

        $scope.showNextImage = function(photo) {
            var currentIndex = -1;
            angular.forEach($scope.photos, function(value, index) {
                if(value.src==photo) {
                    currentIndex = index;
                }
            });
            if(currentIndex!=-1 &&
                $scope.photos.length > currentIndex+1) {
                $scope.selectedPhoto = $scope.photos[currentIndex+1].src;
            } else {
                $scope.selectedPhoto = $scope.photos[0].src;
            }
        }
    }
]);

sdbControllers.controller('VideosController', ['$scope', "$sce", '$http',
    function($scope, $sce, $http) {
        $scope.test = "Videos";
        $scope.videos = [];
        $http.get('../resources/videos.json').success(function(data){
            $scope.videos = data;
        });
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

    }
]);

sdbControllers.controller('BookingController', ['$scope', '$http',
    function($scope,$http) {
        $scope.test = "Booking";
    }
]);

sdbControllers.controller('OrderController', ['$scope', '$http',
    function($scope,$http) {
        $scope.test = "Order";
    }
]);