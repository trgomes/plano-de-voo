(function () {
    'use strict';

    angular
        .module('app')
        .controller('VooController', VooController);

    VooController.$inject = ['$scope', 'VooService', 'aeronaves', 'aeroportos']

    function VooController($scope, VooService, aeronaves, aeroportos) {

        $scope.aeronaves = aeronaves.data; // Popula o select aeronaves
        $scope.aeroportos = aeroportos.data; // Popula o selec aeroportos  

        function init() {
            $scope.getAllVoos();
            $scope.voo = {};
        }

        //Functions
        $scope.getAllVoos = getAllVoos;
        $scope.addVoo = addVoo;
        $scope.getVoo = getVoo;
        $scope.deleteVoo = deleteVoo;
        $scope.updateVoo = updateVoo;
        $scope.modalEditar = modalEditar;
        $scope.modalExcluir = modalExcluir;
        $scope.modalCadastrar = modalCadastrar;

        function getAllVoos() {
            VooService.getAllVoos()
                .then(function success(response) {
                    $scope.voos = response.data;
                },
                    function error(response) {
                        $scope.message = 'Não foi encontrado nenhum voo cadastrado na base de dados. Comece cadastrando as aeronaves e os aeroportos';
                    });
        }


        function addVoo() {

            /* if ($scope.voo.origem === $scope.voo.destino) {
                $scope.errorMessage = "Ops! O aeroporto de origem não pode ser igual ao de destino.";
            } */
            VooService.addVoo($scope.voo)
                .then(function success(response) {
                    toastr.success("Voo cadastrado com sucesso");
                    modalClose("#modalCadastrar");
                    $scope.errorMessage = '';
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao cadastrar voo! Todos os campos são obrigatórios. Verifique e tente novamente.");
                    });

        }


        function getVoo(id) {
            VooService.getVoo(id)
                .then(function success(response) {
                    $scope.voo = response.data;
                },
                    function error(response) {
                        toastr.warning("Erro ao consultar voo! ");
                    });
        }


        function deleteVoo(id) {
            VooService.deleteVoo(id)
                .then(function success(response) {
                    toastr.success("Voo excluido com sucesso!");
                    modalClose("#modalExcluir");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao tentar excluir voo! ");
                    });
        }


        function updateVoo(voo) {
            VooService.updateVoo(voo)
                .then(function success(response) {
                    toastr.success("Voo alterado com sucesso!");
                    modalClose("#modalEditar");
                    init();
                },
                    function error(response) {
                        toastr.warning("Erro ao tentar alterar o voo! Verifique todos os dados e tente novamente. ");
                    });
        }


        /* Modal */
        function modalEditar(id) {
            $scope.getVoo(id);
            $scope.origem = $scope.voo.matriula_id;
            angular.element("#modalEditar").modal('show');
        }

        function modalExcluir(voo) {
            $scope.voo = voo; //Popula voo
            angular.element("#modalExcluir").modal('show');
        }

        function modalCadastrar() {
            $scope.voo = {}; //Limpa o obejto
            angular.element("#modalCadastrar").modal('show');
        }

        function modalClose(modal) {
            angular.element(modal).modal('hide');
        }
        /* /Modal */

        init();

    };

})();