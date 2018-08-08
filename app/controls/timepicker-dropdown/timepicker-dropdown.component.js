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
var TimepickerDropdownComponent = (function () {
    function TimepickerDropdownComponent() {
        this.dateModelChange = new core_1.EventEmitter();
        this.menuPosition = 'after';
    }
    TimepickerDropdownComponent.prototype.onChange = function (event) {
        this.dateModelChange.emit(event);
    };
    TimepickerDropdownComponent.prototype.stopPropogation = function (event) {
        event.stopPropogation();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], TimepickerDropdownComponent.prototype, "dateModel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], TimepickerDropdownComponent.prototype, "minDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date)
    ], TimepickerDropdownComponent.prototype, "maxDate", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TimepickerDropdownComponent.prototype, "menuPosition", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerDropdownComponent.prototype, "dateModelChange", void 0);
    TimepickerDropdownComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-dropdown',
            templateUrl: 'timepicker-dropdown.component.html',
            styleUrls: ['timepicker-dropdown.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], TimepickerDropdownComponent);
    return TimepickerDropdownComponent;
}());
exports.TimepickerDropdownComponent = TimepickerDropdownComponent;
//# sourceMappingURL=timepicker-dropdown.component.js.map