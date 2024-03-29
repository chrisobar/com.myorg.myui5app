sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("com.myorg.myui5app.controller.MainView", {
        onInit: function () {
            console.log("onInit");
        },
        onBeforeRendering: function () {
            console.log("onBeforeRendering");
        },
        onAfterRendering: function () {
            console.log("onAfterRendering");
        },
        onExit: function () {
            console.log("onExit");
        },
    });
});
