"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var index_1 = require("./index");
var ServiceModule = (function () {
    function ServiceModule() {
    }
    ServiceModule_1 = ServiceModule;
    ServiceModule.forRoot = function () {
        return {
            ngModule: ServiceModule_1,
            providers: [
                index_1.AppService,
                index_1.MenuService,
                index_1.AuthenticationService,
                index_1.ConfigurationService,
                index_1.LocalStoreManager,
                index_1.EndpointFactory,
                index_1.AlertService,
                index_1.TimeCardPrintService
            ]
        };
    };
    ServiceModule = ServiceModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, http_1.HttpModule, router_1.RouterModule],
            declarations: [],
            exports: [common_1.CommonModule, http_1.HttpModule, router_1.RouterModule]
        })
    ], ServiceModule);
    return ServiceModule;
    var ServiceModule_1;
}());
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=service.module.js.map