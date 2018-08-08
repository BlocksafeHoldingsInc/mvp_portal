"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var menu_config_1 = require("../../config/menu.config");
var core_1 = require("@angular/core");
var index_1 = require("../../base/index");
var MenuService = (function (_super) {
    __extends(MenuService, _super);
    function MenuService(autheService) {
        var _this = _super.call(this, autheService) || this;
        _this.autheService = autheService;
        _this.routes = menu_config_1.menuItems;
        return _this;
    }
    MenuService.prototype.getMenuItems = function () {
        var _this = this;
        var result = new Promise(function (resolve, reject) {
            if (_this.routes && _this.routes.length > 0) {
                resolve(_this.routes.filter(function (route) { return route.path !== '/'; }).filter(function (route) { return route.path !== '/login'; }));
            }
        });
        return result;
    };
    MenuService.prototype.getMenuItemsByPath = function (path) {
        var _this = this;
        var result = new Promise(function (resolve, reject) {
            if (_this.routes && _this.routes.length > 0) {
                for (var _i = 0, _a = _this.routes; _i < _a.length; _i++) {
                    var route = _a[_i];
                    if (route.path === path) {
                        resolve(route.title);
                    }
                    else if (route.subItems && route.subItems.length > 0) {
                        for (var _b = 0, _c = route.subItems; _b < _c.length; _b++) {
                            var childRoute = _c[_b];
                            if (childRoute.path === path) {
                                resolve(childRoute.title);
                            }
                        }
                    }
                }
            }
        });
        return result;
    };
    MenuService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.BaseAuthenticationService])
    ], MenuService);
    return MenuService;
}(index_1.BaseMenuService));
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map