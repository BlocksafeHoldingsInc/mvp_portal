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
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var ng2_toasty_1 = require("ng2-toasty");
var ng4_loading_spinner_1 = require("ng4-loading-spinner");
var ng_pdf_make_1 = require("ng-pdf-make");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var service_module_1 = require("./services/service.module");
var index_1 = require("./base/index");
var index_2 = require("./services/index");
var shared_module_1 = require("./shared/shared.module");
var controls_module_1 = require("./controls/controls.module");
var material_1 = require("@angular/material");
var login_component_1 = require("./login/login.component");
var reset_password_component_1 = require("./login/reset-password.component");
var forgot_password_component_1 = require("./login/forgot-password.component");
var login_routing_module_1 = require("./login/login-routing.module");
var help_component_1 = require("./help/help.component");
var help_routing_module_1 = require("./help/help-routing.module");
var my_account_module_1 = require("./myaccount/my-account.module");
var timecard_module_1 = require("./timecard/timecard.module");
var dialog_module_1 = require("./controls/dialog/dialog.module");
var smoothscroll = require("smoothscroll-polyfill");
var keyboardeventKey = require("keyboardevent-key-polyfill");
var menuProvider = { provide: index_1.BaseMenuService, useClass: index_2.MenuService };
var appProvider = { provide: index_1.BaseAppService, useClass: index_2.AppService };
var authService = { provide: index_1.BaseAuthenticationService, useClass: index_2.AuthenticationService };
var configProvider = { provide: index_1.BaseConfigService, useClass: index_2.ConfigurationService };
var endpointFactoryProvider = { provide: index_1.BaseEndpointFactory, useClass: index_2.EndpointFactory };
var alertServiceProvider = { provide: index_1.BaseAlertService, useClass: index_2.AlertService };
var timeCardService = { provide: index_2.TimeCardService, useClass: index_2.TimeCardService };
var timeCardPrintService = { provide: index_2.TimeCardPrintService, useClass: index_2.TimeCardPrintService };
var responsiveService = { provide: index_2.ResponsiveService, useClass: index_2.ResponsiveService };
var AppModule = (function () {
    function AppModule() {
        smoothscroll.polyfill();
        keyboardeventKey.polyfill();
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                dialog_module_1.DialogsModule,
                ng2_toasty_1.ToastyModule.forRoot(),
                material_1.MatCardModule,
                material_1.MatButtonModule,
                material_1.MatInputModule,
                material_1.MatDialogModule,
                material_1.MatFormFieldModule,
                material_1.MatCheckboxModule,
                material_1.MatRadioModule,
                material_1.MatGridListModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                service_module_1.ServiceModule.forRoot(),
                material_1.MatIconModule,
                material_1.MatToolbarModule,
                ngx_bootstrap_1.TimepickerModule.forRoot(),
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                ng4_loading_spinner_1.Ng4LoadingSpinnerModule.forRoot(),
                shared_module_1.SharedModule.forRoot(),
                controls_module_1.ControlsModule.forRoot(),
                login_routing_module_1.LogintRoutingModule,
                my_account_module_1.MyAccountModule,
                timecard_module_1.TimeCardModule,
                help_routing_module_1.HelpRoutingModule,
                ng_pdf_make_1.PdfmakeModule,
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                reset_password_component_1.ResetPasswordComponent,
                forgot_password_component_1.ForgotPasswordComponent,
                help_component_1.HelpComponent
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '<%= APP_BASE %>' }, appProvider, menuProvider, common_1.DatePipe,
                authService, configProvider, endpointFactoryProvider, alertServiceProvider, timeCardService, timeCardPrintService,
                index_2.AuthGuardService, responsiveService],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map