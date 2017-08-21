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
var TextgridComponent = (function () {
    function TextgridComponent() {
        this.contentType = 'suche';
        this.viewMode = 'grid';
        this.showText = true;
    }
    TextgridComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            if (propName === 'poemsInGrid') {
                var chng = changes[propName];
                this.poemsInGrid = chng.currentValue;
            }
        }
    };
    return TextgridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextgridComponent.prototype, "contentType", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], TextgridComponent.prototype, "viewMode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], TextgridComponent.prototype, "showText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TextgridComponent.prototype, "poemsInGrid", void 0);
TextgridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-textgrid',
        templateUrl: 'textgrid.component.html',
        styleUrls: ['textgrid.component.css']
    })
], TextgridComponent);
exports.TextgridComponent = TextgridComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGV4dGdyaWQvdGV4dGdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsc0NBQTJFO0FBUTNFLElBQWEsaUJBQWlCO0lBTjlCO1FBUVcsZ0JBQVcsR0FBVyxPQUFPLENBQUM7UUFDOUIsYUFBUSxHQUFXLE1BQU0sQ0FBQztRQUMxQixhQUFRLEdBQVksSUFBSSxDQUFDO0lBbUJwQyxDQUFDO0lBZkMsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBRSxRQUFRLENBQUUsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3ZDLENBQUM7UUFDSCxDQUFDO0lBUUgsQ0FBQztJQUNILHdCQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXJCVTtJQUFSLFlBQUssRUFBRTs7c0RBQStCO0FBQzlCO0lBQVIsWUFBSyxFQUFFOzttREFBMkI7QUFDMUI7SUFBUixZQUFLLEVBQUU7O21EQUEwQjtBQUV6QjtJQUFSLFlBQUssRUFBRTs4QkFBYyxLQUFLO3NEQUFNO0FBTnRCLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSx5QkFBeUI7UUFDdEMsU0FBUyxFQUFFLENBQUUsd0JBQXdCLENBQUU7S0FDeEMsQ0FBQztHQUNXLGlCQUFpQixDQXVCN0I7QUF2QlksOENBQWlCIiwiZmlsZSI6ImFwcC9zaGFyZWQvdGV4dGdyaWQvdGV4dGdyaWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHJldG9iYXVtZ2FydG5lciBvbiAyMS4wNi4xNy5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmFlLXRleHRncmlkJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZXh0Z3JpZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAndGV4dGdyaWQuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0Z3JpZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgY29udGVudFR5cGU6IHN0cmluZyA9ICdzdWNoZSc7IC8vIHN5bm9wc2UgT1Iga29udm9sdXQgT1Igc3VjaGVcbiAgQElucHV0KCkgdmlld01vZGU6IHN0cmluZyA9ICdncmlkJztcbiAgQElucHV0KCkgc2hvd1RleHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpIHBvZW1zSW5HcmlkOiBBcnJheTxhbnk+O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAocHJvcE5hbWUgPT09ICdwb2Vtc0luR3JpZCcpIHtcbiAgICAgICAgbGV0IGNobmcgPSBjaGFuZ2VzWyBwcm9wTmFtZSBdO1xuICAgICAgICB0aGlzLnBvZW1zSW5HcmlkID0gY2huZy5jdXJyZW50VmFsdWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8qICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgbGV0IGNobmcgPSBjaGFuZ2VzW3Byb3BOYW1lXTtcbiAgICAgbGV0IGN1ciAgPSBKU09OLnN0cmluZ2lmeShjaG5nLmN1cnJlbnRWYWx1ZSk7XG4gICAgIGxldCBwcmV2ID0gSlNPTi5zdHJpbmdpZnkoY2huZy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgdGhpcy5jaGFuZ2VMb2cucHVzaChgJHtwcm9wTmFtZX06IGN1cnJlbnRWYWx1ZSA9ICR7Y3VyfSwgcHJldmlvdXNWYWx1ZSA9ICR7cHJldn1gKTtcbiAgICAgfSovXG4gICAgLy8gY2hhbmdlcy5wcm9wIGNvbnRhaW5zIHRoZSBvbGQgYW5kIHRoZSBuZXcgdmFsdWUuLi5cbiAgfVxufVxuIl19
