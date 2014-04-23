var sdbDirectives = angular.module('sdbDirectives',[]);


sdbDirectives.directive('orderForm',[
    function() {
        return {
            scope: true,
            templateUrl: "../templates/orderForm.html",
            link: function(scope, element, attrs) {
                scope.order = {};
                scope.validation = {
                    name: true,
                    number: true
                };

                scope.clickMe = function() {
                    if(validate()) {
                        alert('ok ready');
                    }
                }

                function validate() {
                    scope.validation.name = scope.order.name ? true : false;
                    scope.validation.number = scope.order.number ? true : false;

                    var returnValue = true;
                    angular.forEach(scope.validation, function(value, index) {
                        if(!value) {
                            returnValue = false;
                        }
                    });
                    return returnValue;
                }

            }
        };
    }
]);