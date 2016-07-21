requirejs.config({
    baseUrl: '',
    paths: {
        app: 'app',
        controllers: 'app/controllers',
        services: 'app/services',
        directives: 'app/directives'
    },
    urlArgs: 'nocache=' + (new Date()).getTime()
});

require(['app/bootstrap'], function (bootstrap) {
    bootstrap.init();
});
