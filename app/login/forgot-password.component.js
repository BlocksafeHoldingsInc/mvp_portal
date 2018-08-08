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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var index_1 = require("../base/index");
var index_2 = require("../services/alert/index");
var index_3 = require("../models/index");
var index_4 = require("../services/application/index");
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(authService, alertService, configService, route, router) {
        this.authService = authService;
        this.alertService = alertService;
        this.configService = configService;
        this.route = route;
        this.router = router;
        this.userLogin = new index_3.UserLogin();
        this.isLoading = false;
        this.passwordPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helpText = this.configService.helpText;
        this.route.params.subscribe(function (params) {
            _this.reason = params['reason'];
        });
    };
    ForgotPasswordComponent.prototype.ngOnDestroy = function () {
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        if (this.form.invalid)
            return;
        this.sendNewPassword();
    };
    ForgotPasswordComponent.prototype.sendNewPassword = function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Sending the instruction ...');
        this.authService.resetPassword(this.userLogin.username)
            .subscribe(function (email) {
            setTimeout(function () {
                _this.alertService.stopLoadingMessage();
                _this.isLoading = false;
            }, 500);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            if (index_4.Utilities.checkNoNetwork(error)) {
                console.log(index_4.Utilities.noNetworkMessageCaption);
                _this.alertService.showStickyMessage(index_4.Utilities.noNetworkMessageCaption, index_4.Utilities.noNetworkMessageDetail, index_2.MessageSeverity.error, error);
            }
            else {
                if (index_4.Utilities.checkNoNetwork(error)) {
                    _this.alertService.showStickyMessage(index_4.Utilities.noNetworkMessageCaption, index_4.Utilities.noNetworkMessageDetail, index_2.MessageSeverity.error, error);
                }
                else {
                    var errorMessage = index_4.Utilities.findHttpResponseMessage('error_description', error);
                    if (errorMessage) {
                        _this.alertService.showStickyMessage('Unable to Reset', errorMessage, index_2.MessageSeverity.error, error);
                    }
                    else {
                        _this.alertService.showStickyMessage('Unable to reset', 'An error occured, please try again later.'
                            || error.status, index_2.MessageSeverity.error, error);
                    }
                }
            }
            setTimeout(function () {
                _this.isLoading = false;
            }, 500);
        });
        console.log('email', this.userLogin.username);
    };
    ForgotPasswordComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, index_2.MessageSeverity.error);
    };
    __decorate([
        core_1.ViewChild('form'),
        __metadata("design:type", forms_1.NgForm)
    ], ForgotPasswordComponent.prototype, "form", void 0);
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-forgot-password',
            templateUrl: 'forgot-password.component.html',
            styleUrls: ['forgot-password.component.css'],
        }),
        __metadata("design:paramtypes", [index_1.BaseAuthenticationService,
            index_1.BaseAlertService,
            index_1.BaseConfigService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map