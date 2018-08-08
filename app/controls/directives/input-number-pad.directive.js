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
var InputNumberPadDirective = (function () {
    function InputNumberPadDirective(control, element) {
        this.control = control;
        this.element = element;
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'Enter'];
        this.numberRegex = /\d+/;
    }
    InputNumberPadDirective.prototype.ngOnInit = function () {
        this.pad = Array.apply(null, Array(this.maxValue.toString().length)).map(function () { return '0'; }).join('');
        this.element.nativeElement.setAttribute('maxlength', this.pad.length);
        var model = this.control.model;
        var view = this.modelToView(model);
    };
    InputNumberPadDirective.prototype.onBlur = function () {
        var model = this.viewToModel(this.control.value);
        var view = this.modelToView(model);
        this.control.viewToModelUpdate(model);
        this.control.valueAccessor.writeValue(view);
    };
    InputNumberPadDirective.prototype.viewToModel = function (inputValue) {
        if (inputValue === null || inputValue === undefined)
            return null;
        var val = parseInt(inputValue, 10);
        if (val > this.maxValue) {
            val = this.maxValue;
        }
        return val;
    };
    InputNumberPadDirective.prototype.modelToView = function (inputValue) {
        if (inputValue === null || inputValue === undefined)
            return '';
        return (this.pad + inputValue).substring(inputValue.toString().length);
    };
    InputNumberPadDirective.prototype.onKeyDown = function (event) {
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if (!this.numberRegex.test(String(event.key))) {
            event.preventDefault();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], InputNumberPadDirective.prototype, "maxValue", void 0);
    __decorate([
        core_1.HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InputNumberPadDirective.prototype, "onBlur", null);
    __decorate([
        core_1.HostListener('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], InputNumberPadDirective.prototype, "onKeyDown", null);
    InputNumberPadDirective = __decorate([
        core_1.Directive({
            selector: '[inputNumberPad]'
        }),
        __metadata("design:paramtypes", [forms_1.NgModel,
            core_1.ElementRef])
    ], InputNumberPadDirective);
    return InputNumberPadDirective;
}());
exports.InputNumberPadDirective = InputNumberPadDirective;
//# sourceMappingURL=input-number-pad.directive.js.map