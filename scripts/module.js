(function () {
    "use strict";
    var module = angular.module("dntModule", ["ngComponentRouter"]);

    module.value("$routerRootComponent", "dntApp");


    module.component("appHome", {
        template: `
        <hr>
        <div class="panel panel-primary">
            <div class="panel-heading">Panel heading = HomePage</div>
            <div class="panel-body">
                HomePage
            </div>
        </div>`
    });

    module.component("appArticles", {
        template: `
        <hr>
        <div class="panel panel-primary">
            <div class="panel-heading">Panel heading = Articles</div>
            <div class="panel-body">
                Articles
            </div>
        </div>`
    });

    module.component("appAuthors", {
        template: `
        <hr>
        <div class="panel panel-primary">
            <div class="panel-heading">Panel heading = Authors</div>
            <div class="panel-body">
                Authors
            </div>
        </div>`
    });
} ());