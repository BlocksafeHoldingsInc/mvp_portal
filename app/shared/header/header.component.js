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
var router_1 = require("@angular/router");
var index_1 = require("../../base/index");
var index_2 = require("../../services/index");
var AyaHeaderComponent = (function () {
    function AyaHeaderComponent(router, currentRoute, authService, configService, responsive, localStorage) {
        this.router = router;
        this.currentRoute = currentRoute;
        this.authService = authService;
        this.configService = configService;
        this.responsive = responsive;
        this.localStorage = localStorage;
        this.onToggle = new core_1.EventEmitter();
    }
    AyaHeaderComponent.prototype.ngOnInit = function () {
        this.helpText = this.configService.helpText;
        var currentUser = this.authService.currentUser;
        this.userFullName = currentUser.fullName;
        this.updateViewMode();
        this.responsive.$resizeEvent
            .subscribe(this.updateViewMode.bind(this));
    };
    AyaHeaderComponent.prototype.updateViewMode = function () {
        this.isMobile = this.responsive.isMobile();
    };
    AyaHeaderComponent.prototype.showHelp = function () {
        this.localStorage.savePermanentData(true, index_2.DBkeys.FIRST_LOGIN);
        this.redirectHome();
    };
    AyaHeaderComponent.prototype.redirectHome = function () {
        this.router.navigate(['']);
    };
    AyaHeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.authService.redirectLogoutUser();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AyaHeaderComponent.prototype, "onToggle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AyaHeaderComponent.prototype, "pageTitle", void 0);
    AyaHeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'aya-header',
            templateUrl: 'header.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ["header.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            index_1.BaseAuthenticationService,
            index_1.BaseConfigService,
            index_2.ResponsiveService,
            index_2.LocalStoreManager])
    ], AyaHeaderComponent);
    return AyaHeaderComponent;
}());
exports.AyaHeaderComponent = AyaHeaderComponent;
//# sourceMappingURL=header.component.js.map