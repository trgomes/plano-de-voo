(function () {
    'use strict';

    angular
        .module('app')
        .controller('AeroportoController', AeroportoController);

    AeroportoController.$inject = ['$scope', 'AeroportoService'];

    function AeroportoController($scope, AeroportoService) {

        $scope.getAllAeroportos = getAllAeroportos;
        $scope.addAeroporto = addAeroporto;
        $scope.getAeroporto = getAeroporto;
        $scope.deleteAeroporto = deleteAeroporto;
        $scope.updateAeroporto = updateAeroporto;
        $scope.modalEditar = modalEditar;
        $scope.modalExcluir = modalExcluir;
        $scope.modalCadastrar = modalCadastrar;


        function init() {
            getAllAeroportos();
            $scope.aeroporto = {};
        }


        function getAllAeroportos() {
            AeroportoService.getAllAeroportos()
                .then(function success(response) {
                    $scope.aeroportos = response.data;
                },
                    function error(response) {
                        $scope.message = 'Não foi encontrado nenhum aeroporto na base de dados';
                    });
        }


        function addAeroporto() {
            AeroportoService.addAeroporto($scope.aeroporto)
                .then(function success(response) {
                    toastr.success("Aeroporto cadastrada com sucesso");
                    modalClose("#modalCadastrar");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao cadastrar aeronave! Todos os campos são obrigatórios. Verifique e tente novamente.");
                    });
        }


        function getAeroporto(id) {
            AeroportoService.getAeroporto(id)
                .then(function success(response) {
                    $scope.aeroporto = response.data;
                },
                    function error(response) {
                        toastr.warning("Erro ao consultar aeroporto! ");
                    });
        }


        function deleteAeroporto(id) {
            AeroportoService.deleteAeroporto(id)
                .then(function success(response) {
                    toastr.success("Aeroporto excluída com sucesso!");
                    modalClose("#modalExcluir");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao tentar excluir aeroporto! ");
                    });
        }


        function updateAeroporto(aeroporto) {
            AeroportoService.updateAeroporto(aeroporto)
                .then(function success(response) {
                    toastr.success("Aeroporto alterada com sucesso!");
                    modalClose("#modalEditar");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao tentar alterar o aeroporto! Verifique todos os dados e tente novamente. ");
                    });
        }


        /* Modal */
        function modalEditar(id) {
            $scope.getAeroporto(id);
            angular.element("#modalEditar").modal('show');
        }

        function modalExcluir(aeroporto) {
            $scope.aeroporto = aeroporto; //Popula voo
            angular.element("#modalExcluir").modal('show');
        }

        function modalCadastrar() {
            $scope.aeroporto = {}; //Limpa o obejto
            angular.element("#modalCadastrar").modal('show');
        }

        function modalClose(modal) {
            angular.element(modal).modal('hide');
        }
        /* /Modal */

        init();

    };

})();
