angular.module('dashboard')
    .controller('MainController', ['$scope', '$state', '$stateParams', function ($scope) {
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
    }]);