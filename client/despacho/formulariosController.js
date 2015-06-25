angular.module('despacho')
    .controller('FormulariosController', ['$rootScope', '$scope', "$state", '$localStorage', "$stateParams", function ($rootScope, $scope, $state, $localStorage, $stateParams) {
        var id = $stateParams.id;

        // Get the formularios by the id....

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
    }]);
