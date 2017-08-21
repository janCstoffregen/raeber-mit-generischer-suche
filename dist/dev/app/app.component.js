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
var env_config_1 = require("./shared/config/env.config");
require("./operators");
var AppComponent = (function () {
    function AppComponent() {
        console.log('Environment config', env_config_1.Config);
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-app',
        template: "\n    <header id=\"rt-top-surround\">\n      <rae-kopfzeile></rae-kopfzeile>\n    </header>\n    <main id='rt-mainbody-surround'>\n      <rae-haupttext></rae-haupttext>\n    </main>\n    <footer id='rt-footer-surround'>\n      <rae-fusszeile></rae-fusszeile>\n    </footer>\n  ",
        styles: [
            ":host {\n      flex: 1 1 100%;\n      display: flex;\n      flex-flow: column;\n    }"
        ]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBQzFDLHlEQUFvRDtBQUNwRCx1QkFBcUI7QUEyQnJCLElBQWEsWUFBWTtJQUN2QjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsbUJBQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDSCxtQkFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksWUFBWTtJQXRCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixRQUFRLEVBQUUsdVJBVVQ7UUFDRCxNQUFNLEVBQUU7WUFDSix1RkFJQTtTQUNIO0tBQ0YsQ0FBQzs7R0FDVyxZQUFZLENBSXhCO0FBSlksb0NBQVkiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2NvbmZpZy9lbnYuY29uZmlnJztcbmltcG9ydCAnLi9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbWFpbiBhcHBsaWNhdGlvbiBjb21wb25lbnQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS1hcHAnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgaWQ9XCJydC10b3Atc3Vycm91bmRcIj5cbiAgICAgIDxyYWUta29wZnplaWxlPjwvcmFlLWtvcGZ6ZWlsZT5cbiAgICA8L2hlYWRlcj5cbiAgICA8bWFpbiBpZD0ncnQtbWFpbmJvZHktc3Vycm91bmQnPlxuICAgICAgPHJhZS1oYXVwdHRleHQ+PC9yYWUtaGF1cHR0ZXh0PlxuICAgIDwvbWFpbj5cbiAgICA8Zm9vdGVyIGlkPSdydC1mb290ZXItc3Vycm91bmQnPlxuICAgICAgPHJhZS1mdXNzemVpbGU+PC9yYWUtZnVzc3plaWxlPlxuICAgIDwvZm9vdGVyPlxuICBgLFxuICBzdHlsZXM6IFtcbiAgICAgIGA6aG9zdCB7XG4gICAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdFbnZpcm9ubWVudCBjb25maWcnLCBDb25maWcpO1xuICB9XG59XG4iXX0=
