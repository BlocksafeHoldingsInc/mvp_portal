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
var index_1 = require("../base/index");
var index_2 = require("../services/alert/index");
var index_3 = require("../models/index");
var index_4 = require("../services/application/index");
var LoginComponent = (function () {
    function LoginComponent(authService, alertService, configService) {
        this.authService = authService;
        this.alertService = alertService;
        this.configService = configService;
        this.userLogin = new index_3.UserLogin();
        this.isLoading = false;
        this.formResetToggle = true;
        this.enableForgotPasswordFeature = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.helpText = this.configService.helpText;
        this.userLogin.rememberMe = this.authService.rememberMe;
        if (this.getShouldRedirect()) {
            this.authService.redirectLoginUser();
        }
        else {
            this.loginStatusSubscription = this.authService.getLoginStatusEvent().subscribe(function (isLoggedIn) {
                if (_this.getShouldRedirect()) {
                    _this.authService.redirectLoginUser();
                }
            });
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.loginStatusSubscription)
            this.loginStatusSubscription.unsubscribe();
    };
    LoginComponent.prototype.showForgotPassword = function () {
        this.isForgotPassword = true;
    };
    LoginComponent.prototype.cancelPasswordReset = function () {
        this.isForgotPassword = false;
        this.passwordEmailSent = false;
    };
    LoginComponent.prototype.sendNewPassowrd = function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Sending the instruction ...');
        this.authService.resetPassword(this.userLogin.username)
            .subscribe(function (email) {
            setTimeout(function () {
                _this.alertService.stopLoadingMessage();
                _this.isLoading = false;
                _this.isForgotPassword = false;
                _this.passwordEmailSent = true;
                _this.reset();
            }, 500);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            if (index_4.Utilities.checkNoNetwork(error)) {
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
    };
    LoginComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, index_2.MessageSeverity.error);
    };
    LoginComponent.prototype.getShouldRedirect = function () {
        return this.authService.isLoggedIn && !this.authService.isSessionExpired;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Attempting login...');
        this.authService.login(this.userLogin.username, this.userLogin.password, this.userLogin.rememberMe)
            .subscribe(function (user) {
            setTimeout(function () {
                _this.alertService.stopLoadingMessage();
                _this.isLoading = false;
                _this.reset();
            }, 500);
        }, function (error) {
            _this.alertService.stopLoadingMessage();
            if (index_4.Utilities.checkNoNetwork(error)) {
                _this.alertService.showStickyMessage(index_4.Utilities.noNetworkMessageCaption, index_4.Utilities.noNetworkMessageDetail, index_2.MessageSeverity.error, error);
            }
            else {
                if (index_4.Utilities.checkNoNetwork(error)) {
                    _this.alertService.showStickyMessage(index_4.Utilities.noNetworkMessageCaption, index_4.Utilities.noNetworkMessageDetail, index_2.MessageSeverity.error, error);
                }
                else {
                    var errorMessage = index_4.Utilities.findHttpResponseMessage('error_description', error);
                    if (errorMessage) {
                        _this.alertService.showStickyMessage('Unable to login', errorMessage, index_2.MessageSeverity.error, error);
                    }
                    else
                        _this.alertService.showStickyMessage('Unable to login', 'An error occured while logging in, please try again later.\nError: '
                            + error.statusText || error.status, index_2.MessageSeverity.error, error);
                }
            }
            setTimeout(function () {
                _this.isLoading = false;
            }, 500);
        });
    };
    LoginComponent.prototype.reset = function () {
        var _this = this;
        this.formResetToggle = false;
        setTimeout(function () {
            _this.formResetToggle = true;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css'],
        }),
        __metadata("design:paramtypes", [index_1.BaseAuthenticationService, index_1.BaseAlertService,
            index_1.BaseConfigService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map