"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var timecard_quickview_component_1 = require("./timecard-quickview/timecard-quickview.component");
var timetrack_component_1 = require("./timetrack/timetrack.component");
var timepicker_dropdown_component_1 = require("./timepicker-dropdown/timepicker-dropdown.component");
var timepicker_input_component_1 = require("./timepicker-input/timepicker-input.component");
var timepicker_popup_component_1 = require("./timepicker-popup/timepicker-popup.component");
var timepicker_popup_dialog_component_1 = require("./timepicker-popup/timepicker-popup-dialog.component");
var timepicker_slider_component_1 = require("./timepicker-slider/timepicker-slider.component");
var timepicker_inline_component_1 = require("./timepicker-inline/timepicker-inline.component");
var timepicker_free_text_component_1 = require("./timepicker-free-text/timepicker-free-text.component");
var input_number_directive_1 = require("./directives/input-number.directive");
var input_number_pad_directive_1 = require("./directives/input-number-pad.directive");
var pad_number_pipe_1 = require("./pipes/pad-number.pipe");
var material_1 = require("@angular/material");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var table_1 = require("@angular/cdk/table");
var ControlsModule = (function () {
    function ControlsModule() {
    }
    ControlsModule_1 = ControlsModule;
    ControlsModule.forRoot = function () {
        return {
            ngModule: ControlsModule_1,
            providers: []
        };
    };
    ControlsModule = ControlsModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                material_1.MatGridListModule,
                material_1.MatDialogModule,
                material_1.MatCardModule,
                material_1.MatInputModule,
                material_1.MatSelectModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatIconModule,
                material_1.MatExpansionModule,
                ng_bootstrap_1.NgbModule,
                ngx_bootstrap_1.TimepickerModule,
                ngx_bootstrap_1.BsDropdownModule
            ],
            entryComponents: [
                timepicker_popup_component_1.TimepickerPopupComponent,
                timepicker_popup_dialog_component_1.TimepickerPopupDialogComponent,
            ],
            declarations: [
                timecard_quickview_component_1.TimeCardQuickViewComponent,
                timetrack_component_1.TimeTrackComponent,
                timepicker_dropdown_component_1.TimepickerDropdownComponent,
                timepicker_input_component_1.TimepickerInputComponent,
                timepicker_popup_component_1.TimepickerPopupComponent,
                timepicker_popup_dialog_component_1.TimepickerPopupDialogComponent,
                timepicker_slider_component_1.TimepickerSliderComponent,
                timepicker_inline_component_1.TimepickerInlineComponent,
                timepicker_free_text_component_1.TimepickerFreeTextComponent,
                input_number_directive_1.InputNumberDirective,
                input_number_pad_directive_1.InputNumberPadDirective,
                pad_number_pipe_1.PadNumberPipe
            ],
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                timecard_quickview_component_1.TimeCardQuickViewComponent,
                timetrack_component_1.TimeTrackComponent,
                timepicker_dropdown_component_1.TimepickerDropdownComponent,
                timepicker_input_component_1.TimepickerInputComponent,
                timepicker_popup_component_1.TimepickerPopupComponent,
                timepicker_popup_dialog_component_1.TimepickerPopupDialogComponent,
                timepicker_slider_component_1.TimepickerSliderComponent,
                timepicker_inline_component_1.TimepickerInlineComponent,
                timepicker_free_text_component_1.TimepickerFreeTextComponent,
                input_number_directive_1.InputNumberDirective,
                input_number_pad_directive_1.InputNumberPadDirective,
                pad_number_pipe_1.PadNumberPipe,
                table_1.CdkTableModule
            ]
        })
    ], ControlsModule);
    return ControlsModule;
    var ControlsModule_1;
}());
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=controls.module.js.map