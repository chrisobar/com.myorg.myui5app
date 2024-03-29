sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("com.myorg.myui5app.controller.MainView", {
        goToSecondPage: function (oEvt) {
            // var oLabel = sap.ui.getCore().byId("idLabel");
            // var oInputVal = sap.ui.getCore().byId("idInput").getValue();

            // console.log(oInputVal);
            // if (oInputVal !== undefined) {
            //     oLabel.setText(oInputVal);
            //     console.log(oLabel.getText());
            // }
            var oApp = new sap.m.App();
            var oSecondView = sap.ui.getCore().byId("idDisplayNamePage");
            oApp.to(oSecondView);
        },
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
