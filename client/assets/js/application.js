var ApplicationController,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ApplicationController = (function(superClass) {
  extend(ApplicationController, superClass);

  function ApplicationController() {
    return ApplicationController.__super__.constructor.apply(this, arguments);
  }

  ApplicationController.register(orchestratorGui);

  ApplicationController.inject('$scope', '$stateParams', '$state', '$controller');

  ApplicationController.prototype.initialize = function() {
    angular.extend(this, this.$controller('DefaultController', {
      $scope: this.$scope,
      $stateParams: this.$stateParams,
      $state: this.$state
    }));
    return this.$scope.master = {};
  };

  ApplicationController.prototype.update = function(vpn) {
    this.$scope.master = angular.copy(vpn);
    return console.log(vpn);
  };

  return ApplicationController;

})(BaseCtrl);
