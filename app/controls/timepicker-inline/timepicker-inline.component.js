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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var moment = require("moment");
var TimepickerInlineComponent = (function () {
    function TimepickerInlineComponent(document) {
        this.document = document;
        this.dateModelChange = new core_1.EventEmitter();
        this.edited = new core_1.EventEmitter();
    }
    Object.defineProperty(TimepickerInlineComponent.prototype, "dateModel", {
        get: function () {
            if (this.viewHour === null && this.viewMinute === null)
                return null;
            var _date = moment([this.viewHour || 0, this.viewMinute || 0], 'HH:mm');
            return _date.isValid() ? _date.toDate() : null;
        },
        set: function (value) {
            var date = moment(value);
            if (date.isValid() && !this.isIosMinDate(value)) {
                this.viewHour = date.format('HH');
                this.viewMinute = date.format('mm');
            }
        },
        enumerable: true,
        configurable: true
    });
    TimepickerInlineComponent.prototype.onChange = function () {
        this.hasChanges = true;
    };
    TimepickerInlineComponent.prototype.onBlur = function () {
        var _this = this;
        if (this.hasChanges) {
            this.dateModelChange.emit(this.dateModel);
            setTimeout(function () {
                if (_this.inputHour.nativeElement !== document.activeElement
                    && _this.inputMinute.nativeElement !== document.activeElement) {
                    _this.edited.emit(_this.dateModel);
                    _this.hasChanges = false;
                }
            });
        }
    };
    TimepickerInlineComponent.prototype.onViewHourInput = function () {
        var _this = this;
        if (this.inputHour.nativeElement.value.length === 2
            || parseInt(this.viewHour, 10) > 2) {
            this.inputMinute.nativeElement.focus();
            setTimeout(function () { return _this.inputMinute.nativeElement.select(); });
        }
    };
    TimepickerInlineComponent.prototype.onViewMinuteInput = function () {
        if (this.inputMinute.nativeElement.value.length === 2
            || parseInt(this.viewMinute, 10) > 5) {
            this.inputMinute.nativeElement.blur();
        }
    };
    TimepickerInlineComponent.prototype.onViewHourClick = function () {
        this.inputHour.nativeElement.select();
    };
    TimepickerInlineComponent.prototype.onViewMinuteClick = function () {
        this.inputMinute.nativeElement.select();
    };
    TimepickerInlineComponent.prototype.isIosMinDate = function (value) {
        var date = moment(value);
        var isMinDate = false;
        if (value && value.toString()) {
            if (value.toString().includes('0001')) {
                if (date.year() === 2001) {
                    isMinDate = true;
                }
            }
        }
    };
    __decorate([
        core_1.ViewChild('inputHour'),
        __metadata("design:type", core_1.ElementRef)
    ], TimepickerInlineComponent.prototype, "inputHour", void 0);
    __decorate([
        core_1.ViewChild('inputMinute'),
        __metadata("design:type", core_1.ElementRef)
    ], TimepickerInlineComponent.prototype, "inputMinute", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TimepickerInlineComponent.prototype, "freeText", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], TimepickerInlineComponent.prototype, "dateModel", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerInlineComponent.prototype, "dateModelChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerInlineComponent.prototype, "edited", void 0);
    TimepickerInlineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-inline',
            templateUrl: 'timepicker-inline.component.html',
            styleUrls: ['timepicker-inline.component.css'],
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [Object])
    ], TimepickerInlineComponent);
    return TimepickerInlineComponent;
}());
exports.TimepickerInlineComponent = TimepickerInlineComponent;
//# sourceMappingURL=timepicker-inline.component.js.map