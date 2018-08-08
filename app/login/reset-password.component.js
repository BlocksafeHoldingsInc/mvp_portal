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
var moment = require("moment");
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authService, alertService, configService, route, router) {
        var _this = this;
        this.authService = authService;
        this.alertService = alertService;
        this.configService = configService;
        this.route = route;
        this.router = router;
        this.userLogin = new index_3.UserLogin();
        this.isLoading = false;
        this.passwordPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/);
        this.route.queryParams.subscribe(function (params) {
            if (!_this.token) {
                _this.token = params['resettoken'];
            }
            if (!_this.tokenExpires) {
                _this.tokenExpires = params['resettokenexpires'];
                if (_this.isTokenExpired(_this.tokenExpires)) {
                    _this.router.navigate(['/forgotpassword', { reason: 'expired' }]);
                }
            }
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.helpText = this.configService.helpText;
        if (this.authService.isLoggedIn) {
            this.authService.logout();
        }
    };
    ResetPasswordComponent.prototype.isTokenExpired = function (expires) {
        return moment(expires, 'MM/DD/YYYY HH:mm:ss').isBefore(moment());
    };
    ResetPasswordComponent.prototype.onSubmit = function () {
        if (this.form.controls.password.errors) {
            switch (true) {
                case this.form.controls.password.hasError('required'):
                    this.showErrorAlert('Password is required', 'Please enter a new password');
                    break;
                case this.form.controls.password.hasError('pattern'):
                    this.showErrorAlert('Password is not correct', 'Please check requirements to password');
                    break;
                default:
                    this.showErrorAlert('Password is not valid', 'Please enter valid password');
            }
            return;
        }
        if (this.form.controls.confirmPassword.errors) {
            switch (true) {
                case this.form.controls.confirmPassword.hasError('required'):
                    this.showErrorAlert('Confirm password is required', 'Please enter confirm password');
                    break;
            }
            return;
        }
        if (this.form.controls.confirmPassword.value !== this.form.controls.password.value) {
            this.showErrorAlert('Confirm doesn\'t match', 'Password does not match the confirm password.');
            return;
        }
        this.sendProcessPassword();
    };
    ResetPasswordComponent.prototype.sendProcessPassword = function () {
        var _this = this;
        this.isLoading = true;
        this.alertService.startLoadingMessage('', 'Updating your password ...');
        this.authService.updatePassword(this.token, this.userLogin.password)
            .subscribe(function () {
            _this.alertService.stopLoadingMessage();
            _this.isLoading = false;
            _this.router.navigate(['']);
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
                        _this.alertService.showStickyMessage('Unable to update', errorMessage, index_2.MessageSeverity.error, error);
                    }
                    else {
                        _this.alertService.showStickyMessage('Unable to update', 'An error occured, please try again later.'
                            || error.status, index_2.MessageSeverity.error, error);
                    }
                }
            }
            setTimeout(function () {
                _this.isLoading = false;
            }, 500);
        });
    };
    ResetPasswordComponent.prototype.showErrorAlert = function (caption, message) {
        this.alertService.showMessage(caption, message, index_2.MessageSeverity.error);
    };
    __decorate([
        core_1.ViewChild('form'),
        __metadata("design:type", forms_1.NgForm)
    ], ResetPasswordComponent.prototype, "form", void 0);
    ResetPasswordComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-reset-password',
            templateUrl: 'reset-password.component.html',
            styleUrls: ['reset-password.component.css'],
        }),
        __metadata("design:paramtypes", [index_1.BaseAuthenticationService,
            index_1.BaseAlertService,
            index_1.BaseConfigService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-password.component.js.map