"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../services/index");
var router_1 = require("@angular/router");
var MyAccountComponent = (function () {
    function MyAccountComponent(menuProvider, router) {
        this.menuProvider = menuProvider;
        this.router = router;
        this.router.navigate(['timecard/current']);
    }
    MyAccountComponent.prototype.navigate = function (module) {
        this.router.navigate([module.path]);
    };
    MyAccountComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-account',
            templateUrl: 'my-account.component.html',
            styleUrls: ['my-account.component.css'],
        }),
        __metadata("design:paramtypes", [index_1.MenuService, router_1.Router])
    ], MyAccountComponent);
    return MyAccountComponent;
}());
exports.MyAccountComponent = MyAccountComponent;
//# sourceMappingURL=my-account.component.js.map