(function () {
    'use strict';

    angular
        .module('app')
        .controller('AeronaveController', AeronaveController);

    AeronaveController.$inject = ['$scope', 'AeronaveService', 'tipos'];

    function AeronaveController($scope, AeronaveService, tipos) {

        $scope.tipos = tipos.data;

        //Functions
        $scope.getAllAeronaves = getAllAeronaves;
        $scope.addAeronave = addAeronave;
        $scope.getAeronave = getAeronave;
        $scope.deleteAeronave = deleteAeronave;
        $scope.updateAeronave = updateAeronave;
        $scope.modalEditar = modalEditar;
        $scope.modalExcluir = modalExcluir;
        $scope.modalCadastrar = modalCadastrar;
        $scope.modalCadastrarTipo = modalCadastrarTipo;


        function init() {
            getAllAeronaves();
            $scope.aeronave = {};
        }


        function getAllAeronaves() {
            AeronaveService.getAllAeronaves()
                .then(function success(response) {
                    $scope.aeronaves = response.data;
                },
                    function error(response) {
                        $scope.message = 'Não foi encontrado nenhuma aeronave cadastrada na base de dados';
                    });
        }


        function addAeronave() {
            AeronaveService.addAeronave($scope.aeronave)
                .then(function success(response) {
                    toastr.success("Aeronave cadastrada com sucesso");
                    modalClose("#modalCadastrar");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao cadastrar aeronave! Todos os campos são obrigatórios. Verifique e tente novamente.");
                    });
        }


        function getAeronave(id) {
            AeronaveService.getAeronave(id)
                .then(function success(response) {
                    $scope.aeronave = response.data;
                },
                    function error(response) {
                        toastr.warning("Erro ao consultar aeronave! ");
                    });
        }


         function deleteAeronave(id) {
            AeronaveService.deleteAeronave(id)
                .then(function success(response) {
                    toastr.success("Aeronave excluída com sucesso!");
                    modalClose("#modalExcluir");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao tentar excluir aeronave! ");
                    });
        }


        function updateAeronave(aeronave) {
            AeronaveService.updateAeronave(aeronave)
                .then(function success(response) {
                    toastr.success("Aeronave alterada com sucesso!");
                    modalClose("#modalEditar");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao tentar alterar o voo! Verifique todos os dados e tente novamente. ");
                    });
        }


        /* Modal */
        function modalEditar(id) {
            $scope.getAeronave(id);
            angular.element("#modalEditar").modal('show');
        }

        function modalExcluir(aeronave) {
            $scope.aeronave = aeronave; //Popula voo
            angular.element("#modalExcluir").modal('show');
        }

        function modalCadastrar() {
            $scope.aeronave = {}; //Limpa o obejto
            angular.element("#modalCadastrar").modal('show');
        }

        function modalCadastrarTipo() {
            angular.element("#modalCadastrarTipo").modal('show');
        }

        function modalClose(modal) {
            angular.element(modal).modal('hide');
        }
        /* /Modal */

        init();


    };

})();
