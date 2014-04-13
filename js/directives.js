var sdbDirectives = angular.module('sdbDirectives',[]);


sdbDirectives.directive('myTest',[
    function() {
        return {
            template: "Is is here?"
        };
    }
]);