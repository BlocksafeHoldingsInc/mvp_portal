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
var platform_browser_1 = require("@angular/platform-browser");
require("./operators");
require("rxjs/operators/map");
require("rxjs/add/operator/distinctUntilChanged");
var ng2_toasty_1 = require("ng2-toasty");
var login_component_1 = require("./login/login.component");
var index_1 = require("./base/index");
var index_2 = require("./services/index");
var material_1 = require("@angular/material");
var AppComponent = (function () {
    function AppComponent(authService, menuService, alertService, router, titleService, toastyService, toastyConfig, responsive, localStorage, configService) {
        this.authService = authService;
        this.menuService = menuService;
        this.alertService = alertService;
        this.router = router;
        this.titleService = titleService;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.responsive = responsive;
        this.localStorage = localStorage;
        this.configService = configService;
        this.stickyToasties = [];
        this.menuOpened = false;
        this.menuCollapsed = false;
        this.toastyConfig.theme = 'material';
        this.toastyConfig.position = 'top-center';
        this.toastyConfig.limit = 100;
        this.toastyConfig.showClose = true;
        this.isMobile = responsive.isMobile();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isUserLoggedIn = this.authService.isLoggedIn;
        if (this.isUserLoggedIn) {
            this.isUserFirstLogin = this.authService.isUserFirstLogin;
        }
        this.updateDrawerViewMode();
        this.alertService.getMessageEvent().subscribe(function (message) { return _this.showToast(message, false); });
        this.alertService.getStickyMessageEvent().subscribe(function (message) { return _this.showToast(message, true); });
        this.authService.reLoginDelegate = function () { return _this.shouldShowLogin = true; };
        this.authService.getLoginStatusEvent().subscribe(function (isLoggedIn) {
            _this.isUserLoggedIn = isLoggedIn;
            _this.isUserFirstLogin = _this.authService.isUserFirstLogin;
            _this.updateDrawerViewMode();
            setTimeout(function () {
                if (!_this.isUserLoggedIn) {
                    _this.alertService.showMessage('Session Ended!', '', index_2.MessageSeverity.default);
                    _this.authService.logout();
                    _this.authService.redirectLogoutUser();
                }
            }, 500);
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.isUserFirstLogin = _this.authService.isUserFirstLogin;
                _this.updateDrawerViewMode();
                var title = _this.getTitle(_this.router.routerState, _this.router.routerState.root).join('-');
                _this.pageTitle = title;
                var url = event.url;
                if (url !== url.toLowerCase()) {
                    _this.router.navigateByUrl(event.url.toLowerCase());
                }
                if (_this.responsive.isMobile()) {
                    _this.sidenav.close();
                }
            }
        });
        this.router.events
            .distinctUntilChanged(function (previous, current) {
            if (current instanceof router_1.NavigationEnd) {
                return previous.url === current.url;
            }
            return true;
        })
            .subscribe(function (x) {
            gtag('config', _this.configService.googleAnalitycsId, { 'page_path': x.url });
        });
        this.responsive.$resizeEvent.subscribe(function () {
            _this.updateDrawerViewMode();
        });
    };
    AppComponent.prototype.getTitle = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.title) {
            data.push(parent.snapshot.data.title);
        }
        if (state && parent) {
            data.push.apply(data, this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    };
    AppComponent.prototype.updateDrawerViewMode = function () {
        this.isMobile = this.responsive.isMobile();
        this.menuOpened = this.isUserLoggedIn && !this.isMobile && !this.isUserFirstLogin;
        this.menuCollapsed = !this.isMobile && this.menuCollapsed;
    };
    AppComponent.prototype.showToast = function (message, isSticky) {
        var _this = this;
        if (!message) {
            for (var _i = 0, _a = this.stickyToasties.slice(0); _i < _a.length; _i++) {
                var id = _a[_i];
                this.toastyService.clear(id);
            }
            return;
        }
        var toastOptions = {
            title: message.summary,
            msg: message.detail,
            timeout: isSticky ? 0 : 4000
        };
        if (isSticky) {
            toastOptions.onAdd = function (toast) { return _this.stickyToasties.push(toast.id); };
            toastOptions.onRemove = function (toast) {
                var index = _this.stickyToasties.indexOf(toast.id, 0);
                if (index > -1) {
                    _this.stickyToasties.splice(index, 1);
                }
                toast.onAdd = null;
                toast.onRemove = null;
            };
        }
        switch (message.severity) {
            case index_2.MessageSeverity.default:
                this.toastyService.default(toastOptions);
                break;
            case index_2.MessageSeverity.info:
                this.toastyService.info(toastOptions);
                break;
            case index_2.MessageSeverity.success:
                this.toastyService.success(toastOptions);
                break;
            case index_2.MessageSeverity.error:
                this.toastyService.error(toastOptions);
                break;
            case index_2.MessageSeverity.warn:
                this.toastyService.warning(toastOptions);
                break;
            case index_2.MessageSeverity.wait:
                this.toastyService.wait(toastOptions);
                break;
        }
    };
    AppComponent.prototype.onLoginModalHidden = function () {
        this.shouldShowLogin = false;
    };
    AppComponent.prototype.toggleMenuOpen = function () {
        this.sidenav.toggle();
    };
    AppComponent.prototype.toggleMenuCollapse = function () {
        if (this.isMobile) {
            this.toggleMenuOpen();
        }
        else {
            this.menuCollapsed = !this.menuCollapsed;
        }
    };
    __decorate([
        core_1.ViewChildren('loginControl'),
        __metadata("design:type", login_component_1.LoginComponent)
    ], AppComponent.prototype, "loginControl", void 0);
    __decorate([
        core_1.ViewChild('sidenav'),
        __metadata("design:type", material_1.MatDrawer)
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [index_1.BaseAuthenticationService, index_1.BaseMenuService,
            index_1.BaseAlertService, router_1.Router, platform_browser_1.Title,
            ng2_toasty_1.ToastyService, ng2_toasty_1.ToastyConfig,
            index_2.ResponsiveService,
            index_2.LocalStoreManager,
            index_1.BaseConfigService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map