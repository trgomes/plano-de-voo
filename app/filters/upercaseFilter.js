angular.module("app").filter("teste", function () {
    return function (input) {
        console.log(input);
        return input;
    };
});