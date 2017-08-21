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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/Rx");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var ImageFrameComponent = (function () {
    function ImageFrameComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.zoomfactor = 5;
        this.heightAndWidth = 100;
        this.height = 200;
        this.width = 200;
        this.overflow = 'auto';
        this.resize = 'both';
        this.px = 'px';
        this.ausgeklappt = true;
    }
    ImageFrameComponent.prototype.ngOnInit = function () {
        this.konvolut_type = this.route.snapshot.url[0].path;
    };
    ImageFrameComponent.prototype.searchForDoctor = function () {
        var _this = this;
        return this.http.get('http://test-02.salsah.org/api/search/?searchtype=extended&property_id%5B%5D=439&compop%5B%5D=!EQ&searchval%5B%5D=&show_nrows=25&start_at=0&progvalfile=prog_63047.salsah&filter_by_restype=100')
            .map(function (lambda) {
            var data = lambda.json();
            console.log(data);
            return data.subjects;
        })
            .subscribe(function (response) { return _this.myImages = response; });
    };
    ImageFrameComponent.prototype.increaseSize = function () {
        if (this.zoomfactor > 2) {
            this.zoomfactor -= 1;
        }
        else {
            window.alert('Picture reached maximum quality');
        }
    };
    ImageFrameComponent.prototype.reduceSize = function () {
        if (this.zoomfactor < 5) {
            this.zoomfactor += 1;
        }
        else {
            window.alert('Picture reached minimum quality');
        }
    };
    ImageFrameComponent.prototype.increaseFrameSize = function () {
        this.height += 200;
        this.width += 200;
    };
    ImageFrameComponent.prototype.reduceFrameSize = function () {
        this.height -= 200;
        this.width -= 200;
    };
    ImageFrameComponent.prototype.resetSize = function () {
        this.height = 200;
        this.width = 200;
        this.zoomfactor = 5;
    };
    return ImageFrameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ImageFrameComponent.prototype, "images_in_grid", void 0);
ImageFrameComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-image-frame',
        templateUrl: 'image-frame.component.html',
        styleUrls: ['image-frame.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, router_1.Router])
], ImageFrameComponent);
exports.ImageFrameComponent = ImageFrameComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvaW1hZ2UtZnJhbWUvaW1hZ2UtZnJhbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXlEO0FBQ3pELHNDQUF3RDtBQUN4RCwwQ0FBaUU7QUFFakUsbUJBQWlCO0FBRWpCLG1DQUFpQztBQUNqQyxpQ0FBK0I7QUFDL0IsdUNBQXFDO0FBU3JDLElBQWEsbUJBQW1CO0lBc0I5Qiw2QkFBb0IsSUFBVSxFQUFVLEtBQXFCLEVBQVUsTUFBYztRQUFqRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBakJyRixlQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxHQUFHLENBQUM7UUFDckIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUNiLFVBQUssR0FBRyxHQUFHLENBQUM7UUFDWixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ2xCLFdBQU0sR0FBRyxNQUFNLENBQUM7UUFDaEIsT0FBRSxHQUFHLElBQUksQ0FBQztRQUVWLGdCQUFXLEdBQVksSUFBSSxDQUFDO0lBVTVCLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3ZELENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBV0M7UUFWQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ01BQWdNLENBQUM7YUFDbk4sR0FBRyxDQUNGLFVBQUMsTUFBZ0I7WUFDZixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVsQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDLENBQ0Y7YUFDQSxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCwwQ0FBWSxHQUFaO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLENBQUM7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0gsQ0FBQztJQUdELHdDQUFVLEdBQVY7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsdUNBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFHSCwwQkFBQztBQUFELENBOUVBLEFBOEVDLElBQUE7QUE1RVU7SUFBUixZQUFLLEVBQUU7OEJBQWlCLEtBQUs7MkRBQU07QUFGekIsbUJBQW1CO0lBUC9CLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFFLDJCQUEyQixDQUFFO0tBQzNDLENBQUM7cUNBd0IwQixXQUFJLEVBQWlCLHVCQUFjLEVBQWtCLGVBQU07R0F0QjFFLG1CQUFtQixDQThFL0I7QUE5RVksa0RBQW1CIiwiZmlsZSI6ImFwcC9zaGFyZWQvaW1hZ2UtZnJhbWUvaW1hZ2UtZnJhbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcywgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL1J4JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcCc7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ3JhZS1pbWFnZS1mcmFtZScsXG4gIHRlbXBsYXRlVXJsOiAnaW1hZ2UtZnJhbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsgJ2ltYWdlLWZyYW1lLmNvbXBvbmVudC5jc3MnIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBJbWFnZUZyYW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBpbWFnZXNfaW5fZ3JpZDogQXJyYXk8YW55PjtcblxuICBteUltYWdlczogQXJyYXk8YW55PjtcbiAgem9vbWZhY3RvciA9IDU7XG4gIGhlaWdodEFuZFdpZHRoID0gMTAwO1xuICBoZWlnaHQgPSAyMDA7XG4gIHdpZHRoID0gMjAwO1xuICBvdmVyZmxvdyA9ICdhdXRvJztcbiAgcmVzaXplID0gJ2JvdGgnO1xuICBweCA9ICdweCc7XG5cbiAgYXVzZ2VrbGFwcHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8vIGZvciB0ZXN0aW5nc1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuXG4gIGtvbnZvbHV0X2lkOiBzdHJpbmc7XG4gIGtvbnZvbHV0X3R5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmtvbnZvbHV0X3R5cGUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnVybFswXS5wYXRoO1xuICB9XG5cbiAgc2VhcmNoRm9yRG9jdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vdGVzdC0wMi5zYWxzYWgub3JnL2FwaS9zZWFyY2gvP3NlYXJjaHR5cGU9ZXh0ZW5kZWQmcHJvcGVydHlfaWQlNUIlNUQ9NDM5JmNvbXBvcCU1QiU1RD0hRVEmc2VhcmNodmFsJTVCJTVEPSZzaG93X25yb3dzPTI1JnN0YXJ0X2F0PTAmcHJvZ3ZhbGZpbGU9cHJvZ182MzA0Ny5zYWxzYWgmZmlsdGVyX2J5X3Jlc3R5cGU9MTAwJylcbiAgICAgIC5tYXAoXG4gICAgICAgIChsYW1iZGE6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGxhbWJkYS5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhLnN1YmplY3RzLCBudWxsLCA0KSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGEuc3ViamVjdHM7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5teUltYWdlcyA9IHJlc3BvbnNlKTtcbiAgfVxuXG4gIGluY3JlYXNlU2l6ZSgpIHtcbiAgICBpZiAodGhpcy56b29tZmFjdG9yID4gMikge1xuICAgICAgdGhpcy56b29tZmFjdG9yIC09IDE7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgd2luZG93LmFsZXJ0KCdQaWN0dXJlIHJlYWNoZWQgbWF4aW11bSBxdWFsaXR5Jyk7XG4gICAgfVxuICB9XG5cblxuICByZWR1Y2VTaXplKCkge1xuICAgIGlmICh0aGlzLnpvb21mYWN0b3IgPCA1KSB7XG4gICAgICB0aGlzLnpvb21mYWN0b3IgKz0gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB3aW5kb3cuYWxlcnQoJ1BpY3R1cmUgcmVhY2hlZCBtaW5pbXVtIHF1YWxpdHknKTtcbiAgICB9XG4gIH1cblxuICBpbmNyZWFzZUZyYW1lU2l6ZSgpIHtcbiAgICB0aGlzLmhlaWdodCArPSAyMDA7XG4gICAgdGhpcy53aWR0aCArPSAyMDA7XG4gIH1cblxuICByZWR1Y2VGcmFtZVNpemUoKSB7XG4gICAgdGhpcy5oZWlnaHQgLT0gMjAwO1xuICAgIHRoaXMud2lkdGggLT0gMjAwO1xuICB9XG5cbiAgcmVzZXRTaXplKCkge1xuICAgIHRoaXMuaGVpZ2h0ID0gMjAwO1xuICAgIHRoaXMud2lkdGggPSAyMDA7XG4gICAgdGhpcy56b29tZmFjdG9yID0gNTtcbiAgfVxuXG5cbn1cbiJdfQ==
