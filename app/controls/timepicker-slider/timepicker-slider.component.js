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
var TimepickerSliderComponent = (function () {
    function TimepickerSliderComponent() {
        this.dateModelChange = new core_1.EventEmitter();
        this.hours = Array.apply(null, Array(24)).map(function (a, i) { return i; });
        this.minutes = Array.apply(null, Array(60)).map(function (a, i) { return i; });
        this.itemHeight = 50;
        this.hours.unshift(null);
        this.minutes.unshift(null);
    }
    Object.defineProperty(TimepickerSliderComponent.prototype, "dateModel", {
        get: function () {
            if (this.viewHour === null && this.viewMinute === null)
                return null;
            var _date = moment([this.viewHour || 0, this.viewMinute || 0], 'HH:mm');
            return _date.isValid() ? _date.toDate() : null;
        },
        set: function (value) {
            var _date = moment(value);
            var shouldUpdate = !_date.isSame(this.dateModel);
            var isValid = _date.isValid();
            if (shouldUpdate) {
                this.viewHour = isValid ? _date.hour() : null;
                this.viewMinute = isValid ? _date.minute() : null;
                this.updateView();
            }
        },
        enumerable: true,
        configurable: true
    });
    TimepickerSliderComponent.prototype.ngOnInit = function () {
        this.bindScroll();
    };
    TimepickerSliderComponent.prototype.ngAfterViewInit = function () {
        this.updateView();
    };
    TimepickerSliderComponent.prototype.bindScroll = function () {
        var _this = this;
        var scrollerHoursTimeout;
        var scrollerMinutesTimeout;
        this.scrollerHours.nativeElement.addEventListener('scroll', function (e) {
            clearTimeout(scrollerHoursTimeout);
            scrollerHoursTimeout = setTimeout(_this.closestHour.bind(_this), 200);
        });
        this.scrollerMinutes.nativeElement.addEventListener('scroll', function (e) {
            clearTimeout(scrollerMinutesTimeout);
            scrollerMinutesTimeout = setTimeout(_this.closestMinute.bind(_this), 200);
        });
    };
    TimepickerSliderComponent.prototype.change = function () {
        this.dateModelChange.emit(this.dateModel);
    };
    TimepickerSliderComponent.prototype.updateView = function () {
        this.scrollHours(this.viewHour, false);
        this.scrollMinutes(this.viewMinute, false);
    };
    TimepickerSliderComponent.prototype.scrollTo = function (scroller, index, smooth) {
        if (smooth === void 0) { smooth = true; }
        scroller.nativeElement.scroll({
            top: index * this.itemHeight,
            behavior: smooth ? 'smooth' : 'auto'
        });
    };
    TimepickerSliderComponent.prototype.scrollHours = function (hour, animation) {
        var index = this.hours.indexOf(hour);
        this.scrollTo(this.scrollerHours, index, animation);
        if (hour !== this.viewHour) {
            this.viewHour = hour;
            this.change();
        }
    };
    TimepickerSliderComponent.prototype.scrollMinutes = function (minute, animation) {
        var index = this.minutes.indexOf(minute);
        this.scrollTo(this.scrollerMinutes, index, animation);
        if (minute !== this.viewMinute) {
            this.viewMinute = minute;
            this.change();
        }
    };
    TimepickerSliderComponent.prototype.closestIndex = function (scroller) {
        var scrollTop = scroller.nativeElement.scrollTop;
        var shift = scrollTop % this.itemHeight;
        var target = shift > this.itemHeight / 2
            ? scrollTop - shift + this.itemHeight
            : scrollTop - shift;
        return target / this.itemHeight;
    };
    TimepickerSliderComponent.prototype.closestHour = function () {
        var index = this.closestIndex(this.scrollerHours);
        this.scrollHours(this.hours[index]);
    };
    TimepickerSliderComponent.prototype.closestMinute = function () {
        var index = this.closestIndex(this.scrollerMinutes);
        this.scrollMinutes(this.minutes[index]);
    };
    __decorate([
        core_1.ViewChild('scrollerHours'),
        __metadata("design:type", core_1.ElementRef)
    ], TimepickerSliderComponent.prototype, "scrollerHours", void 0);
    __decorate([
        core_1.ViewChild('scrollerMinutes'),
        __metadata("design:type", core_1.ElementRef)
    ], TimepickerSliderComponent.prototype, "scrollerMinutes", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [Date])
    ], TimepickerSliderComponent.prototype, "dateModel", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TimepickerSliderComponent.prototype, "dateModelChange", void 0);
    TimepickerSliderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-slider',
            templateUrl: 'timepicker-slider.component.html',
            styleUrls: ['timepicker-slider.component.css'],
        }),
        __metadata("design:paramtypes", [])
    ], TimepickerSliderComponent);
    return TimepickerSliderComponent;
}());
exports.TimepickerSliderComponent = TimepickerSliderComponent;
//# sourceMappingURL=timepicker-slider.component.js.map