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
var index_1 = require("../services/index");
var index_2 = require("../base/index");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
var dialog_service_1 = require("../controls/dialog/dialog.service");
var HelpComponent = (function () {
    function HelpComponent(localStorage, responsive, authService, dialogsService, spinnerService) {
        this.localStorage = localStorage;
        this.responsive = responsive;
        this.authService = authService;
        this.dialogsService = dialogsService;
        this.spinnerService = spinnerService;
        this.bgImages = [{
                url: '../../assets/images/TimeCard-TutOverlay-work.png',
                color: '#909294'
            }, {
                url: '../../assets/images/BlankTimecard-work.png',
                color: '#ffffff'
            }];
    }
    HelpComponent.prototype.ngOnInit = function () {
        if (!this.authService.isLoggedIn) {
            this.authService.redirectForLogin();
        }
        else if (!this.authService.isUserFirstLogin) {
            this.authService.redirectLoginUser();
        }
        else {
            this.updateViewMode();
            this.responsive.$resizeEvent
                .subscribe(this.updateViewMode.bind(this));
            if (this.isMobile) {
                this.goToHomePage();
            }
            else {
                this.totalSteps = 2;
                this.helpStep = 1;
                this.currentBackground = this.bgImages[this.helpStep - 1];
            }
        }
    };
    HelpComponent.prototype.updateViewMode = function () {
        this.isMobile = this.responsive.isMobile();
    };
    HelpComponent.prototype.goNext = function () {
        var _this = this;
        this.helpStep++;
        if (this.helpStep > this.totalSteps) {
            this.goToHomePage();
        }
        else if (this.helpStep <= this.bgImages.length) {
            this.currentBackground = this.bgImages[this.helpStep - 1];
        }
        if (this.helpStep === this.totalSteps && !this.isMobile) {
            this.dialogsService
                .help()
                .subscribe(function (res) {
                if (res) {
                    _this.goToHomePage();
                }
            });
        }
        else if (this.helpStep === this.totalSteps && this.isMobile) {
            this.goToHomePage();
        }
    };
    HelpComponent.prototype.goToHomePage = function () {
        this.spinnerService.show();
        this.localStorage.savePermanentData(false, index_1.DBkeys.FIRST_LOGIN);
        this.authService.refreshLogin();
        this.spinnerService.hide();
        this.authService.redirectLoginUser();
    };
    HelpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'help-tutorial',
            templateUrl: 'help.component.html',
            styleUrls: ['help.component.css'],
        }),
        __metadata("design:paramtypes", [index_1.LocalStoreManager, index_1.ResponsiveService,
            index_2.BaseAuthenticationService, dialog_service_1.DialogsService,
            ng4_loading_spinner_1.Ng4LoadingSpinnerService])
    ], HelpComponent);
    return HelpComponent;
}());
exports.HelpComponent = HelpComponent;
//# sourceMappingURL=help.component.js.map