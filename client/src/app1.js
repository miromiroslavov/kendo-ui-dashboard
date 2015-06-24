angular.module('app1', ['ngStorage'])
    .controller('MainController', ['$rootScope', '$scope', '$localStorage', function ($rootScope, $scope, $localStorage) {
        $scope.send = function (msg) {
            $localStorage.message = msg;
        };
    }]);