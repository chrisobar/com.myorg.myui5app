sap.ui.define(["sap/ui/core/mvc/View", "sap/m/App", "sap/m/Page"], function (View, App, Page) {
    "use strict";

    return View.extend("com.myorg.myui5appp.view.DisplayName", {
        getControllerName: function () {
            return "com.myorg.myui5appp.controller.DisplayName";
        },
        createContent: function () {
            var oLabel = new sap.m.Label("idLabel");
            return new App(this.createId("idDisplayNamePage"), {
                pages: new Page({
                    title: "Welcome",
                    showNavButton: true,
                    navButtonPress: function (oEvt) {
                        App.back();
                    },
                    content: [oLabel],
                }),
            });
        },
    });
});
