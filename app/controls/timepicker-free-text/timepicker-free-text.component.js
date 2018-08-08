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
var moment = require("moment");
var TimepickerFreeTextComponent = (function () {
    function TimepickerFreeTextComponent() {
        this.roundTo = 0.25;
        this.maxViewValue = 24;
        this.inputType = 'text';
        this.dateModelChange = new core_1.EventEmitter();
        this.edited = new core_1.EventEmitter();
    }
    Object.defineProperty(TimepickerFreeTextComponent.prototype, "dateModel", {
        get: function () {
            var _date = moment().startOf('day').add(this.roundedDateView, 'hour');
            return _date.isValid() ? _date.toDate() : null;
        },
        set: function (value) {
            var date = moment(value);
            if (date.isValid() && !this.isIosMinDate(value)) {
                var hours = date.hours();
                var minutes = date.minutes();
                var minutesFree = parseFloat((minutes / 60).toFixed(2));
                this.dateView = String(hours + minutesFree);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerFreeTextComponent.prototype, "roundedDateView", {
        get: function () {
            var newVal = Math.round(parseFloat(this.dateView) / this.roundTo) * this.roundTo;
            return (newVal > this.maxViewValue ? 0 : newVal).toFixed(2);
        },
        enumerable: true,
        configurable: true
    });
    TimepickerFreeTextComponent.prototype.onChange = function (event) {
        this.dateModelChange.emit(this.dateModel);
    };
    TimepickerFreeTextComponent.prototype.onBlur = function () {
        this.edited.emit(this.dateModel);
    };
    TimepickerFreeTextComponent.prototype.onClick = function () {
        this.inputDate.nativeElement.select();
    };
    TimepickerFreeTextComponent.prototype.isIosMinDate = function (value) {
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
        core_1.Input(),
        __metadata("design:type", Object)
    ], TimepickerFreeTextComponent.prototype, "inputType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], TimepickerFreeTextComponent.prototype, "dateModel", null);
    __decorate([
        core_1.ViewChild('inputDate'),
        __metadata("design:type", core_1.ElementRef)
    ], TimepickerFreeTextComponent.prototype, "inputDate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerFreeTextComponent.prototype, "dateModelChange", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerFreeTextComponent.prototype, "edited", void 0);
    TimepickerFreeTextComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-free-text',
            templateUrl: 'timepicker-free-text.component.html',
            styleUrls: ['timepicker-free-text.component.css'],
        })
    ], TimepickerFreeTextComponent);
    return TimepickerFreeTextComponent;
}());
exports.TimepickerFreeTextComponent = TimepickerFreeTextComponent;
//# sourceMappingURL=timepicker-free-text.component.js.map