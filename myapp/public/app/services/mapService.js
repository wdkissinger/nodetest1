define([], function() {

    function service() {
        var self = this;
        self.maps2d = {};
        self.maps3d = {};

        self.create2dMap = function(mapName) {
            self.maps2d[mapName] = new ol.Map({
                target: mapName,
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([11.601563, 50.226124]),
                    zoom: 4
                })
            });
        };

        self.create3dMap = function(mapName) {
            self.maps3d[mapName] = new Cesium.Viewer(mapName);
            self.maps3d[mapName].camera.setView({
                destination: Cesium.Cartesian3.fromDegrees(11.601563, 50.226124, 3000000)
                    // orientation: {
                    //     heading : Cesium.Math.toRadians(heading),
                    //     pitch : Cesium.Math.toRadians(tilt - 90.0),
                    //     roll : Cesium.Math.toRadians(roll)
                    // }
            });

            var viewer = new Cesium.Viewer('cesiumContainer', {
                imageryProvider : new Cesium.ArcGisMapServerImageryProvider({
                    url : 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer'
                }),
                baseLayerPicker : false
            });
        };

        self.setLocationAll = function() {
          angular.forEach(self.maps2d, function(map2d, i){
            map2d.getView().setCenter(ol.proj.transform([33.909302, 44.431573], 'EPSG:4326', 'EPSG:3857'));
            map2d.getView().setZoom(6);
          });

          angular.forEach(self.maps3d, function(map3d, i){

            map3d.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(33.909302, 44.431573, 500000),
                orientation: {
                    heading: Cesium.Math.toRadians(0.0),
                    pitch: Cesium.Math.toRadians(-90.0),
                    roll: 0.0
                },
                duration: 3, // in seconds
                complete: function() {
                    // called when the flight finishes
                }
            });

          });
        };

    };

    service.$inject = [];
    return service;
});
