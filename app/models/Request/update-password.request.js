"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_types_config_1 = require("../../config/view-types.config");
var UpdatePasswordRequest = (function () {
    function UpdatePasswordRequest(newPassword, passwordResetToken, viewTypeId) {
        this.newPassword = newPassword;
        this.passwordResetToken = passwordResetToken;
        var nurseViewType = view_types_config_1.viewTypes.find(function (x) { return x.name.toLowerCase() === 'nurse'; });
        this.viewTypeId = (viewTypeId == null || viewTypeId === 0) ? nurseViewType.id : viewTypeId;
    }
    return UpdatePasswordRequest;
}());
exports.UpdatePasswordRequest = UpdatePasswordRequest;
//# sourceMappingURL=update-password.request.js.map