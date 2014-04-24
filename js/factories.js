var sdbFactories = angular.module('sdbFactories',[]);

sdbFactories.factory('sdbResources',[
    function() {
        return {
            images: [
                { "smallImgSrc": "../img/img1.jpg", "src": "../img/img1.jpg" },
                { "smallImgSrc": "../img/img2.jpg", "src": "../img/img2.jpg" },
                { "smallImgSrc": "../img/img3.jpg", "src": "../img/img3.jpg" }
            ],
            videos: [
                { "src": "http://youtube.com/embed/WqmeI5fZcho" },
                { "src": "http://www.youtube.com/embed/srt3OBP2kGc" }
            ],
            depositPaymentMethods: [
                { "method": "Something 1" },
                { "method": "Something 2" }
            ]
        }
    }
]);

sdbFactories.factory('validator',[
    function() {
        var Validator = function() {};

        Validator.prototype.number = 0;
        Validator.prototype.incNumber = function() {
            this.number++;
            return this;
        };

        return {
            newInstance: function() {
                return new Validator();
            }
        }
    }
]);