(function () {
    "use strict";
    var app = angular.module("dntModule");
    function DntArchiveController() {
      var model = this;
      model.panel = {
          title: "Panel Title",
          items: [
              {
                  title: "Home", url: "#/home"
              },
              {
                  title: "Articles", url: "#/articles"
              },
              {
                  title: "Authors", url: "#/authors"
              }
          ]
      };
    };

    app.component("dntWidget", {
        templateUrl: '/scripts/dnt-widget.component.html',
        controllerAs: "model",
        controller: DntArchiveController
    });
} ());