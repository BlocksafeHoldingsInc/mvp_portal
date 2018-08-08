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
var confirm_dialog_component_1 = require("./confirm-dialog/confirm-dialog.component");
var agreement_dialog_component_1 = require("./agreement-dialog/agreement-dialog.component");
var help_dialog_component_1 = require("./help-dialog/help-dialog.component");
var material_1 = require("@angular/material");
var DialogsService = (function () {
    function DialogsService(dialog) {
        this.dialog = dialog;
    }
    DialogsService.prototype.confirm = function (title, message, confirmButtonTxt) {
        if (confirmButtonTxt === void 0) { confirmButtonTxt = 'Yes'; }
        var dialogRef = this.dialog.open(confirm_dialog_component_1.ConfirmDialogComponent, {
            autoFocus: false,
            width: '700px'
        });
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.confirmButtonTxt = confirmButtonTxt;
        return dialogRef.afterClosed();
    };
    DialogsService.prototype.agreement = function () {
        return this.dialog.open(agreement_dialog_component_1.AgreementDialogComponent, {
            autoFocus: false,
            width: '700px'
        }).afterClosed();
    };
    DialogsService.prototype.help = function () {
        return this.dialog.open(help_dialog_component_1.HelpDialogComponent, {
            autoFocus: false,
            width: '700px',
            disableClose: true,
        }).afterClosed();
    };
    DialogsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], DialogsService);
    return DialogsService;
}());
exports.DialogsService = DialogsService;
//# sourceMappingURL=dialog.service.js.map