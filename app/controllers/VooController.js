app.controller('VooController', function ($scope, VooService, aeronaves, aeroportos) {

    $scope.aeronaves = aeronaves.data;
    $scope.aeroportos = aeroportos.data;

    $scope.voo = {};    

    $scope.getAllVoos = function () {
        VooService.getAllVoos()
            .then(function success(response) {
                $scope.voos = response.data;                
            },
            function error(response) {
                $scope.message = 'Não foi encontrado nenhum voo cadastrado na base de dados.';                
            });
    }
   

    $scope.addVoo = function () {        

        VooService.addVoo($scope.voo)
            .then(function success(response) {                
                toastr.success("Voo cadastrado com sucesso");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao cadastrar voo! Todos os campos são obrigatórios. Verifique e tente novamente.");
            });
    }


    $scope.getVoo = function (id) {
        VooService.getVoo(id)
            .then(function success(response) {
                $scope.voo = response.data;                
            },
            function error(response) {
                toastr.warning("Erro ao consultar voo! ");
            });
    }


    $scope.deleteVoo = function (id) {
        VooService.deleteVoo(id)
            .then(function success(response) {
                toastr.success("Voo excluido com sucesso!");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar excluir voo! ");
            });
    }


    $scope.updateVoo = function (voo) {
        VooService.updateVoo(voo)
            .then(function success(response) {
                toastr.success("Voo alterado com sucesso!");
                init();
            },
            function error(response) {
                toastr.warning("Erro ao tentar alterar o voo! ");
            });
    }



    function init() {
        $scope.getAllVoos();               
        $scope.voo = {};
    }

    //Modal
    $scope.modalEditar = function(id){  
        $scope.getVoo(id);
        $scope.origem = $scope.voo.matriula_id;
        angular.element("#modalEditar").modal('show');
    }

    $scope.modalExcluir = function(voo){   
        $scope.voo = voo;
        angular.element("#modalExcluir").modal('show');
    }

    $scope.modalCadastrar = function(){
        $scope.voo = {};
        angular.element("#modalCadastrar").modal('show');
    }

    init();

});