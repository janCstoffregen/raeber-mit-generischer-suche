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
var FassungBlaetternComponent = (function () {
    function FassungBlaetternComponent() {
        this.titleOfPrev = 'Baum';
        this.titleOfNext = 'Brunnen';
    }
    return FassungBlaetternComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FassungBlaetternComponent.prototype, "idOfPrev", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FassungBlaetternComponent.prototype, "idOfNext", void 0);
FassungBlaetternComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-fassung-blaettern',
        templateUrl: 'fassung-blaettern.component.html',
        styleUrls: ['fassung-blaettern.component.css']
    })
], FassungBlaetternComponent);
exports.FassungBlaetternComponent = FassungBlaetternComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mYXNzdW5nL2Zhc3N1bmctYmxhZXR0ZXJuL2Zhc3N1bmctYmxhZXR0ZXJuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLHNDQUFpRDtBQVFqRCxJQUFhLHlCQUF5QjtJQU50QztRQVdFLGdCQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLGdCQUFXLEdBQUcsU0FBUyxDQUFDO0lBRzFCLENBQUM7SUFBRCxnQ0FBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBUlU7SUFBUixZQUFLLEVBQUU7OzJEQUFrQjtBQUNqQjtJQUFSLFlBQUssRUFBRTs7MkRBQWtCO0FBRmYseUJBQXlCO0lBTnJDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxXQUFXLEVBQUUsa0NBQWtDO1FBQy9DLFNBQVMsRUFBRSxDQUFFLGlDQUFpQyxDQUFFO0tBQ2pELENBQUM7R0FDVyx5QkFBeUIsQ0FTckM7QUFUWSw4REFBeUIiLCJmaWxlIjoiYXBwL2Zhc3N1bmcvZmFzc3VuZy1ibGFldHRlcm4vZmFzc3VuZy1ibGFldHRlcm4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IFJldG8gQmF1bWdhcnRuZXIgKHJmYmF1bWdhcnRuZXIpIG9uIDA1LjA3LjE3LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmFlLWZhc3N1bmctYmxhZXR0ZXJuJyxcbiAgdGVtcGxhdGVVcmw6ICdmYXNzdW5nLWJsYWV0dGVybi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnZmFzc3VuZy1ibGFldHRlcm4uY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBGYXNzdW5nQmxhZXR0ZXJuQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaWRPZlByZXY6IHN0cmluZztcbiAgQElucHV0KCkgaWRPZk5leHQ6IHN0cmluZztcblxuXG4gIHRpdGxlT2ZQcmV2ID0gJ0JhdW0nOyAvL1RPRE9cbiAgdGl0bGVPZk5leHQgPSAnQnJ1bm5lbic7IC8vVE9ET1xuXG5cbn1cbiJdfQ==
