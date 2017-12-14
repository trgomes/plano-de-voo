app.directive("uiDate", function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (date) {
                if (!date) return date;
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
                if (value.length === 10) {
                    var dateArray = value.split("/");
                    return dateArray[2]+'-'+dateArray[1]+'-'+ dateArray[0];
                }
            });

            ctrl.$formatters.push(function (value) {                
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});


/* app.directive('uiDate', function () {
    return {
        require: 'ngModel',
        link: function ($scope, element, attrs, ngModelCtrl) {
            element.mask("00/00/0000");
            ngModelCtrl.$parsers.unshift(function (value) {
                if (value.length === 10) {
                    var data = value.substring(6, 10) + '-' + value.substring(3, 5) + '-' + value.substring(0, 2);
                }
                return data;
            });
            ngModelCtrl.$formatters.unshift(function (value) {

                return element.masked(value);
            });
        }
    };
}); */


app.directive('uiHour', function () {
    return {
        require: 'ngModel',
        link: function ($scope, element, attrs, ngModelCtrl) {
            element.mask("99:99");
            ngModelCtrl.$parsers.unshift(function (value) {

                if (value.length === 5) {
                    var hour = value.substring(0, 2) + ':' + value.substring(3, 5);
                }

                return hour;
            });
            ngModelCtrl.$formatters.unshift(function (value) {
                return element.masked(value);
            });
        }
    };
});
