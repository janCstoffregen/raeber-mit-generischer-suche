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
        this.showGrid = true;
        this.showCols = false;
    }
    TextgridComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            this.poems_in_grid = chng.currentValue;
        }
    };
    TextgridComponent.prototype.toGrid = function () {
        this.showGrid = true;
        this.showCols = false;
    };
    TextgridComponent.prototype.toCols = function () {
        this.showGrid = false;
        this.showCols = true;
    };
    return TextgridComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TextgridComponent.prototype, "poems_in_grid", void 0);
TextgridComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-textgrid',
        templateUrl: 'textgrid.component.html',
        styleUrls: ['textgrid.component.css']
    })
], TextgridComponent);
exports.TextgridComponent = TextgridComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS90ZXh0Z3JpZC90ZXh0Z3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBMkU7QUFRM0UsSUFBYSxpQkFBaUI7SUFOOUI7UUFVRSxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUEwQm5CLENBQUM7SUF4QkMsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDN0IsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFFLFFBQVEsQ0FBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxDQUFDO0lBUUgsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRUQsa0NBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFSCx3QkFBQztBQUFELENBL0JBLEFBK0JDLElBQUE7QUE3QlU7SUFBUixZQUFLLEVBQUU7OEJBQWdCLEtBQUs7d0RBQU07QUFGeEIsaUJBQWlCO0lBTjdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLHlCQUF5QjtRQUN0QyxTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtLQUN4QyxDQUFDO0dBQ1csaUJBQWlCLENBK0I3QjtBQS9CWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL3N1Y2hlL3RleHRncmlkL3RleHRncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSByZXRvYmF1bWdhcnRuZXIgb24gMjEuMDYuMTcuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS10ZXh0Z3JpZCcsXG4gIHRlbXBsYXRlVXJsOiAndGV4dGdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJ3RleHRncmlkLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIHBvZW1zX2luX2dyaWQ6IEFycmF5PGFueT47XG5cbiAgc2hvd0dyaWQgPSB0cnVlO1xuICBzaG93Q29scyA9IGZhbHNlO1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgY2huZyA9IGNoYW5nZXNbIHByb3BOYW1lIF07XG4gICAgICB0aGlzLnBvZW1zX2luX2dyaWQgPSBjaG5nLmN1cnJlbnRWYWx1ZTtcbiAgICB9XG4gICAgLyogICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICBsZXQgY2huZyA9IGNoYW5nZXNbcHJvcE5hbWVdO1xuICAgICBsZXQgY3VyICA9IEpTT04uc3RyaW5naWZ5KGNobmcuY3VycmVudFZhbHVlKTtcbiAgICAgbGV0IHByZXYgPSBKU09OLnN0cmluZ2lmeShjaG5nLnByZXZpb3VzVmFsdWUpO1xuICAgICB0aGlzLmNoYW5nZUxvZy5wdXNoKGAke3Byb3BOYW1lfTogY3VycmVudFZhbHVlID0gJHtjdXJ9LCBwcmV2aW91c1ZhbHVlID0gJHtwcmV2fWApO1xuICAgICB9Ki9cbiAgICAvLyBjaGFuZ2VzLnByb3AgY29udGFpbnMgdGhlIG9sZCBhbmQgdGhlIG5ldyB2YWx1ZS4uLlxuICB9XG5cbiAgdG9HcmlkKCkge1xuICAgIHRoaXMuc2hvd0dyaWQgPSB0cnVlO1xuICAgIHRoaXMuc2hvd0NvbHMgPSBmYWxzZTtcbiAgfVxuXG4gIHRvQ29scygpIHtcbiAgICB0aGlzLnNob3dHcmlkID0gZmFsc2U7XG4gICAgdGhpcy5zaG93Q29scyA9IHRydWU7XG4gIH1cblxufVxuIl19
