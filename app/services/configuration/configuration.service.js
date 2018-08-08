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
var index_1 = require("../../base/index");
var index_2 = require("../index");
var ConfigurationService = (function (_super) {
    __extends(ConfigurationService, _super);
    function ConfigurationService(localStorage) {
        var _this = _super.call(this) || this;
        _this.localStorage = localStorage;
        _this._language = null;
        _this._homeUrl = null;
        _this._theme = null;
        _this._showDashboardStatistics = null;
        _this._showDashboardNotifications = null;
        _this._showDashboardTodo = null;
        _this._showDashboardBanner = null;
        _this.loginPageUrl = '/login';
        _this.homeUrl = '/';
        _this.baseUrl = index_2.Utilities.baseUrl().replace(/\/$/, '');
        var jsonAppConfig = window.sessionStorage.getItem('appConfig');
        var appConfig = '';
        if (jsonAppConfig) {
            appConfig = JSON.parse(jsonAppConfig);
            _this.setApiEndPoints(appConfig);
            _this.helpText = appConfig.helpText;
            _this.googleAnalitycsId = appConfig.googleAnalitycsId;
        }
        return _this;
    }
    ConfigurationService.prototype.clearLocalChanges = function () {
        this._language = null;
        this._homeUrl = null;
        this._theme = null;
        this._showDashboardStatistics = null;
        this._showDashboardNotifications = null;
        this._showDashboardTodo = null;
        this._showDashboardBanner = null;
        this.localStorage.deleteData(index_2.DBkeys.LANGUAGE);
        this.localStorage.deleteData(index_2.DBkeys.HOME_URL);
        this.localStorage.deleteData(index_2.DBkeys.THEME);
        this.localStorage.deleteData(index_2.DBkeys.SHOW_DASHBOARD_STATISTICS);
        this.localStorage.deleteData(index_2.DBkeys.SHOW_DASHBOARD_NOTIFICATIONS);
        this.localStorage.deleteData(index_2.DBkeys.SHOW_DASHBOARD_TODO);
        this.localStorage.deleteData(index_2.DBkeys.SHOW_DASHBOARD_BANNER);
    };
    ConfigurationService.prototype.import = function (jsonValue) {
        this.clearLocalChanges();
        if (!jsonValue)
            return;
        var importValue = index_2.Utilities.JSonTryParse(jsonValue);
        if (importValue.homeUrl !== null)
            this.homeUrl = importValue.homeUrl;
    };
    ConfigurationService.prototype.setApiEndPoints = function (appConfig) {
        this.apiUrl = appConfig.apiUrl;
        this.timecardUrl = this.apiUrl + appConfig.timeCardUrl;
        this.allTimecardsUrl = this.apiUrl + appConfig.allTimeCardsUrl;
        this.timeCardDetailUpdateUrl = this.apiUrl + appConfig.timeCardDetailUpdateUrl;
        this.timeCardSubmitUrl = this.apiUrl + appConfig.timeCardSubmitUrl;
        this.timeCardUnsubmitUrl = this.apiUrl + appConfig.timeCardUnsubmitUrl;
        this.timeCardDetailDeleteUrl = this.apiUrl + appConfig.timeCardDetailDeleteUrl;
    };
    ConfigurationService.prototype.saveToLocalStore = function (data, key) {
        var _this = this;
        setTimeout(function () { return _this.localStorage.savePermanentData(data, key); });
    };
    ConfigurationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [index_2.LocalStoreManager])
    ], ConfigurationService);
    return ConfigurationService;
}(index_1.BaseConfigService));
exports.ConfigurationService = ConfigurationService;
//# sourceMappingURL=configuration.service.js.map