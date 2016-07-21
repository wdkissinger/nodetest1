define([], function(){

  function controller(mapService){
    var vm = this;
    vm.zoom = function(){
      mapService.setLocationAll();
    };

  };

  controller.$inject = ['mapService'];
  return controller;
});
