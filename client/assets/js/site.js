var SiteController,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

SiteController = (function(superClass) {
  extend(SiteController, superClass);

  function SiteController() {
    return SiteController.__super__.constructor.apply(this, arguments);
  }

  SiteController.register(orchestratorGui);

  SiteController.inject('$scope', '$stateParams', '$state', '$controller');

  SiteController.prototype.initialize = function() {
    angular.extend(this, this.$controller('DefaultController', {
      $scope: this.$scope,
      $stateParams: this.$stateParams,
      $state: this.$state
    }));
    return this.$scope.master = {};
  };

  SiteController.prototype.update = function(vpn) {
    this.$scope.master = angular.copy(vpn);
    return console.log(vpn);
  };

  return SiteController;

})(BaseCtrl);
