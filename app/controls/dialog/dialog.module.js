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
var confirm_dialog_component_1 = require("./confirm-dialog/confirm-dialog.component");
var agreement_dialog_component_1 = require("./agreement-dialog/agreement-dialog.component");
var help_dialog_component_1 = require("./help-dialog/help-dialog.component");
var dialog_service_1 = require("./dialog.service");
var material_1 = require("@angular/material");
var DialogsModule = (function () {
    function DialogsModule() {
    }
    DialogsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                material_1.MatDialogModule,
                material_1.MatButtonModule
            ],
            declarations: [
                confirm_dialog_component_1.ConfirmDialogComponent,
                agreement_dialog_component_1.AgreementDialogComponent,
                help_dialog_component_1.HelpDialogComponent
            ],
            exports: [
                confirm_dialog_component_1.ConfirmDialogComponent,
                agreement_dialog_component_1.AgreementDialogComponent,
                help_dialog_component_1.HelpDialogComponent
            ],
            entryComponents: [
                confirm_dialog_component_1.ConfirmDialogComponent,
                agreement_dialog_component_1.AgreementDialogComponent,
                help_dialog_component_1.HelpDialogComponent
            ],
            providers: [dialog_service_1.DialogsService]
        })
    ], DialogsModule);
    return DialogsModule;
}());
exports.DialogsModule = DialogsModule;
//# sourceMappingURL=dialog.module.js.map