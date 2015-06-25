angular.module('despacho', ["ngStorage", 'ui.router', 'kendo.directives'])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider.
                state('formularios', {
                    url: '/formularios/:id',
                    templateUrl: "despacho/formularios.html",
                    controller: "FormulariosController"
                }).
                state('listas_globales', {
                    url: '/listas_globales',
                    templateUrl: "despacho/listas_globales.html",
                    controller: "ListasGlobalesController"
                });
        }]
);