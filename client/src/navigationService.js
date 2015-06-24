angular.module('dashboard').
    factory("navigationService", function () {
        return {
            calculate: function (x, y) {
                return x + y;
            }
        };
    });
