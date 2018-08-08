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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var leftmenu_component_1 = require("./leftmenu/leftmenu.component");
var header_component_1 = require("./header/header.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var material_1 = require("@angular/material");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: []
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule, ngx_bootstrap_1.AlertModule,
                material_1.MatButtonModule,
                material_1.MatListModule,
                material_1.MatIconModule,
                material_1.MatSelectModule,
                material_1.MatFormFieldModule,
                material_1.MatMenuModule
            ],
            declarations: [leftmenu_component_1.AyaMenuComponent, header_component_1.AyaHeaderComponent],
            exports: [common_1.CommonModule, forms_1.FormsModule, router_1.RouterModule, leftmenu_component_1.AyaMenuComponent, header_component_1.AyaHeaderComponent]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map