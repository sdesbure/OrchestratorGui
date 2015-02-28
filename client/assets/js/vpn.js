var VpnController,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

VpnController = (function(superClass) {
  extend(VpnController, superClass);

  function VpnController() {
    return VpnController.__super__.constructor.apply(this, arguments);
  }

  VpnController.register(orchestratorGui);

  VpnController.inject('$scope', '$stateParams', '$state', '$controller');

  VpnController.prototype.initialize = function() {
    angular.extend(this, this.$controller('DefaultController', {
      $scope: this.$scope,
      $stateParams: this.$stateParams,
      $state: this.$state
    }));
    return this.$scope.master = {};
  };

  VpnController.prototype.update = function(vpn) {
    this.$scope.master = angular.copy(vpn);
    return console.log(vpn);
  };

  return VpnController;

})(BaseCtrl);
