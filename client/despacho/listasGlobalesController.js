angular.module('despacho')
    .controller('ListasGlobalesController', ['$rootScope', '$scope', '$localStorage', "$state", function ($rootScope, $scope, $localStorage, $state) {
        $scope.listas_globales = {
            dataSource: {
                data: [{
                    category: "Asia",
                    value: 53.8,
                    id: "1"
                },{
                    category: "Europe",
                    value: 16.1,
                    id: "2"
                },{
                    category: "Latin America",
                    value: 11.3,
                    id: "3"
                },{
                    category: "Africa",
                    value: 9.6,
                    id: "4"
                },{
                    category: "Middle East",
                    value: 5.2,
                    id: "5"
                },{
                    category: "North America",
                    value: 3.6,
                    id: "6"
                }]
            },
            scrollable: true,
            sortable: true,
            filterable: true,
            selectable: true
        };

        $scope.formulariosClick = function(e) {
            var grid = $scope.listasGrid;
            var selectedRows = grid.select();
            var item = grid.dataItem(selectedRows[0]);
            $state.go("formularios", {id: item.id});
        };
    }]);
