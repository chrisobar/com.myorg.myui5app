sap.ui.define(["sap/ui/core/mvc/View", "sap/m/App", "sap/m/Page"], function (View, App, Page) {
    "use strict";

    return View.extend("com.myorg.myui5app.view.MainView", {
        getControllerName: function () {
            return "com.myorg.myui5app.controller.MainView";
        },

        createContent: function (oController) {
            var oInput = new sap.m.Input("idInput", {
                placeholder: "Enter Name",
            });

            var oBtn = new sap.m.Button({
                text: "Submit",
                press: [oController.goToSecondPage, oController],
            });
            return new App(this.createId("idAppControl"), {
                pages: new Page({
                    title: "{i18n>title}",
                    content: [oInput, oBtn],
                }),
            });
        },
    });
});
