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
var http_1 = require("@angular/http");
var index_1 = require("../../base/index");
var utilities_1 = require("../application/utilities");
var index_2 = require("./index");
var AlertService = (function (_super) {
    __extends(AlertService, _super);
    function AlertService() {
        return _super.call(this) || this;
    }
    AlertService.prototype.showDialog = function (message, type, okCallback, cancelCallback, okLabel, cancelLabel, defaultValue) {
        if (!type)
            type = index_2.DialogType.alert;
        this.dialogs.next({ message: message, type: type, okCallback: okCallback, cancelCallback: cancelCallback,
            okLabel: okLabel, cancelLabel: cancelLabel, defaultValue: defaultValue });
    };
    AlertService.prototype.showMessage = function (data, separatorOrDetail, severity) {
        if (!severity)
            severity = index_2.MessageSeverity.default;
        if (data instanceof http_1.Response) {
            data = utilities_1.Utilities.getHttpResponseMessage(data);
            separatorOrDetail = utilities_1.Utilities.captionAndMessageSeparator;
        }
        if (data instanceof Array) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var message = data_1[_i];
                var msgObject = utilities_1.Utilities.splitInTwo(message, separatorOrDetail);
                this.showMessageHelper(msgObject.firstPart, msgObject.secondPart, severity, false);
            }
        }
        else {
            this.showMessageHelper(data, separatorOrDetail, severity, false);
        }
    };
    AlertService.prototype.showStickyMessage = function (data, separatorOrDetail, severity, error) {
        if (!severity)
            severity = index_2.MessageSeverity.default;
        if (data instanceof http_1.Response) {
            data = utilities_1.Utilities.getHttpResponseMessage(data);
            separatorOrDetail = utilities_1.Utilities.captionAndMessageSeparator;
        }
        if (data instanceof Array) {
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var message = data_2[_i];
                var msgObject = utilities_1.Utilities.splitInTwo(message, separatorOrDetail);
                this.showMessageHelper(msgObject.firstPart, msgObject.secondPart, severity, true);
            }
        }
        else {
            if (error) {
                var msg = "Severity: \"" + index_2.MessageSeverity[severity] + "\", Summary: \"" + data + "\",\n                    Detail: \"" + separatorOrDetail + "\", Error: \"" + utilities_1.Utilities.safeStringify(error) + "\"";
                switch (severity) {
                    case index_2.MessageSeverity.default:
                        this.logInfo(msg);
                        break;
                    case index_2.MessageSeverity.info:
                        this.logInfo(msg);
                        break;
                    case index_2.MessageSeverity.success:
                        this.logMessage(msg);
                        break;
                    case index_2.MessageSeverity.error:
                        this.logError(msg);
                        break;
                    case index_2.MessageSeverity.warn:
                        this.logWarning(msg);
                        break;
                    case index_2.MessageSeverity.wait:
                        this.logTrace(msg);
                        break;
                }
            }
            this.showMessageHelper(data, separatorOrDetail, severity, true);
        }
    };
    AlertService.prototype.showMessageHelper = function (summary, detail, severity, isSticky) {
        if (isSticky)
            this.stickyMessages.next({ severity: severity, summary: summary, detail: detail });
        else
            this.messages.next({ severity: severity, summary: summary, detail: detail });
    };
    AlertService.prototype.startLoadingMessage = function (message, caption) {
        var _this = this;
        if (message === void 0) { message = 'Loading...'; }
        if (caption === void 0) { caption = ''; }
        this.isLoading = true;
        clearTimeout(this.loadingMessageId);
        this.loadingMessageId = setTimeout(function () {
            _this.showStickyMessage(caption, message, index_2.MessageSeverity.wait);
        }, 1000);
    };
    AlertService.prototype.stopLoadingMessage = function () {
        this.isLoading = false;
        clearTimeout(this.loadingMessageId);
        this.resetStickyMessage();
    };
    AlertService.prototype.logDebug = function (msg) {
        console.debug(msg);
    };
    AlertService.prototype.logError = function (msg) {
        console.error(msg);
    };
    AlertService.prototype.logInfo = function (msg) {
        console.info(msg);
    };
    AlertService.prototype.logMessage = function (msg) {
        console.log(msg);
    };
    AlertService.prototype.logTrace = function (msg) {
        console.trace(msg);
    };
    AlertService.prototype.logWarning = function (msg) {
        console.warn(msg);
    };
    AlertService.prototype.resetStickyMessage = function () {
        this.stickyMessages.next();
    };
    AlertService.prototype.getDialogEvent = function () {
        return this.dialogs.asObservable();
    };
    AlertService.prototype.getMessageEvent = function () {
        return this.messages.asObservable();
    };
    AlertService.prototype.getStickyMessageEvent = function () {
        return this.stickyMessages.asObservable();
    };
    Object.defineProperty(AlertService.prototype, "isLoadingInProgress", {
        get: function () {
            return this.isLoading;
        },
        enumerable: true,
        configurable: true
    });
    AlertService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AlertService);
    return AlertService;
}(index_1.BaseAlertService));
exports.AlertService = AlertService;
//# sourceMappingURL=alert.service.js.map