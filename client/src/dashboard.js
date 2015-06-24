angular.module('dashboard')
    .controller('MainController', ['$rootScope', '$scope', function ($rootScope, $scope) {
        var widgets = new kendo.data.HierarchicalDataSource({
            data: [
                {
                    text: "Data visualization", items: [
                    {text: "Chart", value: "kendo-chart"},
                    {text: "Data Grid", value: "kendo-grid"}
                ]
                },
                {
                    text: "Navigation", items: [
                    {text: "Menu", value: "kendo-menu"},
                    {text: "Panel bar", value: "kendo-panel-bar"}
                ]
                },
                {
                    text: "Input", items: [
                    {text: "Color Picker", value: 'kendo-color-picker'},
                    {text: "Data and time picker", value: 'kendo-date-time-picker'},
                    {text: "Slider", value: "kendo-slider"}
                ]
                }
            ]
        });

        $scope.widgets = widgets;

        $rootScope.safeApply = function () {
            var $scope, fn, force = false;
            if (arguments.length == 1) {
                var arg = arguments[0];
                if (typeof arg == 'function') {
                    fn = arg;
                }
                else {
                    $scope = arg;
                }
            }
            else {
                $scope = arguments[0];
                fn = arguments[1];
                if (arguments.length == 3) {
                    force = !!arguments[2];
                }
            }
            $scope = $scope || this;
            fn = fn || function () {
            };
            if (force || !$scope.$$phase) {
                if ($scope.$apply) {
                    $scope.$apply(fn);
                }
                else {
                    $scope.apply(fn);
                }
            }
            else {
                fn();
            }
        };
    }]);