(function() {
  'use strict';

  angular.module('application', [
      'ui.router',
      'ngAnimate',

      //foundation
      'foundation',
      'foundation.dynamicRouting',
      'foundation.dynamicRouting.animations'
  ])
    .config(config)
    .run(run)
    ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }

  function run() {
    FastClick.attach(document.body);
  }

  VpnController.$inject = ['$scope', '$stateParams', '$state', '$controller'];
  function VpnController($scope, $stateParams, $state, $controller) {
    angular.extend(this, $controller('DefaultController', {$scope: $scope, $stateParams: $stateParams, $state: $state}));

    $scope.master = {};

    $scope.update = function(vpn) {
      $scope.master = angular.copy(vpn);
    };
  }

})();
