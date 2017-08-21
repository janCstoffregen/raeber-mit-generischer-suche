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
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var paging_service_1 = require("../shared/textgrid/paging.service");
var knora_api_params_1 = require("../shared/utilities/knora-api-params");
var KonvolutComponent = (function () {
    function KonvolutComponent(http, route, dp) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.dp = dp;
        this._esearch = new knora_api_params_1.ExtendedSearch();
        this.viewMode = 'grid';
        window.onscroll = function () {
            var windowHeight = 'innerHeight' in window ? window.innerHeight
                : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            var windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                _this.loadMore();
            }
        };
    }
    KonvolutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._esearch.filterByRestype = 'http://www.knora.org/ontology/text#Convolute';
        this._esearch.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasTitle', '!EQ', ' ');
        this._esearch.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasDescription', '!EQ', ' ');
        this.dp.size = 10;
        this.dp.loadText(this._esearch).subscribe(function (konstText) { return _this.poems = konstText; });
        this.konvolut_type = this.route.snapshot.url[0].path;
        this.sub = this.route.params.subscribe(function (params) {
            _this.konvolut_id = params['konvolut'];
        });
    };
    KonvolutComponent.prototype.loadMore = function () {
        var _this = this;
        this.dp.loadText(this._esearch).subscribe(function (konstText) { return _this.poems = _this.poems.concat(konstText); });
    };
    return KonvolutComponent;
}());
KonvolutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-konvolut',
        templateUrl: 'konvolut.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute, paging_service_1.DynamicPaging])
], KonvolutComponent);
exports.KonvolutComponent = KonvolutComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9rb252b2x1dC9rb252b2x1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxzQ0FBa0Q7QUFDbEQsc0NBQXFDO0FBQ3JDLDBDQUFpRDtBQUVqRCxtQ0FBaUM7QUFDakMsaUNBQStCO0FBQy9CLHVDQUFxQztBQUNyQyxvRUFBa0U7QUFDbEUseUVBQXFHO0FBT3JHLElBQWEsaUJBQWlCO0lBWTVCLDJCQUFvQixJQUFVLEVBQVUsS0FBcUIsRUFBVSxFQUFpQjtRQUF4RixpQkFlQztRQWZtQixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFlO1FBRmhGLGFBQVEsR0FBRyxJQUFJLGlDQUFjLEVBQUUsQ0FBQztRQUd0QyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztRQUV2QixNQUFNLENBQUMsUUFBUSxHQUFHO1lBQ2hCLElBQUksWUFBWSxHQUFHLGFBQWEsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVc7a0JBQzNELFFBQVEsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1lBQzFDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQ3BDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLElBQUksWUFBWSxHQUFHLFlBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsQ0FBQztRQUNILENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyw4Q0FBOEMsQ0FBQztRQUMvRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFhLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQWEsQ0FBQyxtREFBbUQsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3ZDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEVBQXRCLENBQXNCLENBQ3BDLENBQUM7UUFFRixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxJQUFJLENBQUM7UUFDdkQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzNDLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFFLFVBQVUsQ0FBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ3ZDLFVBQUEsU0FBUyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBekMsQ0FBeUMsQ0FDdkQsQ0FBQztJQUNKLENBQUM7SUFDSCx3QkFBQztBQUFELENBakRBLEFBaURDLElBQUE7QUFqRFksaUJBQWlCO0lBTDdCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLHlCQUF5QjtLQUN2QyxDQUFDO3FDQWEwQixXQUFJLEVBQWlCLHVCQUFjLEVBQWMsOEJBQWE7R0FaN0UsaUJBQWlCLENBaUQ3QjtBQWpEWSw4Q0FBaUIiLCJmaWxlIjoiYXBwL2tvbnZvbHV0L2tvbnZvbHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSByZXRvYmF1bWdhcnRuZXIgb24gMDYuMDYuMTcuXG4gKi9cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2gnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xuaW1wb3J0IHsgRHluYW1pY1BhZ2luZyB9IGZyb20gJy4uL3NoYXJlZC90ZXh0Z3JpZC9wYWdpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBFeHRlbmRlZFNlYXJjaCwgRnVsbHRleHRTZWFyY2gsIEtub3JhUHJvcGVydHkgfSBmcm9tICcuLi9zaGFyZWQvdXRpbGl0aWVzL2tub3JhLWFwaS1wYXJhbXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdyYWUta29udm9sdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2tvbnZvbHV0LmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBLb252b2x1dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcG9lbXM6IEFycmF5PGFueT47XG5cbiAgdmlld01vZGU6IHN0cmluZztcblxuICBrb252b2x1dF9pZDogc3RyaW5nO1xuICBrb252b2x1dF90eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3ViOiBhbnk7XG5cbiAgcHJpdmF0ZSBfZXNlYXJjaCA9IG5ldyBFeHRlbmRlZFNlYXJjaCgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgZHA6IER5bmFtaWNQYWdpbmcpIHtcbiAgICB0aGlzLnZpZXdNb2RlID0gJ2dyaWQnO1xuXG4gICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgbGV0IHdpbmRvd0hlaWdodCA9ICdpbm5lckhlaWdodCcgaW4gd2luZG93ID8gd2luZG93LmlubmVySGVpZ2h0XG4gICAgICAgIDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSwgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgIGxldCBkb2NIZWlnaHQgPSBNYXRoLm1heChib2R5LnNjcm9sbEhlaWdodCxcbiAgICAgICAgYm9keS5vZmZzZXRIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LFxuICAgICAgICBodG1sLnNjcm9sbEhlaWdodCwgaHRtbC5vZmZzZXRIZWlnaHQpO1xuICAgICAgbGV0IHdpbmRvd0JvdHRvbSA9IHdpbmRvd0hlaWdodCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIGlmICh3aW5kb3dCb3R0b20gPj0gZG9jSGVpZ2h0KSB7XG4gICAgICAgIHRoaXMubG9hZE1vcmUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fZXNlYXJjaC5maWx0ZXJCeVJlc3R5cGUgPSAnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNDb252b2x1dGUnO1xuICAgIHRoaXMuX2VzZWFyY2gucHJvcGVydHkgPSBuZXcgS25vcmFQcm9wZXJ0eSgnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNoYXNUaXRsZScsICchRVEnLCAnICcpO1xuICAgIHRoaXMuX2VzZWFyY2gucHJvcGVydHkgPSBuZXcgS25vcmFQcm9wZXJ0eSgnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNoYXNEZXNjcmlwdGlvbicsICchRVEnLCAnICcpO1xuICAgIHRoaXMuZHAuc2l6ZSA9IDEwO1xuICAgIHRoaXMuZHAubG9hZFRleHQodGhpcy5fZXNlYXJjaCkuc3Vic2NyaWJlKFxuICAgICAga29uc3RUZXh0ID0+IHRoaXMucG9lbXMgPSBrb25zdFRleHRcbiAgICApO1xuXG4gICAgdGhpcy5rb252b2x1dF90eXBlID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbIDAgXS5wYXRoO1xuICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICB0aGlzLmtvbnZvbHV0X2lkID0gcGFyYW1zWyAna29udm9sdXQnIF07XG4gICAgfSk7XG4gIH1cblxuICBsb2FkTW9yZSgpIHtcbiAgICB0aGlzLmRwLmxvYWRUZXh0KHRoaXMuX2VzZWFyY2gpLnN1YnNjcmliZShcbiAgICAgIGtvbnN0VGV4dCA9PiB0aGlzLnBvZW1zID0gdGhpcy5wb2Vtcy5jb25jYXQoa29uc3RUZXh0KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
