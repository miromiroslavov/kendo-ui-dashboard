angular.module('dashboard')
    .directive('customHeader', function () {
        return {
            replace: true,
            templateUrl: 'templates/customHeader.html',
            controller: function($scope) {

            }
        };
    });

