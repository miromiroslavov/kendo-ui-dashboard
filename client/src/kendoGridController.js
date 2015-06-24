angular.module('dashboard')
    .controller('KendoGridController', ['$scope', '$stateParams', '$controller',
        function ($scope, $stateParams, $controller) {
            $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});

            $scope.continent = {};

            $scope.categories = new kendo.data.DataSource({
                data: [
                    {
                        name: "Asia"
                    },
                    {
                        name: "Europe"
                    },
                    {
                        name: "Latin America"
                    },
                    {
                        name: "Middle East"
                    },
                    {
                        name: "North America"
                    }
                ]
            });

            $scope.continents = new kendo.data.DataSource({
                data: [{
                    category: "Asia",
                    value: 53.8,
                    color: "#9de219"
                }, {
                    category: "Europe",
                    value: 16.1,
                    color: "#90cc38"
                }, {
                    category: "Latin America",
                    value: 11.3,
                    color: "#068c35"
                }, {
                    category: "Africa",
                    value: 9.6,
                    color: "#006634"
                }, {
                    category: "Middle East",
                    value: 5.2,
                    color: "#004d38"
                }, {
                    category: "North America",
                    value: 3.6,
                    color: "#033939"
                }]
            });

            $scope.addContinent = function (continent) {
                $scope.continents.add(continent);
            };

            $scope.updateContinent = function () {

            };

            $scope.getContinentFromServer = function () {
                var serverContinent = {
                        category: "Europe",
                        value: 53,
                        color: "#fff"
                    },
                    localContinent = $scope.continent;

                $scope.continents.remove(localContinent);

                localContinent = _.extend(localContinent, serverContinent);

                $scope.continents.add(localContinent);
            };

            $scope.kendoOptions = {
                dataSource: $scope.continents,
                selectable: true,
                change: function (e) {
                    var that = this,
                        selectedRows = that.select();

                    if (selectedRows.length === 1) {
                        $scope.safeApply($scope, function () {
                            $scope.continent = that.dataItem(selectedRows[0]);
                        });
                    }
                }
            };

            $scope.rightClick = function () {
                $scope.menu1.open();
            };

            $scope.$watch("continent.value", function () {
                //if($scope.grid) {
                //    $scope.grid.refresh();
                //}
            });
        }]);