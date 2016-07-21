define([], function() {

    function directive(mapService) {
      return {
          restrict: 'EA',
          replace: true,
          template: '<div></div>',
          link: function (scope, elem, attrs) {
            mapService.create3dMap(attrs.id);
          }
      };
    };

    directive.$inject = ['mapService'];
    return directive;
});
