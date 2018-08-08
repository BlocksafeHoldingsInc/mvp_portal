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
var material_1 = require("@angular/material");
var timepicker_popup_dialog_component_1 = require("./timepicker-popup-dialog.component");
var moment = require("moment");
var TimepickerPopupComponent = (function () {
    function TimepickerPopupComponent(dialog) {
        this.dialog = dialog;
        this.dateModelChange = new core_1.EventEmitter();
    }
    Object.defineProperty(TimepickerPopupComponent.prototype, "dateModel", {
        get: function () {
            return this._dateModel;
        },
        set: function (value) {
            var date = moment(value);
            this._dateModel = !this.isIosMinDate(value) && date.isValid() ? date.toDate() : null;
            this.viewModel = !this.isIosMinDate(value) && date.isValid() ? date.format('HH:mm') : null;
        },
        enumerable: true,
        configurable: true
    });
    TimepickerPopupComponent.prototype.onChange = function (event) {
        this.dateModelChange.emit(event);
    };
    TimepickerPopupComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(timepicker_popup_dialog_component_1.TimepickerPopupDialogComponent, {
            data: {
                dateModel: this.dateModel,
                minDate: this.minDate,
                maxDate: this.maxDate
            },
            autoFocus: false
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dateModel = result;
                _this.onChange(result);
            }
        });
    };
    TimepickerPopupComponent.prototype.isIosMinDate = function (value) {
        var date = moment(value);
        var isMinDate = false;
        if (value && value.toString()) {
            if (value.toString().includes('0001')) {
                if (date.year() === 2001) {
                    isMinDate = true;
                }
            }
        }
        return isMinDate;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], TimepickerPopupComponent.prototype, "dateModel", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], TimepickerPopupComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], TimepickerPopupComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerPopupComponent.prototype, "dateModelChange", void 0);
    TimepickerPopupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-popup',
            templateUrl: 'timepicker-popup.component.html',
            styleUrls: ['timepicker-popup.component.css'],
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], TimepickerPopupComponent);
    return TimepickerPopupComponent;
}());
exports.TimepickerPopupComponent = TimepickerPopupComponent;
//# sourceMappingURL=timepicker-popup.component.js.map