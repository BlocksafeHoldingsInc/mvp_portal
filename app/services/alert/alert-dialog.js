"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AlertDialog = (function () {
    function AlertDialog(message, type, okCallback, cancelCallback, defaultValue, okLabel, cancelLabel) {
        this.message = message;
        this.type = type;
        this.okCallback = okCallback;
        this.cancelCallback = cancelCallback;
        this.defaultValue = defaultValue;
        this.okLabel = okLabel;
        this.cancelLabel = cancelLabel;
    }
    return AlertDialog;
}());
exports.AlertDialog = AlertDialog;
//# sourceMappingURL=alert-dialog.js.map