define([], function() {
    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/Home.html?nocache=' + new Date(),
                controller: 'home',
                controllerAs: 'vm'
            })
            .when('/Map', {
                templateUrl: 'views/Map.html?nocache=' + new Date(),
                controller: 'map',
                controllerAs: 'vm'
            })
            .when('/Map3d', {
                templateUrl: 'views/Map3d.html?nocache=' + new Date(),
                controller: 'map3d',
                controllerAs: 'vm'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
    config.$inject = ['$routeProvider', '$locationProvider'];
    return config;
});
