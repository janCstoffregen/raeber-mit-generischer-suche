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
var DefineOnePropertyForRequestComponent = (function () {
    function DefineOnePropertyForRequestComponent() {
        this.propertyTriple = [''];
        this.sendPropertyTripleBack = new core_1.EventEmitter();
    }
    DefineOnePropertyForRequestComponent.prototype.ngOnInit = function () {
        console.log('This is SearchBox nr: ' + this.nthProperty + ' and property chosen number: ');
    };
    DefineOnePropertyForRequestComponent.prototype.updatePropertyTriple = function () {
        this.propertyTriple = [''];
        this.propertyTriple[0] = this.nthResourceSearch;
        if (this.propertyTriple[1] === 'undefined') {
            this.propertyTriple.push(this.nthProperty);
        }
        else {
            this.propertyTriple[1] = this.nthProperty;
        }
        if (this.propertyTriple[2] === 'undefined') {
            this.propertyTriple.push(this.selectedProperty);
        }
        else {
            this.propertyTriple[2] = this.selectedProperty;
        }
        if (this.propertyTriple[3] === 'undefined') {
            this.propertyTriple.push(this.selectedBoolOperator);
        }
        else {
            this.propertyTriple[3] = this.selectedBoolOperator;
        }
        if (this.propertyTriple[4] === 'undefined') {
            this.propertyTriple.push(this.searchForVal);
        }
        else {
            this.propertyTriple[4] = this.searchForVal;
        }
        this.sendPropertyTripleBack.emit(this.propertyTriple);
    };
    return DefineOnePropertyForRequestComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DefineOnePropertyForRequestComponent.prototype, "nthProperty", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DefineOnePropertyForRequestComponent.prototype, "array", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DefineOnePropertyForRequestComponent.prototype, "myProperties", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], DefineOnePropertyForRequestComponent.prototype, "availableboolOperators", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DefineOnePropertyForRequestComponent.prototype, "nthResourceSearch", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DefineOnePropertyForRequestComponent.prototype, "sendPropertyTripleBack", void 0);
DefineOnePropertyForRequestComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-search-define-property',
        templateUrl: 'defineOnePropertyForRequest.component.html',
        styleUrls: ['defineOnePropertyForRequest.component.css']
    })
], DefineOnePropertyForRequestComponent);
exports.DefineOnePropertyForRequestComponent = DefineOnePropertyForRequestComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9kZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3QvZGVmaW5lT25lUHJvcGVydHlGb3JSZXF1ZXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUErRTtBQVEvRSxJQUFhLG9DQUFvQztJQU5qRDtRQWFFLG1CQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQXVDWiwyQkFBc0IsR0FBc0IsSUFBSSxtQkFBWSxFQUFPLENBQUM7SUFHaEYsQ0FBQztJQXZDQyx1REFBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLCtCQUErQixDQUFFLENBQUM7SUFDOUYsQ0FBQztJQUVNLG1FQUFvQixHQUEzQjtRQUVFLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUVoRCxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFZLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7UUFDckQsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBWSxDQUFDLENBQUMsQ0FBQztZQUM3QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdDLENBQUM7UUFFRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBS0gsMkNBQUM7QUFBRCxDQWpEQSxBQWlEQyxJQUFBO0FBaERVO0lBQVIsWUFBSyxFQUFFOzt5RUFBcUI7QUFDcEI7SUFBUixZQUFLLEVBQUU7OEJBQVEsS0FBSzttRUFBTTtBQUNsQjtJQUFSLFlBQUssRUFBRTs4QkFBZSxLQUFLOzBFQUFNO0FBQ3pCO0lBQVIsWUFBSyxFQUFFOzhCQUF5QixLQUFLO29GQUFNO0FBQ25DO0lBQVIsWUFBSyxFQUFFOzsrRUFBMkI7QUF5Q3pCO0lBQVQsYUFBTSxFQUFFOzhCQUF5QixtQkFBWTtvRkFBZ0M7QUE5Q25FLG9DQUFvQztJQU5oRCxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsV0FBVyxFQUFFLDRDQUE0QztRQUN6RCxTQUFTLEVBQUUsQ0FBRSwyQ0FBMkMsQ0FBRTtLQUMzRCxDQUFDO0dBQ1csb0NBQW9DLENBaURoRDtBQWpEWSxvRkFBb0MiLCJmaWxlIjoiYXBwL3N1Y2hlL2RlZmluZU9uZVByb3BlcnR5Rm9yUmVxdWVzdC9kZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBPbkluaXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUtc2VhcmNoLWRlZmluZS1wcm9wZXJ0eScsXG4gIHRlbXBsYXRlVXJsOiAnZGVmaW5lT25lUHJvcGVydHlGb3JSZXF1ZXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbICdkZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3QuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBEZWZpbmVPbmVQcm9wZXJ0eUZvclJlcXVlc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBudGhQcm9wZXJ0eTogc3RyaW5nO1xuICBASW5wdXQoKSBhcnJheTogQXJyYXk8YW55PjtcbiAgQElucHV0KCkgbXlQcm9wZXJ0aWVzOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKSBhdmFpbGFibGVib29sT3BlcmF0b3JzOiBBcnJheTxhbnk+O1xuICBASW5wdXQoKSBudGhSZXNvdXJjZVNlYXJjaDogc3RyaW5nO1xuICBzZWxlY3RlZFByb3BlcnR5OiBzdHJpbmc7XG4gIHByb3BlcnR5VHJpcGxlID0gWycnXTtcbiAgc2VsZWN0ZWRCb29sT3BlcmF0b3I6IHN0cmluZztcbiAgc2VhcmNoRm9yVmFsOiBzdHJpbmc7XG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdUaGlzIGlzIFNlYXJjaEJveCBucjogJyArIHRoaXMubnRoUHJvcGVydHkgKyAnIGFuZCBwcm9wZXJ0eSBjaG9zZW4gbnVtYmVyOiAnICk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlUHJvcGVydHlUcmlwbGUoKSB7XG4gICAgLy8gVXBkYXRpbmcgUHJvcGVydHlcbiAgICB0aGlzLnByb3BlcnR5VHJpcGxlID0gWycnXTtcbiAgICB0aGlzLnByb3BlcnR5VHJpcGxlWzBdID0gdGhpcy5udGhSZXNvdXJjZVNlYXJjaDtcblxuICAgIGlmICggdGhpcy5wcm9wZXJ0eVRyaXBsZVsxXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICB0aGlzLnByb3BlcnR5VHJpcGxlLnB1c2godGhpcy5udGhQcm9wZXJ0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJvcGVydHlUcmlwbGVbMV0gPSB0aGlzLm50aFByb3BlcnR5O1xuICAgIH1cblxuICAgIGlmICggdGhpcy5wcm9wZXJ0eVRyaXBsZVsyXSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG4gICAgICB0aGlzLnByb3BlcnR5VHJpcGxlLnB1c2godGhpcy5zZWxlY3RlZFByb3BlcnR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wZXJ0eVRyaXBsZVsyXSA9IHRoaXMuc2VsZWN0ZWRQcm9wZXJ0eTtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMucHJvcGVydHlUcmlwbGVbM10gPT09ICd1bmRlZmluZWQnICkge1xuICAgICAgdGhpcy5wcm9wZXJ0eVRyaXBsZS5wdXNoKHRoaXMuc2VsZWN0ZWRCb29sT3BlcmF0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByb3BlcnR5VHJpcGxlWzNdID0gdGhpcy5zZWxlY3RlZEJvb2xPcGVyYXRvcjtcbiAgICB9XG5cbiAgICBpZiAoIHRoaXMucHJvcGVydHlUcmlwbGVbNF0gPT09ICd1bmRlZmluZWQnICkge1xuICAgICAgdGhpcy5wcm9wZXJ0eVRyaXBsZS5wdXNoKHRoaXMuc2VhcmNoRm9yVmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wcm9wZXJ0eVRyaXBsZVs0XSA9IHRoaXMuc2VhcmNoRm9yVmFsO1xuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdQcm9wZXJ0eVRyaXBsZSBpczogJyArIHRoaXMucHJvcGVydHlUcmlwbGUpO1xuICAgIHRoaXMuc2VuZFByb3BlcnR5VHJpcGxlQmFjay5lbWl0KHRoaXMucHJvcGVydHlUcmlwbGUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbmRQcm9wZXJ0eVRyaXBsZUJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblxufVxuIl19
