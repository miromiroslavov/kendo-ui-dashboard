angular.module('dashboard', ['ui.router', 'kendo.directives'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider.
                state('widgets', {
                    url: '/widgets/:widget',
                    templateUrl: function ($stateParams) {
                        return 'templates/widgets/' + $stateParams.widget + '.html';
                    },
                    controllerProvider: function ($stateParams) {
                        var w = $stateParams.widget,
                            words = w.split('-'),
                            name;

                        name = _.chain(words).map(function (w) {
                            return w[0].toUpperCase() + w.substring(1, w.length);
                        }).reduce(function (w, n) {
                            return w + n;
                        }, '').value();

                        return name ? name + "Controller" : "WidgetController";
                    },
                    data: {}
                });
            $locationProvider.html5Mode(true);
        }]
);