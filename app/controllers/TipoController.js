(function () {
    'use strict';

    angular.module('app')
        .controller('TipoController', TipoController);

    TipoController.$inject = ['$scope', 'TipoService'];

    function TipoController($scope, TipoService) {

        $scope.tipo = {};

        //Functions
        $scope.addTipo = addTipo;
        $scope.modalCadastrarTipo = modalCadastrarTipo;


        function addTipo() {
            TipoService.addTipo($scope.tipo)
                .then(function success(response) {
                    toastr.success("Tipo de aeronave cadastrado com sucesso");
                    modalClose("#modalCadastrarTipo");
                    $location.path('/aeronaves');
                },
                    function error(response) {
                        toastr.warning("Erro ao cadastrar um tipo de aeronave! Verifique e tente novamente.");
                    });
        }


        function modalCadastrarTipo() {
            $scope.tipo = {}; //Limpa o obejto
            angular.element("#modalCadastrarTipo").modal('show');
        }


        function modalClose(modal) {
            angular.element(modal).modal('hide');
        }


    };

})();