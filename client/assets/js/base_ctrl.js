var slice = [].slice;

this.BaseCtrl = (function() {
  BaseCtrl.register = function(app, name) {
    var ref;
    if (name == null) {
      name = this.name || ((ref = this.toString().match(/function\s*(.*?)\(/)) != null ? ref[1] : void 0);
    }
    return app.controller(name, this);
  };

  BaseCtrl.inject = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return this.$inject = args;
  };

  function BaseCtrl() {
    var args, fn, i, index, key, len, ref, ref1;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    ref = this.constructor.$inject;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      key = ref[index];
      this[key] = args[index];
    }
    ref1 = this.constructor.prototype;
    for (key in ref1) {
      fn = ref1[key];
      if (typeof fn !== 'function') {
        continue;
      }
      if ((key === 'constructor' || key === 'initialize') || key[0] === '_') {
        continue;
      }
      this.$scope[key] = (typeof fn.bind === "function" ? fn.bind(this) : void 0) || _.bind(fn, this);
    }
    if (typeof this.initialize === "function") {
      this.initialize();
    }
  }

  return BaseCtrl;

})();
