angular.module('app2', ['ngStorage'])
    .controller('MainController', ['$rootScope', '$scope', '$localStorage', function ($rootScope, $scope, $localStorage) {
        $scope.storage = $localStorage;
    }]);