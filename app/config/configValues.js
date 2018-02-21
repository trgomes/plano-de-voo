(function () {
    'use strict';
    angular.module('app')
        .value("config", {
            //baseUri: "http://localhost:8000/api"
            baseUri: "https://plano-de-voo.herokuapp.com/api"
        });
})();
