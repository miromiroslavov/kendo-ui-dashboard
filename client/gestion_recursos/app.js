angular.module('gestion_recursos', ['ngStorage'])
    .controller('MainController', ['$rootScope', '$scope', '$localStorage', function ($rootScope, $scope, $localStorage) {
        $scope.storage = $localStorage;
    }]);