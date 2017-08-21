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
var KonvolutWerkzeugleisteComponent = (function () {
    function KonvolutWerkzeugleisteComponent() {
        this.viewModeChange = new core_1.EventEmitter();
    }
    KonvolutWerkzeugleisteComponent.prototype.hilfe = function () {
        console.log('Hilfetext ergaenzen');
    };
    KonvolutWerkzeugleisteComponent.prototype.ngOnInit = function () { };
    return KonvolutWerkzeugleisteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], KonvolutWerkzeugleisteComponent.prototype, "viewMode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], KonvolutWerkzeugleisteComponent.prototype, "viewModeChange", void 0);
KonvolutWerkzeugleisteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-konvolut-werkzeugleiste',
        templateUrl: 'konvolut-werkzeugleiste.component.html',
        styleUrls: ['konvolut-werkzeugleiste.component.css']
    })
], KonvolutWerkzeugleisteComponent);
exports.KonvolutWerkzeugleisteComponent = KonvolutWerkzeugleisteComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rb252b2x1dC9rb252b2x1dC13ZXJremV1Z2xlaXN0ZS9rb252b2x1dC13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBK0U7QUFRL0UsSUFBYSwrQkFBK0I7SUFONUM7UUFTWSxtQkFBYyxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQVE5RSxDQUFDO0lBTkMsK0NBQUssR0FBTDtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0RBQVEsR0FBUixjQUFZLENBQUM7SUFDZixzQ0FBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBVFU7SUFBUixZQUFLLEVBQUU7O2lFQUFrQjtBQUNoQjtJQUFULGFBQU0sRUFBRTs4QkFBaUIsbUJBQVk7dUVBQXNDO0FBSGpFLCtCQUErQjtJQU4zQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSw2QkFBNkI7UUFDdkMsV0FBVyxFQUFFLHdDQUF3QztRQUNyRCxTQUFTLEVBQUUsQ0FBRSx1Q0FBdUMsQ0FBRTtLQUN2RCxDQUFDO0dBQ1csK0JBQStCLENBVzNDO0FBWFksMEVBQStCIiwiZmlsZSI6ImFwcC9rb252b2x1dC9rb252b2x1dC13ZXJremV1Z2xlaXN0ZS9rb252b2x1dC13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMDUuMDcuMTcuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUta29udm9sdXQtd2Vya3pldWdsZWlzdGUnLFxuICB0ZW1wbGF0ZVVybDogJ2tvbnZvbHV0LXdlcmt6ZXVnbGVpc3RlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdrb252b2x1dC13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIEtvbnZvbHV0V2Vya3pldWdsZWlzdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHZpZXdNb2RlOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSB2aWV3TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBoaWxmZSgpIHtcbiAgICAvLyBUT0RPXG4gICAgY29uc29sZS5sb2coJ0hpbGZldGV4dCBlcmdhZW56ZW4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==
