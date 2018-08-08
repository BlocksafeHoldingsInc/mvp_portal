"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var my_account_component_1 = require("./my-account.component");
var my_account_routing_module_1 = require("./my-account-routing.module");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var MyAccountModule = (function () {
    function MyAccountModule() {
    }
    MyAccountModule_1 = MyAccountModule;
    MyAccountModule.forRoot = function () {
        return {
            ngModule: MyAccountModule_1,
            providers: []
        };
    };
    MyAccountModule = MyAccountModule_1 = __decorate([
        core_1.NgModule({
            imports: [my_account_routing_module_1.MyAccountRoutingModule, material_1.MatCardModule, common_1.CommonModule],
            declarations: [my_account_component_1.MyAccountComponent],
            exports: [my_account_component_1.MyAccountComponent]
        })
    ], MyAccountModule);
    return MyAccountModule;
    var MyAccountModule_1;
}());
exports.MyAccountModule = MyAccountModule;
//# sourceMappingURL=my-account.module.js.map