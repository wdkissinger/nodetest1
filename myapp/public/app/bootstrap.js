define([
    'app/config', 'controllers/home', 'controllers/map', 'controllers/map3d',
    'services/mapService',
    'directives/baseMap', 'directives/base3dMap'
],
    function (config, home, map, map3d, mapService, baseMap, base3dMap) {
        function init() {
            angular
                .module('app', ['ngRoute', 'ngAnimate', 'ngQuantum'])
                .config(config)

                //controllers
                .controller('home', home)
                .controller('map', map)
                .controller('map3d', map3d)

                //services
                .service('mapService', mapService)

                //directives
                .directive('baseMap', baseMap)
                .directive('base3dMap', base3dMap);
                //.run(function () {});

            angular.bootstrap(document.body, ['app']);
        };

        return { init: init };
    });
