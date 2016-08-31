(function () {

    angular
        .module("AndroidXerox")
        .config(configure);

    // Angular Routing configurations
    // the new page/url should be added here in order to navigate to it
    //
    function configure($routeProvider,$httpProvider) {
        // $routeProvider
        //     .when("/home", {
        //         templateUrl: "./views/home.view.html",
        //         controller : "HomeController as HomeModel"
        //     })
        //     .otherwise({
        //         redirectTo: "/home"
        //     });

        $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    }
})();