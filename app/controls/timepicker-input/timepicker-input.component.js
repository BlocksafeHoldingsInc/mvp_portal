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
var TimepickerInputComponent = (function () {
    function TimepickerInputComponent() {
        this.dateModelChange = new core_1.EventEmitter();
    }
    Object.defineProperty(TimepickerInputComponent.prototype, "dateModel", {
        get: function () {
            var _date = moment(this.dateView, 'HH:mm');
            return _date.isValid() ? _date.toDate() : null;
        },
        set: function (value) {
            this.dateView = moment(value).format('HH:mm') || null;
        },
        enumerable: true,
        configurable: true
    });
    TimepickerInputComponent.prototype.onClick = function () {
        this.timeInput.nativeElement.focus();
        this.timeInput.nativeElement.click();
    };
    TimepickerInputComponent.prototype.onChange = function (event) {
        this.dateModelChange.emit(this.dateModel);
    };
    TimepickerInputComponent.prototype.stopPropogation = function (event) {
        event.stopPropogation();
    };
    __decorate([
        core_1.ViewChild('timeInput'),
        __metadata("design:type", core_1.ElementRef)
    ], TimepickerInputComponent.prototype, "timeInput", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], TimepickerInputComponent.prototype, "dateModel", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerInputComponent.prototype, "dateModelChange", void 0);
    TimepickerInputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-input',
            templateUrl: 'timepicker-input.component.html',
            styleUrls: ['timepicker-input.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], TimepickerInputComponent);
    return TimepickerInputComponent;
}());
exports.TimepickerInputComponent = TimepickerInputComponent;
//# sourceMappingURL=timepicker-input.component.js.map