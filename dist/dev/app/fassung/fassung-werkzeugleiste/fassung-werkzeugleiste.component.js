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
var FassungWerkzeugleisteComponent = (function () {
    function FassungWerkzeugleisteComponent() {
        this.poemResizableChange = new core_1.EventEmitter();
        this.showRegisterChange = new core_1.EventEmitter();
    }
    FassungWerkzeugleisteComponent.prototype.neuladen = function () {
        window.location.reload();
    };
    FassungWerkzeugleisteComponent.prototype.hilfe = function () {
        console.log('Hilfetext ergaenzen');
    };
    FassungWerkzeugleisteComponent.prototype.ngOnInit = function () { };
    return FassungWerkzeugleisteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FassungWerkzeugleisteComponent.prototype, "poemResizable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FassungWerkzeugleisteComponent.prototype, "showRegister", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FassungWerkzeugleisteComponent.prototype, "poemResizableChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], FassungWerkzeugleisteComponent.prototype, "showRegisterChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FassungWerkzeugleisteComponent.prototype, "idOfPrev", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FassungWerkzeugleisteComponent.prototype, "idOfNext", void 0);
FassungWerkzeugleisteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-fassung-werkzeugleiste',
        templateUrl: 'fassung-werkzeugleiste.component.html',
        styleUrls: ['fassung-werkzeugleiste.component.css']
    })
], FassungWerkzeugleisteComponent);
exports.FassungWerkzeugleisteComponent = FassungWerkzeugleisteComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mYXNzdW5nL2Zhc3N1bmctd2Vya3pldWdsZWlzdGUvZmFzc3VuZy13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBK0U7QUFRL0UsSUFBYSw4QkFBOEI7SUFOM0M7UUFVWSx3QkFBbUIsR0FBMEIsSUFBSSxtQkFBWSxFQUFXLENBQUM7UUFDekUsdUJBQWtCLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO0lBZXBGLENBQUM7SUFWQyxpREFBUSxHQUFSO1FBQ0UsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsOENBQUssR0FBTDtRQUVFLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaURBQVEsR0FBUixjQUFZLENBQUM7SUFDZixxQ0FBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFsQlU7SUFBUixZQUFLLEVBQUU7O3FFQUF3QjtBQUN2QjtJQUFSLFlBQUssRUFBRTs7b0VBQXVCO0FBQ3JCO0lBQVQsYUFBTSxFQUFFOzhCQUFzQixtQkFBWTsyRUFBd0M7QUFDekU7SUFBVCxhQUFNLEVBQUU7OEJBQXFCLG1CQUFZOzBFQUF3QztBQUV6RTtJQUFSLFlBQUssRUFBRTs7Z0VBQWtCO0FBQ2pCO0lBQVIsWUFBSyxFQUFFOztnRUFBa0I7QUFSZiw4QkFBOEI7SUFOMUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFdBQVcsRUFBRSx1Q0FBdUM7UUFDcEQsU0FBUyxFQUFFLENBQUUsc0NBQXNDLENBQUU7S0FDdEQsQ0FBQztHQUNXLDhCQUE4QixDQW9CMUM7QUFwQlksd0VBQThCIiwiZmlsZSI6ImFwcC9mYXNzdW5nL2Zhc3N1bmctd2Vya3pldWdsZWlzdGUvZmFzc3VuZy13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMDUuMDcuMTcuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUtZmFzc3VuZy13ZXJremV1Z2xlaXN0ZScsXG4gIHRlbXBsYXRlVXJsOiAnZmFzc3VuZy13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnZmFzc3VuZy13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIEZhc3N1bmdXZXJremV1Z2xlaXN0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgcG9lbVJlc2l6YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc2hvd1JlZ2lzdGVyOiBib29sZWFuO1xuICBAT3V0cHV0KCkgcG9lbVJlc2l6YWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgc2hvd1JlZ2lzdGVyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KCkgaWRPZlByZXY6IHN0cmluZztcbiAgQElucHV0KCkgaWRPZk5leHQ6IHN0cmluZztcblxuICBuZXVsYWRlbigpIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxuICBoaWxmZSgpIHtcbiAgICAvLyBUT0RPXG4gICAgY29uc29sZS5sb2coJ0hpbGZldGV4dCBlcmdhZW56ZW4nKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==
