class VpnController extends BaseCtrl
  # @register orchestratorGui
  
  @inject '$scope', '$stateParams', '$state', '$controller'
  
  initialize: ->
    angular.extend(this,  @$controller('DefaultController', {$scope: @$scope, $stateParams: @$stateParams, $state: @$state}));
    @$scope.master = {}

  update: (vpn) ->
    @$scope.master = angular.copy vpn
    console.log vpn
