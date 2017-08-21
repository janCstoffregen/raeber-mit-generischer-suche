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
var text_service_1 = require("./text.service");
var router_1 = require("@angular/router");
var knora_api_params_1 = require("../utilities/knora-api-params");
var _expressions = {
    'notizbuecher': 'http://www.knora.org/ontology/text#Note',
    'manuskripte': 'http://www.knora.org/ontology/text#Manuscript',
    'typoskripte': 'http://www.knora.org/ontology/text#Typescript',
    'drucke': 'http://www.knora.org/ontology/text#Print'
};
var TextComponent = (function () {
    function TextComponent(konstTextService, route) {
        this.konstTextService = konstTextService;
        this.route = route;
    }
    TextComponent.prototype.ngOnInit = function () {
        var _this = this;
        var searchParams = new knora_api_params_1.ExtendedSearch;
        searchParams.filterByRestype = _expressions[this.route.snapshot.url[0].path];
        searchParams.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasTitle', '!EQ', ' ');
        searchParams.property = new knora_api_params_1.KnoraProperty('http://www.knora.org/ontology/text#hasDescription', '!EQ', ' ');
        searchParams.showNRows = 500;
        this.route.snapshot.paramMap.get('fassung');
        this.konstTextService
            .getText(searchParams)
            .subscribe(function (konstText) { return _this.text = konstText; }, function (error) { return _this.errorMsg = error; });
    };
    return TextComponent;
}());
TextComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-text',
        templateUrl: './text.component.html',
        providers: [text_service_1.TextService]
    }),
    __metadata("design:paramtypes", [text_service_1.TextService, router_1.ActivatedRoute])
], TextComponent);
exports.TextComponent = TextComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGV4dC90ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUlBLHNDQUFrRDtBQUNsRCwrQ0FBNkM7QUFDN0MsMENBQWlEO0FBQ2pELGtFQUE4RTtBQUU5RSxJQUFNLFlBQVksR0FBOEI7SUFDOUMsY0FBYyxFQUFFLHlDQUF5QztJQUN6RCxhQUFhLEVBQUUsK0NBQStDO0lBQzlELGFBQWEsRUFBRSwrQ0FBK0M7SUFDOUQsUUFBUSxFQUFFLDBDQUEwQztDQUNyRCxDQUFDO0FBUUYsSUFBYSxhQUFhO0lBS3hCLHVCQUFvQixnQkFBNkIsRUFBVSxLQUFxQjtRQUE1RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUNoRixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZDLElBQUksWUFBWSxHQUFHLElBQUksaUNBQWMsQ0FBQztRQUN0QyxZQUFZLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFFLENBQUM7UUFDakYsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFhLENBQUMsNkNBQTZDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3JHLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQ0FBYSxDQUFDLG1EQUFtRCxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRyxZQUFZLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztRQUU3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxnQkFBZ0I7YUFDbEIsT0FBTyxDQUFDLFlBQVksQ0FBQzthQUNyQixTQUFTLENBQ1IsVUFBQSxTQUFTLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsRUFBckIsQ0FBcUIsRUFDbEMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFRLEtBQUssRUFBMUIsQ0FBMEIsQ0FDcEMsQ0FBQztJQUVOLENBQUM7SUFDSCxvQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsU0FBUyxFQUFFLENBQUUsMEJBQVcsQ0FBRTtLQUMzQixDQUFDO3FDQU1zQywwQkFBVyxFQUFpQix1QkFBYztHQUxyRSxhQUFhLENBeUJ6QjtBQXpCWSxzQ0FBYSIsImZpbGUiOiJhcHAvc2hhcmVkL3RleHQvdGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNy8xMC8xNy5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGV4dFNlcnZpY2UgfSBmcm9tICcuL3RleHQuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFeHRlbmRlZFNlYXJjaCwgS25vcmFQcm9wZXJ0eSB9IGZyb20gJy4uL3V0aWxpdGllcy9rbm9yYS1hcGktcGFyYW1zJztcblxuY29uc3QgX2V4cHJlc3Npb25zOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xuICAnbm90aXpidWVjaGVyJzogJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjTm90ZScsXG4gICdtYW51c2tyaXB0ZSc6ICdodHRwOi8vd3d3Lmtub3JhLm9yZy9vbnRvbG9neS90ZXh0I01hbnVzY3JpcHQnLFxuICAndHlwb3NrcmlwdGUnOiAnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNUeXBlc2NyaXB0JyxcbiAgJ2RydWNrZSc6ICdodHRwOi8vd3d3Lmtub3JhLm9yZy9vbnRvbG9neS90ZXh0I1ByaW50J1xufTtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmFlLXRleHQnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogWyBUZXh0U2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRleHQ6IEFycmF5PGFueT47XG4gIGVycm9yTXNnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBrb25zdFRleHRTZXJ2aWNlOiBUZXh0U2VydmljZSwgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBzZWFyY2hQYXJhbXMgPSBuZXcgRXh0ZW5kZWRTZWFyY2g7XG4gICAgc2VhcmNoUGFyYW1zLmZpbHRlckJ5UmVzdHlwZSA9IF9leHByZXNzaW9uc1sgdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbIDAgXS5wYXRoIF07XG4gICAgc2VhcmNoUGFyYW1zLnByb3BlcnR5ID0gbmV3IEtub3JhUHJvcGVydHkoJ2h0dHA6Ly93d3cua25vcmEub3JnL29udG9sb2d5L3RleHQjaGFzVGl0bGUnLCAnIUVRJywgJyAnKTtcbiAgICBzZWFyY2hQYXJhbXMucHJvcGVydHkgPSBuZXcgS25vcmFQcm9wZXJ0eSgnaHR0cDovL3d3dy5rbm9yYS5vcmcvb250b2xvZ3kvdGV4dCNoYXNEZXNjcmlwdGlvbicsICchRVEnLCAnICcpO1xuICAgIHNlYXJjaFBhcmFtcy5zaG93TlJvd3MgPSA1MDA7XG5cbiAgICB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnZmFzc3VuZycpO1xuXG4gICAgdGhpcy5rb25zdFRleHRTZXJ2aWNlXG4gICAgICAuZ2V0VGV4dChzZWFyY2hQYXJhbXMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBrb25zdFRleHQgPT4gdGhpcy50ZXh0ID0ga29uc3RUZXh0LFxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yTXNnID0gPGFueT5lcnJvclxuICAgICAgKTtcblxuICB9XG59XG4iXX0=
