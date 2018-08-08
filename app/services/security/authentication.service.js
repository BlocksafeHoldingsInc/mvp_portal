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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var index_1 = require("../../base/index");
var index_2 = require("../application/index");
var index_3 = require("../../models/index");
var utilities_1 = require("../application/utilities");
var jwt_helper_1 = require("./jwt-helper");
var AuthenticationService = (function (_super) {
    __extends(AuthenticationService, _super);
    function AuthenticationService(appService, configService, router, localStorage, endpointFactory) {
        var _this = _super.call(this, appService, configService, router) || this;
        _this.appService = appService;
        _this.configService = configService;
        _this.router = router;
        _this.localStorage = localStorage;
        _this.endpointFactory = endpointFactory;
        _this.previousIsLoggedInCheck = false;
        _this._loginStatus = new Subject_1.Subject();
        _this.logoutRedirectUrl = _this.configService.logoutUrl;
        _this.loginRedirectUrl = _this.configService.homeUrl;
        _this.loginPageUrl = _this.configService.loginPageUrl;
        return _this;
    }
    AuthenticationService.prototype.logout = function () {
        this.localStorage.deleteData(index_2.DBkeys.ACCESS_TOKEN);
        this.localStorage.deleteData(index_2.DBkeys.ID_TOKEN);
        this.localStorage.deleteData(index_2.DBkeys.REFRESH_TOKEN);
        this.localStorage.deleteData(index_2.DBkeys.TOKEN_EXPIRES_IN);
        this.localStorage.deleteData(index_2.DBkeys.USER_PERMISSIONS);
        this.localStorage.deleteData(index_2.DBkeys.CURRENT_USER);
        this.localStorage.deleteData(index_2.DBkeys.FIRST_LOGIN);
        this.configService.clearLocalChanges();
        this.reevaluateLoginStatus();
    };
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.currentUser !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isUserFirstLogin", {
        get: function () {
            if (this.localStorage.getData(index_2.DBkeys.FIRST_LOGIN) === null && this.isLoggedIn) {
                this.localStorage.savePermanentData(this.currentUser.isUserFirstLogin, index_2.DBkeys.FIRST_LOGIN);
            }
            return this.localStorage.getData(index_2.DBkeys.FIRST_LOGIN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "isSessionExpired", {
        get: function () {
            if (!this.accessTokenExpiryDate) {
                return true;
            }
            return !(this.accessTokenExpiryDate.valueOf() > new Date().valueOf());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "accessTokenExpiryDate", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getDataObject(index_2.DBkeys.TOKEN_EXPIRES_IN, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "rememberMe", {
        get: function () {
            return this.localStorage.getDataObject(index_2.DBkeys.REMEMBER_ME) === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "currentUser", {
        get: function () {
            var user = this.localStorage.getDataObject(index_2.DBkeys.CURRENT_USER);
            this.reevaluateLoginStatus(user);
            return user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "userPermissions", {
        get: function () {
            return this.localStorage.getDataObject(index_2.DBkeys.USER_PERMISSIONS) || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "accessToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(index_2.DBkeys.ACCESS_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.getLoginStatusEvent = function () {
        return this._loginStatus.asObservable();
    };
    AuthenticationService.prototype.redirectLogoutUser = function () {
        var redirect = this.logoutRedirectUrl ? this.logoutRedirectUrl : this.loginPageUrl;
        this.logoutRedirectUrl = null;
        this.router.navigate([redirect]);
    };
    AuthenticationService.prototype.login = function (userName, password, rememberMe) {
        var _this = this;
        if (this.isLoggedIn) {
            this.logout();
        }
        return this.endpointFactory.getLoginEndpoint(userName, password)
            .map(function (response) { return _this.processLoginResponse(response, rememberMe); });
    };
    AuthenticationService.prototype.resetPassword = function (email) {
        if (this.isLoggedIn) {
            this.logout();
        }
        return this.endpointFactory.sendPassowrdResetEmail(email);
    };
    AuthenticationService.prototype.updatePassword = function (token, newPassword) {
        return this.endpointFactory.sendUpdatePassword(token, newPassword);
    };
    AuthenticationService.prototype.redirectForLogin = function () {
        this.loginRedirectUrl = this.router.url;
        this.router.navigate([this.loginPageUrl]);
    };
    AuthenticationService.prototype.redirectLoginUser = function () {
        var redirect = this.loginRedirectUrl && this.loginRedirectUrl !== '/'
            && this.loginRedirectUrl !== this.configService.homeUrl ? this.loginRedirectUrl : this.configService.homeUrl;
        this.loginRedirectUrl = null;
        var urlParamsAndFragment = utilities_1.Utilities.splitInTwo(redirect, '#');
        var urlAndParams = utilities_1.Utilities.splitInTwo(urlParamsAndFragment.firstPart, '?');
        var navigationExtras = {
            fragment: urlParamsAndFragment.secondPart,
            queryParams: utilities_1.Utilities.getQueryParamsFromString(urlAndParams.secondPart),
            queryParamsHandling: 'merge'
        };
        this.router.navigate([urlAndParams.firstPart], navigationExtras);
    };
    AuthenticationService.prototype.reLogin = function () {
        this.localStorage.deleteData(index_2.DBkeys.TOKEN_EXPIRES_IN);
        if (this.reLoginDelegate) {
            this.reLoginDelegate();
        }
        else {
            this.redirectForLogin();
        }
    };
    AuthenticationService.prototype.refreshLogin = function () {
        var _this = this;
        return this.endpointFactory.getRefreshLoginEndpoint()
            .map(function (response) { return _this.processLoginResponse(response, _this.rememberMe); });
    };
    AuthenticationService.prototype.processLoginResponse = function (response, rememberMe) {
        var response_token = response.json();
        var accessToken = response_token.access_token;
        if (!accessToken)
            throw new Error('Received accessToken was empty');
        var idToken = response_token.id_token;
        var refreshToken = response_token.refresh_token;
        var expiresIn = response_token.expires_in;
        var tokenExpiryDate = new Date();
        tokenExpiryDate.setSeconds(tokenExpiryDate.getSeconds() + expiresIn);
        var accessTokenExpiry = tokenExpiryDate;
        var jwtHelper = new jwt_helper_1.JwtHelper();
        var decodedIdToken = jwtHelper.decodeToken(response_token.id_token);
        var permissions = Array.isArray(decodedIdToken.permission) ?
            decodedIdToken.permission : [decodedIdToken.permission];
        if (!this.isLoggedIn)
            this.configService.import(decodedIdToken.configuration);
        var userFirstLogin = decodedIdToken.isUserFirstLogin && decodedIdToken.isUserFirstLogin.toLowerCase() === 'true';
        var user = new index_3.User(decodedIdToken.sub, decodedIdToken.name, decodedIdToken.fullname, decodedIdToken.email, decodedIdToken.jobtitle, decodedIdToken.phone, Array.isArray(decodedIdToken.role) ? decodedIdToken.role : [decodedIdToken.role], decodedIdToken.userInfoId, userFirstLogin);
        user.isEnabled = true;
        this.saveUserDetails(user, permissions, accessToken, idToken, refreshToken, accessTokenExpiry, rememberMe);
        this.reevaluateLoginStatus(user);
        return user;
    };
    AuthenticationService.prototype.saveUserDetails = function (user, permissions, accessToken, idToken, refreshToken, expiresIn, rememberMe) {
        if (rememberMe) {
            this.localStorage.savePermanentData(accessToken, index_2.DBkeys.ACCESS_TOKEN);
            this.localStorage.savePermanentData(idToken, index_2.DBkeys.ID_TOKEN);
            this.localStorage.savePermanentData(refreshToken, index_2.DBkeys.REFRESH_TOKEN);
            this.localStorage.savePermanentData(expiresIn, index_2.DBkeys.TOKEN_EXPIRES_IN);
            this.localStorage.savePermanentData(permissions, index_2.DBkeys.USER_PERMISSIONS);
            this.localStorage.savePermanentData(user, index_2.DBkeys.CURRENT_USER);
        }
        else {
            this.localStorage.saveSyncedSessionData(accessToken, index_2.DBkeys.ACCESS_TOKEN);
            this.localStorage.saveSyncedSessionData(idToken, index_2.DBkeys.ID_TOKEN);
            this.localStorage.saveSyncedSessionData(refreshToken, index_2.DBkeys.REFRESH_TOKEN);
            this.localStorage.saveSyncedSessionData(expiresIn, index_2.DBkeys.TOKEN_EXPIRES_IN);
            this.localStorage.saveSyncedSessionData(permissions, index_2.DBkeys.USER_PERMISSIONS);
            this.localStorage.saveSyncedSessionData(user, index_2.DBkeys.CURRENT_USER);
        }
        this.localStorage.savePermanentData(rememberMe, index_2.DBkeys.REMEMBER_ME);
    };
    Object.defineProperty(AuthenticationService.prototype, "refreshToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(index_2.DBkeys.REFRESH_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthenticationService.prototype, "idToken", {
        get: function () {
            this.reevaluateLoginStatus();
            return this.localStorage.getData(index_2.DBkeys.ID_TOKEN);
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.reevaluateLoginStatus = function (currentUser) {
        var _this = this;
        var user = currentUser || this.localStorage.getDataObject(index_2.DBkeys.CURRENT_USER);
        var isLoggedIn = user !== null;
        if (this.previousIsLoggedInCheck !== isLoggedIn) {
            setTimeout(function () {
                _this._loginStatus.next(isLoggedIn);
            }, 1);
        }
        this.previousIsLoggedInCheck = isLoggedIn;
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_1.BaseAppService, index_1.BaseConfigService, router_1.Router,
            index_2.LocalStoreManager, index_1.BaseEndpointFactory])
    ], AuthenticationService);
    return AuthenticationService;
}(index_1.BaseAuthenticationService));
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map