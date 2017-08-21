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
var globalSearchVariablesService_1 = require("./../globalSearchVariablesService");
var SearchForOneResourceComponent = (function () {
    function SearchForOneResourceComponent(http) {
        this.http = http;
        this.availableboolOperators = [
            { name: 'equal to', operator: 'EQ' },
            { name: 'not equal to', operator: '!EQ' },
            { name: 'greater than', operator: 'GT' },
            { name: 'greater or equal', operator: 'GT_EQ' },
            { name: 'lower than', operator: 'LT' },
            { name: 'lower or equal than', operator: 'LT_EQ' },
            { name: 'exists', operator: 'EXISTS' },
            { name: 'match', operator: 'MATCH' },
            { name: 'like', operator: 'LIKE' },
            { name: '!like', operator: '!LIKE' },
            { name: 'match_boolean', operator: 'MATCH_BOOLEAN' }
        ];
        this.array = [
            1
        ];
        this.sendPropertyTripleBack = new core_1.EventEmitter();
    }
    SearchForOneResourceComponent.prototype.ngOnInit = function () {
    };
    SearchForOneResourceComponent.prototype.increaseArrayElement = function () {
        this.arraySize = this.array[this.array.length - 1];
        this.arraySize += 1;
        this.array.push(this.arraySize);
    };
    SearchForOneResourceComponent.prototype.propertyQuery = function () {
        var _this = this;
        if (this.selectedResource !== undefined) {
            this.encodedURL = encodeURIComponent(this.selectedResource);
            return this.http.get(globalSearchVariablesService_1.globalSearchVariableService.API_URL + globalSearchVariablesService_1.globalSearchVariableService.propertyListsQuery + this.encodedURL)
                .map(function (lambda) {
                var data = lambda.json();
                return data.properties;
            })
                .subscribe(function (response) { return _this.myProperties = response; });
        }
    };
    SearchForOneResourceComponent.prototype.chooseProperty = function () {
    };
    SearchForOneResourceComponent.prototype.updateQuerySet = function (propertyTriple) {
        propertyTriple.push(this.selectedResource);
        this.sendPropertyTripleBack.emit(propertyTriple);
    };
    return SearchForOneResourceComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SearchForOneResourceComponent.prototype, "nthResourceSearch", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SearchForOneResourceComponent.prototype, "myResources", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SearchForOneResourceComponent.prototype, "sendPropertyTripleBack", void 0);
SearchForOneResourceComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-search-for-one-resource',
        templateUrl: 'searchForOneResource.component.html',
        styleUrls: ['searchForOneResource.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], SearchForOneResourceComponent);
exports.SearchForOneResourceComponent = SearchForOneResourceComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9zZWFyY2hGb3JPbmVSZXNvdXJjZUNvbXBvbmVudC9zZWFyY2hGb3JPbmVSZXNvdXJjZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBK0U7QUFDL0Usc0NBQStDO0FBQy9DLGtGQUFnRjtBQVFoRixJQUFhLDZCQUE2QjtJQWtDeEMsdUNBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBcEI5QiwyQkFBc0IsR0FBRztZQUN2QixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztZQUN2QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztZQUN0QyxFQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDaEQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDbEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUM7U0FDbkQsQ0FBQztRQUVGLFVBQUssR0FBRztZQUNOLENBQUM7U0FDRixDQUFDO1FBcURRLDJCQUFzQixHQUFzQixJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQWhEOUUsQ0FBQztJQUVELGdEQUFRLEdBQVI7SUFNQSxDQUFDO0lBRUQsNERBQW9CLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVsQyxDQUFDO0lBSUQscURBQWEsR0FBYjtRQUFBLGlCQWlCQztRQWZDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBR3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBEQUEyQixDQUFDLE9BQU8sR0FBRywwREFBMkIsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2lCQUN6SCxHQUFHLENBQ0YsVUFBQyxNQUFnQjtnQkFDZixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBRTNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3pCLENBQUMsQ0FDRjtpQkFDQSxTQUFTLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBQ3pELENBQUM7SUFDSCxDQUFDO0lBRUQsc0RBQWMsR0FBZDtJQUVBLENBQUM7SUFFRCxzREFBYyxHQUFkLFVBQWUsY0FBMEI7UUFFdkMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFHSCxvQ0FBQztBQUFELENBcEZBLEFBb0ZDLElBQUE7QUFyRFU7SUFBUixZQUFLLEVBQUU7O3dFQUEyQjtBQUMxQjtJQUFSLFlBQUssRUFBRTs4QkFBYyxLQUFLO2tFQUFNO0FBbUR2QjtJQUFULGFBQU0sRUFBRTs4QkFBeUIsbUJBQVk7NkVBQWdDO0FBbkZuRSw2QkFBNkI7SUFOekMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsNkJBQTZCO1FBQ3ZDLFdBQVcsRUFBRSxxQ0FBcUM7UUFDbEQsU0FBUyxFQUFFLENBQUUsb0NBQW9DLENBQUU7S0FDcEQsQ0FBQztxQ0FtQzBCLFdBQUk7R0FsQ25CLDZCQUE2QixDQW9GekM7QUFwRlksc0VBQTZCIiwiZmlsZSI6ImFwcC9zdWNoZS9zZWFyY2hGb3JPbmVSZXNvdXJjZUNvbXBvbmVudC9zZWFyY2hGb3JPbmVSZXNvdXJjZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlIH0gZnJvbSAnLi8uLi9nbG9iYWxTZWFyY2hWYXJpYWJsZXNTZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmFlLXNlYXJjaC1mb3Itb25lLXJlc291cmNlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2hGb3JPbmVSZXNvdXJjZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyAnc2VhcmNoRm9yT25lUmVzb3VyY2UuY29tcG9uZW50LmNzcycgXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hGb3JPbmVSZXNvdXJjZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cblxuICBteVByb3BlcnRpZXM6IEFycmF5PGFueT47XG4gIHNlYXJjaFJlc3VsdDogQXJyYXk8YW55PjtcbiAgc2VsZWN0ZWRSZXNvdXJjZTogc3RyaW5nO1xuICBzZWxlY3RlZFByb3BlcnR5OiBzdHJpbmc7XG4gIGZpcnN0SW5wdXQ6IHN0cmluZztcbiAgc2Vjb25kSW5wdXQ6IHN0cmluZztcbiAgY29uY2F0ZW5hdGVkU3RyaW5nOiBzdHJpbmc7XG4gIGJvb2xPcGVyYXRvcjogc3RyaW5nO1xuICBlbmNvZGVkVVJMOiBzdHJpbmc7XG4gIHNlYXJjaEZvclZhbDogc3RyaW5nO1xuICBxdWVyeTogc3RyaW5nO1xuICBhdmFpbGFibGVib29sT3BlcmF0b3JzID0gW1xuICAgIHtuYW1lOiAnZXF1YWwgdG8nLCBvcGVyYXRvcjogJ0VRJ30sXG4gICAge25hbWU6ICdub3QgZXF1YWwgdG8nLCBvcGVyYXRvcjogJyFFUSd9LFxuICAgIHtuYW1lOiAnZ3JlYXRlciB0aGFuJywgb3BlcmF0b3I6ICdHVCd9LFxuICAgIHtuYW1lOiAnZ3JlYXRlciBvciBlcXVhbCcsIG9wZXJhdG9yOiAnR1RfRVEnfSxcbiAgICB7bmFtZTogJ2xvd2VyIHRoYW4nLCBvcGVyYXRvcjogJ0xUJ30sXG4gICAge25hbWU6ICdsb3dlciBvciBlcXVhbCB0aGFuJywgb3BlcmF0b3I6ICdMVF9FUSd9LFxuICAgIHtuYW1lOiAnZXhpc3RzJywgb3BlcmF0b3I6ICdFWElTVFMnfSxcbiAgICB7bmFtZTogJ21hdGNoJywgb3BlcmF0b3I6ICdNQVRDSCd9LFxuICAgIHtuYW1lOiAnbGlrZScsIG9wZXJhdG9yOiAnTElLRSd9LFxuICAgIHtuYW1lOiAnIWxpa2UnLCBvcGVyYXRvcjogJyFMSUtFJ30sXG4gICAge25hbWU6ICdtYXRjaF9ib29sZWFuJywgb3BlcmF0b3I6ICdNQVRDSF9CT09MRUFOJ31cbiAgXTtcbiAgYXJyYXlTaXplOiBudW1iZXI7XG4gIGFycmF5ID0gW1xuICAgIDFcbiAgXTtcbiAgQElucHV0KCkgbnRoUmVzb3VyY2VTZWFyY2g6IG51bWJlcjtcbiAgQElucHV0KCkgbXlSZXNvdXJjZXM6IEFycmF5PGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdUaGlzIGlzIHJlc291cmNlIFNlYXJjaCBucjogJyArIHRoaXMubnRoUmVzb3VyY2VTZWFyY2gpO1xuICAgIC8vaWYoIHR5cGVvZiB0aGlzLm15UmVzb3VyY2VzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy9jb25zb2xlLmxvZygnUmVzb3VyY2VBcnJheTogJyArIHRoaXMubXlSZXNvdXJjZXNbMF0ubGFiZWwpO1xuICAgIC8vfVxuXG4gIH1cblxuICBpbmNyZWFzZUFycmF5RWxlbWVudCgpIHtcbiAgICB0aGlzLmFycmF5U2l6ZSA9IHRoaXMuYXJyYXlbdGhpcy5hcnJheS5sZW5ndGggLSAxIF07XG4gICAgdGhpcy5hcnJheVNpemUgKz0gMTtcbiAgICB0aGlzLmFycmF5LnB1c2godGhpcy5hcnJheVNpemUpO1xuICAgIC8vY29uc29sZS5sb2coJ1Jlc291cmNlU2VhcmNoOiAnICsgdGhpcy5udGhSZXNvdXJjZVNlYXJjaCArICdDb25zdHJhaW50OiAnICsgdGhpcy5hcnJheVNpemUpO1xuICB9XG5cblxuXG4gIHByb3BlcnR5UXVlcnkoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnUHJvcGVydHkgUXVlcnkgZm9yIFJlc291cmNlOiAnICsgdGhpcy5zZWxlY3RlZFJlc291cmNlKTtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFJlc291cmNlICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZygnUGF0aCB0byByZXF1ZXN0IHByb3BlcnR5OicgKyBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2UucHJvcGVydHlMaXN0c1F1ZXJ5KTtcbiAgICAgIHRoaXMuZW5jb2RlZFVSTCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnNlbGVjdGVkUmVzb3VyY2UpO1xuICAgICAgLy9jb25zb2xlLmxvZygnU2VsZWN0ZWQgcmVzb3VyY2U6JyArIHRoaXMuZW5jb2RlZFVSTCk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldChnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2UuQVBJX1VSTCArIGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5wcm9wZXJ0eUxpc3RzUXVlcnkgKyB0aGlzLmVuY29kZWRVUkwpXG4gICAgICAgIC5tYXAoXG4gICAgICAgICAgKGxhbWJkYTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBsYW1iZGEuanNvbigpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnByb3BlcnRpZXM7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5teVByb3BlcnRpZXMgPSByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgY2hvb3NlUHJvcGVydHkoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnU2VhcmNoSW5zdGFuY2UgJyArIHRoaXMubnRoUmVzb3VyY2VTZWFyY2ggKyAnIGNob29zZXMgcHJvcGVydHkgJyArIHRoaXMuc2VsZWN0ZWRQcm9wZXJ0eSk7XG4gIH1cblxuICB1cGRhdGVRdWVyeVNldChwcm9wZXJ0eVRyaXBsZTogQXJyYXk8YW55Pikge1xuICAgIC8vY29uc29sZS5sb2coJ0V2ZW50IGhhcyB0cmlnZ2VyZWQgdGhpcyBmdW5jdGlvbiBpbiBwYXJlbnQgY29tcG9uZW50ISBQcm9wZXJ0eXRyaXBsZTogJyArIHByb3BlcnR5VHJpcGxlKTtcbiAgICBwcm9wZXJ0eVRyaXBsZS5wdXNoKHRoaXMuc2VsZWN0ZWRSZXNvdXJjZSk7XG4gICAgdGhpcy5zZW5kUHJvcGVydHlUcmlwbGVCYWNrLmVtaXQocHJvcGVydHlUcmlwbGUpO1xuICB9XG5cbiAgQE91dHB1dCgpIHNlbmRQcm9wZXJ0eVRyaXBsZUJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG59XG4iXX0=
