"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
if (String('<%= BUILD_TYPE %>') === 'prod') {
    core_1.enableProdMode();
}
var loadConfig = function () {
    var result = new Promise(function (resolve, reject) {
        $.getJSON('../appconfig.json', function (data) {
            resolve(data);
        }).fail(function () { return reject({ type: 1, message: 'Can not load application configuratoin!' }); });
    });
    return result;
};
var bootApp = function () {
    loadConfig().then(function (appConfig) {
        window.sessionStorage.setItem('appConfig', JSON.stringify(appConfig));
        platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
    });
};
bootApp();
//# sourceMappingURL=main.js.map