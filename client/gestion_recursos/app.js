angular.module('gestion_recursos', ['ngStorage'])
    .controller('MainController', ['$rootScope', '$scope', '$localStorage', function ($rootScope, $scope, $localStorage) {
        $scope.storage = $localStorage;

        $scope.$watch("storage.id", function () {
            var id = $scope.storage.id;

            if(id) {
                $scope.formularios = {
                    id: id,
                    category: "Europe",
                    value: 20
                }
            } else {
                $scope.formularios = {
                    id: 0,
                    category: "",
                    value: 0
                }
            }
        });
    }]);