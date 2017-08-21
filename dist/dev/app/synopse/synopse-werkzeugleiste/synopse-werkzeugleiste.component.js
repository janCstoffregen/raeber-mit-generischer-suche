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
var SynopseWerkzeugleisteComponent = (function () {
    function SynopseWerkzeugleisteComponent() {
        this.viewModeChange = new core_1.EventEmitter();
        this.showTextChange = new core_1.EventEmitter();
    }
    SynopseWerkzeugleisteComponent.prototype.neuladen = function () {
        window.location.reload();
    };
    SynopseWerkzeugleisteComponent.prototype.hilfe = function () {
        console.log('Hilfetext ergaenzen');
    };
    SynopseWerkzeugleisteComponent.prototype.ngOnInit = function () { };
    return SynopseWerkzeugleisteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], SynopseWerkzeugleisteComponent.prototype, "viewMode", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SynopseWerkzeugleisteComponent.prototype, "viewModeChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SynopseWerkzeugleisteComponent.prototype, "showText", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SynopseWerkzeugleisteComponent.prototype, "showTextChange", void 0);
SynopseWerkzeugleisteComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-synopse-werkzeugleiste',
        templateUrl: 'synopse-werkzeugleiste.component.html',
        styleUrls: ['synopse-werkzeugleiste.component.css']
    })
], SynopseWerkzeugleisteComponent);
exports.SynopseWerkzeugleisteComponent = SynopseWerkzeugleisteComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zeW5vcHNlL3N5bm9wc2Utd2Vya3pldWdsZWlzdGUvc3lub3BzZS13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBK0U7QUFRL0UsSUFBYSw4QkFBOEI7SUFOM0M7UUFTWSxtQkFBYyxHQUF5QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztRQUVsRSxtQkFBYyxHQUEwQixJQUFJLG1CQUFZLEVBQVcsQ0FBQztJQVloRixDQUFDO0lBVkMsaURBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDhDQUFLLEdBQUw7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGlEQUFRLEdBQVIsY0FBWSxDQUFDO0lBQ2YscUNBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBZlU7SUFBUixZQUFLLEVBQUU7O2dFQUFrQjtBQUNoQjtJQUFULGFBQU0sRUFBRTs4QkFBaUIsbUJBQVk7c0VBQXNDO0FBQ25FO0lBQVIsWUFBSyxFQUFFOztnRUFBbUI7QUFDakI7SUFBVCxhQUFNLEVBQUU7OEJBQWlCLG1CQUFZO3NFQUF3QztBQUxuRSw4QkFBOEI7SUFOMUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsNEJBQTRCO1FBQ3RDLFdBQVcsRUFBRSx1Q0FBdUM7UUFDcEQsU0FBUyxFQUFFLENBQUUsc0NBQXNDLENBQUU7S0FDdEQsQ0FBQztHQUNXLDhCQUE4QixDQWlCMUM7QUFqQlksd0VBQThCIiwiZmlsZSI6ImFwcC9zeW5vcHNlL3N5bm9wc2Utd2Vya3pldWdsZWlzdGUvc3lub3BzZS13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgUmV0byBCYXVtZ2FydG5lciAocmZiYXVtZ2FydG5lcikgb24gMDUuMDcuMTcuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUtc3lub3BzZS13ZXJremV1Z2xlaXN0ZScsXG4gIHRlbXBsYXRlVXJsOiAnc3lub3BzZS13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnc3lub3BzZS13ZXJremV1Z2xlaXN0ZS5jb21wb25lbnQuY3NzJyBdXG59KVxuZXhwb3J0IGNsYXNzIFN5bm9wc2VXZXJremV1Z2xlaXN0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgdmlld01vZGU6IHN0cmluZztcbiAgQE91dHB1dCgpIHZpZXdNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBASW5wdXQoKSBzaG93VGV4dDogYm9vbGVhbjtcbiAgQE91dHB1dCgpIHNob3dUZXh0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgbmV1bGFkZW4oKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9XG5cbiAgaGlsZmUoKSB7XG4gICAgLy8gVE9ET1xuICAgIGNvbnNvbGUubG9nKCdIaWxmZXRleHQgZXJnYWVuemVuJyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHt9XG59XG4iXX0=
