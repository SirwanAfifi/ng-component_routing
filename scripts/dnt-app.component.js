(function () {
    "use strict";
    var module = angular.module("dntModule");
    module.component("dntApp", {
        templateUrl: "/scripts/dnt-app.component.html",
        $routeConfig: [
            { path: "/home", component: "appHome", name: "Home" },
            { path: "/articles", component: "appArticles", name: "Articles" },
            { path: "/authors", component: "appAuthors", name: "Authors" },
            { path: "/**", redirectTo: ["Home"] }
        ]
    });
} ());