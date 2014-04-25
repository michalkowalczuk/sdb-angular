var sdbDirectives = angular.module('sdbDirectives',[]);

sdbDirectives.directive('orderForm',[
    function() {
        return {
            scope: {},
            templateUrl: "../templates/orderForm.html",
            link: function(scope, element, attrs) {
                scope.submit = function() {
                    alert("No idea...");
                }
            }
        };
    }
]);

sdbDirectives.directive('bookingForm', [
    function() {
        return {
            scope: {},
            templateUrl: "../templates/bookingForm.html",
            link: function(scope, element, attrs) {
                scope.booking = {};

                scope.submit = function() {
                    if(validate()) {
                        alert("ok.. sending...");
                    }
                }

                function validate() {
                    scope.errors = {};
                    scope.errors.organiserName = !scope.booking.organiserName;
                    scope.errors.organiserTelephone = !scope.booking.organiserTelephone;
                    scope.errors.telephoneOnTheDay = !scope.booking.telephoneOnTheDay;
                    scope.errors.contactEMail = !scope.booking.contactEMail;
                    scope.errors.venueAddress = !scope.booking.venueAddress;
                    scope.errors.dateOfEvent = !scope.booking.dateOfEvent;
                    scope.errors.performanceTimes = !scope.booking.performanceTimes;
                    scope.errors.bandSize = !scope.booking.bandSize;
                    scope.errors.hearAboutUs = !scope.booking.hearAboutUs;
                    var returnValue = true;
                    angular.forEach(scope.errors, function(value, key) {
                        if(value==true) {
                            returnValue = false;
                        }
                    });
                    return returnValue;
                }
            }
        }
    }
]);

sdbDirectives.directive('contactUsForm', ['Validator',
    function(Validator) {
        return {
            scope: {},
            templateUrl: "../templates/contactUsForm.html",
            link: function(scope, element, attrs) {
                scope.contactUs = {};
                scope.submit = function() {
                    if(validate()) {
                        alert("ok.. sending...");
                    }
                }

                function validate() {
                    scope.errors = {}
                    scope.errors.name = !scope.contactUs.name;
                    scope.errors.telephoneOrEmail = !scope.contactUs.telephoneOrEmail;
                    scope.errors.message = !scope.contactUs.message;
                    var returnValue = true;
                    angular.forEach(scope.errors, function(value, key) {
                        if(value==true) {
                            returnValue = false;
                        }
                    });
                    return false;
                }

            }
        }
    }
]);

sdbDirectives.directive('webHeader', [
    function() {
        return {
            scope: {},
            templateUrl: "../templates/webHeader.html"
        }
    }
]);

sdbDirectives.directive('photoGallery',[
    function() {
        return {
            scope: {
                photos: '='
            },
            templateUrl: "../templates/photoGallery.html",
            link: function(scope, element, attrs) {

                scope.showModalGallery = function(photo) {
                    scope.selectedPhoto = photo;
                    scope.galleryVisible = true;
                }

                scope.hideModalGallery = function() {
                    scope.selectedPhoto = null;
                }

                scope.showNextImage = function(photo) {
                    var currentIndex = -1;
                    angular.forEach(scope.photos, function(value, index) {
                        if(value.src==photo) {
                            currentIndex = index;
                        }
                    });
                    if(currentIndex!=-1 &&
                        scope.photos.length > currentIndex+1) {
                        scope.selectedPhoto = scope.photos[currentIndex+1].src;
                    } else {
                        scope.selectedPhoto = scope.photos[0].src;
                    }
                }

            }
        }
    }
]);

sdbDirectives.directive('videoGallery', [
    function() {
        return {
            scope: {
                videos: '='
            },
            templateUrl: "../templates/videoGallery.html"
        }
    }
]);