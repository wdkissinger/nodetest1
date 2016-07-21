define([], function() {

    function directive(mapService) {
      return {
          restrict: 'EA',
          replace: true,
          template: '<div class="map"></div>',
          link: function (scope, elem, attrs) {
            mapService.create2dMap(attrs.id);
          }
      };
    };

    directive.$inject = ['mapService'];
    return directive;
});
