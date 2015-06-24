angular.module('dashboard')
    .controller('WidgetController', ['$rootScope', '$scope', '$stateParams', function ($rootScope, $scope, $stateParams) {
        if ($stateParams.widget) {
            var widget;
            _.each($scope.widgets.data(), function (category) {
                category.load();
                var w = _.find(category.children.data(), function (i) {
                    return i.value == $stateParams.widget;
                });
                if (w) {
                    widget = category.text + "/" + w.text;
                }
            });

            if (widget) {
                $rootScope.widget = widget;
            }
        }
    }])
    .controller('KendoColorPickerController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
    }])
    .controller('KendoSliderController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
    }])
    .controller('KendoGridController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
    }])
    .controller('KendoMenuController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
    }])
    .controller('KendoPanelBarController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
    }])
    .controller('KendoDateTimePickerController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
    }])
    .controller('KendoChartController', ['$scope', '$stateParams', '$controller', function ($scope, $stateParams, $controller) {
        $controller('WidgetController', {$scope: $scope, $stateParams: $stateParams});
        var internetUsers = [
            {
                "country": "United States",
                "year": "1994",
                "value": 4.9
            },
            {
                "country": "United States",
                "year": "1995",
                "value": 9.2
            },
            {
                "country": "United States",
                "year": "1996",
                "value": 16.4
            },
            {
                "country": "United States",
                "year": "1997",
                "value": 21.6
            },
            {
                "country": "United States",
                "year": "1998",
                "value": 30.1
            },
            {
                "country": "United States",
                "year": "1999",
                "value": 35.9
            },
            {
                "country": "United States",
                "year": "2000",
                "value": 43.1
            },
            {
                "country": "United States",
                "year": "2001",
                "value": 49.2
            },
            {
                "country": "United States",
                "year": "2002",
                "value": 59.0
            },
            {
                "country": "United States",
                "year": "2003",
                "value": 61.9
            },
            {
                "country": "United States",
                "year": "2004",
                "value": 65
            },
            {
                "country": "United States",
                "year": "2005",
                "value": 68.3
            },
            {
                "country": "United States",
                "year": "2006",
                "value": 69.2
            },
            {
                "country": "United States",
                "year": "2007",
                "value": 75.3
            },
            {
                "country": "United States",
                "year": "2008",
                "value": 74.2
            },
            {
                "country": "United States",
                "year": "2009",
                "value": 71.2
            },
            {
                "country": "United States",
                "year": "2010",
                "value": 74.2
            },
            {
                "country": "United States",
                "year": "2011",
                "value": 78.2
            }
        ];

        $scope.options = {
            dataSource: {
                data: internetUsers
            },
            title: {
                text: "Internet Users in United States"
            },
            legend: {
                visible: false
            },
            seriesDefaults: {
                type: "area",
                labels: {
                    visible: true,
                    format: "{0}%",
                    background: "transparent"
                }
            },
            series: [{
                field: "value",
                name: "United States"
            }],
            valueAxis: {
                labels: {
                    format: "{0}%"
                },
                line: {
                    visible: false
                }
            },
            categoryAxis: {
                field: "year",
                majorGridLines: {
                    visible: false
                }
            },
            tooltip: {
                visible: true,
                format: "{0}%",
                template: "#= category # - #= value #%"
            }
        };
    }]);
