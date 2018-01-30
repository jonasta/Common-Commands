angular.module('app', []);
angular.module('app').controller('AppController', function($scope){
  $scope.lista = [1,2,3,4];

  $scope.adicionaValor= function(v){
    $scope.lista.push(v);
  }
});
