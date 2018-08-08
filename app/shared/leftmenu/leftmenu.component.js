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
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var index_1 = require("../../base/index");
var AyaMenuComponent = (function () {
    function AyaMenuComponent(_elementRef, sanitizer, router, menuService) {
        var _this = this;
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        this.router = router;
        this.menuService = menuService;
        this.collapsed = true;
        this.menuService.getMenuItems()
            .then(function (result) {
            if (result && result.length > 0) {
                _this.menulist = result;
            }
        })
            .catch(function (error) {
            console.error(error);
        });
    }
    AyaMenuComponent.prototype.toggleSubMenu = function (item) {
        item.expand = !item.expand;
    };
    AyaMenuComponent.prototype.redirectHome = function () {
        this.router.navigate(['']);
    };
    AyaMenuComponent.prototype.navigateTo = function (path) {
        this.router.navigate([path]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AyaMenuComponent.prototype, "collapsed", void 0);
    AyaMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'aya-menu',
            templateUrl: 'leftmenu.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ["leftmenu.component.css"]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, platform_browser_1.DomSanitizer,
            router_1.Router, index_1.BaseMenuService])
    ], AyaMenuComponent);
    return AyaMenuComponent;
}());
exports.AyaMenuComponent = AyaMenuComponent;
//# sourceMappingURL=leftmenu.component.js.map