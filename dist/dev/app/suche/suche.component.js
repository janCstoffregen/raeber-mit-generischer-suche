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
var globalSearchVariablesService_1 = require("./globalSearchVariablesService");
var SucheComponent = (function () {
    function SucheComponent(http) {
        this.http = http;
        this.numberOfComponents = 1;
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
        this.isAlreadyInArray = 0;
        this.helperMap = new Map();
        this.mapOfAllQueries = new Map();
        this.count = 0;
        this.numberOfPropertiesInSearchBox = '';
        this.finalQueryArray = [''];
        this.currentSearchBox = '1';
    }
    SucheComponent.prototype.ngOnInit = function () {
        this.initialQuery(this.vocabulary, this.resourceTypesPath);
    };
    SucheComponent.prototype.initialQuery = function () {
        var _this = this;
        return this.http.get(globalSearchVariablesService_1.globalSearchVariableService.API_URL +
            globalSearchVariablesService_1.globalSearchVariableService.resourceTypesPath +
            globalSearchVariablesService_1.globalSearchVariableService.initialVocabulary)
            .map(function (lambda) {
            var data = lambda.json();
            console.log(data);
            return data.resourcetypes;
        })
            .subscribe(function (response) { return _this.myResources = response; });
    };
    SucheComponent.prototype.propertyQuery = function () {
        var _this = this;
        if (this.selectedResource !== undefined) {
            this.encodedURL = encodeURIComponent(this.selectedResource);
            return this.http.get(globalSearchVariablesService_1.globalSearchVariableService.API_URL + globalSearchVariablesService_1.globalSearchVariableService.propertyListsQuery + this.encodedURL)
                .map(function (lambda) {
                var data = lambda.json();
                console.log(data);
                return data.properties;
            })
                .subscribe(function (response) { return _this.myProperties = response; });
        }
    };
    SucheComponent.prototype.finalQuery = function () {
        var _this = this;
        this.query = globalSearchVariablesService_1.globalSearchVariableService.API_URL +
            globalSearchVariablesService_1.globalSearchVariableService.extendedSearch +
            encodeURIComponent(this.selectedResource) +
            globalSearchVariablesService_1.globalSearchVariableService.extendedProperty +
            encodeURIComponent(this.selectedProperty) +
            globalSearchVariablesService_1.globalSearchVariableService.compareOperator +
            this.boolOperator +
            globalSearchVariablesService_1.globalSearchVariableService.searchval +
            this.searchForVal;
        return this.http.get(this.query)
            .map(function (lambda) {
            var data = lambda.json();
            console.log(data);
            return data.subjects;
        })
            .subscribe(function (response) { return _this.searchResult = response; });
    };
    SucheComponent.prototype.increaseNumberOfComponents = function () {
        this.numberOfComponents += 1;
        console.log(this.numberOfComponents);
        console.log(typeof this.arraySize);
    };
    SucheComponent.prototype.increaseArrayElement = function () {
        this.arraySize = this.array[this.array.length - 1];
        this.arraySize += 1;
        this.array.push(this.arraySize);
        console.log(this.arraySize);
    };
    SucheComponent.prototype.updateQuerySet = function (propertyTriple) {
        var _this = this;
        this.k = 0;
        console.log('PropertyTriple: ' + propertyTriple);
        console.log('Resource: ' + this.selectedResource);
        this.mapOfAllQueries.set(propertyTriple[0].toString() + propertyTriple[1].toString(), [
            propertyTriple[2], [
                propertyTriple[3], propertyTriple[4]
            ]
        ]);
        this.str = JSON.stringify(this.mapOfAllQueries, null, 4);
        console.log(this.str);
        this.keys = Array.from(this.mapOfAllQueries.keys());
        console.log(this.keys);
        this.mapOfAllQueries.forEach(function (value) {
            if (_this.keys[_this.k][1] === '1') {
                console.log('Add first property');
                _this.finalQueryArray[_this.keys[_this.k][0] - 1] =
                    globalSearchVariablesService_1.globalSearchVariableService.API_URL
                        + globalSearchVariablesService_1.globalSearchVariableService.extendedSearch
                        + encodeURIComponent(propertyTriple[5])
                        + globalSearchVariablesService_1.globalSearchVariableService.extendedProperty
                        + encodeURIComponent(value[0])
                        + globalSearchVariablesService_1.globalSearchVariableService.compareOperator
                        + value[1][0]
                        + globalSearchVariablesService_1.globalSearchVariableService.searchval
                        + value[1][1];
            }
            else {
                console.log('Add additional property');
                _this.finalQueryArray[_this.keys[_this.k][0] - 1]
                    += globalSearchVariablesService_1.globalSearchVariableService.extendedProperty
                        + encodeURIComponent(value[0])
                        + globalSearchVariablesService_1.globalSearchVariableService.compareOperator
                        + value[1][0]
                        + globalSearchVariablesService_1.globalSearchVariableService.searchval
                        + value[1][1];
            }
            _this.k++;
            console.log(value[0]);
            for (_this.i = 0; _this.i < value[1].length; _this.i++) {
                console.log(value[1][_this.i]);
            }
        });
    };
    SucheComponent.prototype.executeFinalQueries = function () {
        console.log(this.finalQueryArray);
        for (this.i = 0; this.i < this.finalQueryArray.length; this.i++) {
            this.performQuery(this.finalQueryArray[this.i]);
        }
    };
    SucheComponent.prototype.performQuery = function (query) {
        var _this = this;
        return this.http.get(query)
            .map(function (lambda) {
            var data = lambda.json();
            _this.k = 0;
            if (data.subjects !== undefined) {
                if (_this.allSearchResults === undefined) {
                    _this.allSearchResults = [];
                }
                _this.allSearchResults.push.apply(_this.allSearchResults, data.subjects);
            }
            console.log(_this.allSearchResults);
            return data.subjects;
        })
            .subscribe(function (response) { return _this.searchResult = response; });
    };
    return SucheComponent;
}());
SucheComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rae-suche',
        templateUrl: 'suche.component.html'
    }),
    __metadata("design:paramtypes", [http_1.Http])
], SucheComponent);
exports.SucheComponent = SucheComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS9zdWNoZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBa0Q7QUFDbEQsc0NBQStDO0FBQy9DLCtFQUE2RTtBQVc3RSxJQUFhLGNBQWM7SUErQ3pCLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQTdDOUIsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBWXZCLDJCQUFzQixHQUFHO1lBQ3ZCLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1lBQ2xDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1lBQ3RDLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztZQUNoRCxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBQztTQUNuRCxDQUFDO1FBRUYsVUFBSyxHQUFHO1lBQ04sQ0FBQztTQUNGLENBQUM7UUFJRixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFFckIsY0FBUyxHQUFHLElBQUksR0FBRyxF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QyxDQUFDO3FDQWdEMEIsV0FBSTtHQS9DbkIsY0FBYyxDQTZNMUI7QUE3TVksd0NBQWMiLCJmaWxlIjoiYXBwL3N1Y2hlL3N1Y2hlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBTZWJhc3RpYW4gU2Now7xwYmFjaCAoc2ViYXN0aWFuLnNjaHVlcGJhY2hAdW5pYmFzLmNoKSBvbiA2LzcvMTcuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2UgfSBmcm9tICcuL2dsb2JhbFNlYXJjaFZhcmlhYmxlc1NlcnZpY2UnO1xuaW1wb3J0IHtpc1VuZGVmaW5lZH0gZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAncmFlLXN1Y2hlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdWNoZS5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgU3VjaGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB2b2NhYnVsYXJ5OiAnaHR0cCUzQSUyRiUyRnd3dy5rbm9yYS5vcmclMkZvbnRvbG9neSUyRnRleHQnO1xuICBudW1iZXJPZkNvbXBvbmVudHMgPSAxO1xuXG5cbiAgbXlSZXNvdXJjZXM6IEFycmF5PGFueT47XG4gIG15UHJvcGVydGllczogQXJyYXk8YW55PjtcbiAgc2VhcmNoUmVzdWx0OiBBcnJheTxhbnk+O1xuICBzZWxlY3RlZFJlc291cmNlOiBzdHJpbmc7XG4gIHNlbGVjdGVkUHJvcGVydHk6IHN0cmluZztcbiAgYm9vbE9wZXJhdG9yOiBzdHJpbmc7XG4gIGVuY29kZWRVUkw6IHN0cmluZztcbiAgc2VhcmNoRm9yVmFsOiBzdHJpbmc7XG4gIHF1ZXJ5OiBzdHJpbmc7XG4gIGF2YWlsYWJsZWJvb2xPcGVyYXRvcnMgPSBbXG4gICAge25hbWU6ICdlcXVhbCB0bycsIG9wZXJhdG9yOiAnRVEnfSxcbiAgICB7bmFtZTogJ25vdCBlcXVhbCB0bycsIG9wZXJhdG9yOiAnIUVRJ30sXG4gICAge25hbWU6ICdncmVhdGVyIHRoYW4nLCBvcGVyYXRvcjogJ0dUJ30sXG4gICAge25hbWU6ICdncmVhdGVyIG9yIGVxdWFsJywgb3BlcmF0b3I6ICdHVF9FUSd9LFxuICAgIHtuYW1lOiAnbG93ZXIgdGhhbicsIG9wZXJhdG9yOiAnTFQnfSxcbiAgICB7bmFtZTogJ2xvd2VyIG9yIGVxdWFsIHRoYW4nLCBvcGVyYXRvcjogJ0xUX0VRJ30sXG4gICAge25hbWU6ICdleGlzdHMnLCBvcGVyYXRvcjogJ0VYSVNUUyd9LFxuICAgIHtuYW1lOiAnbWF0Y2gnLCBvcGVyYXRvcjogJ01BVENIJ30sXG4gICAge25hbWU6ICdsaWtlJywgb3BlcmF0b3I6ICdMSUtFJ30sXG4gICAge25hbWU6ICchbGlrZScsIG9wZXJhdG9yOiAnIUxJS0UnfSxcbiAgICB7bmFtZTogJ21hdGNoX2Jvb2xlYW4nLCBvcGVyYXRvcjogJ01BVENIX0JPT0xFQU4nfVxuICBdO1xuICBhcnJheVNpemU6IG51bWJlcjtcbiAgYXJyYXkgPSBbXG4gICAgMVxuICBdO1xuICBpOiBudW1iZXI7XG4gIGo6IG51bWJlcjtcbiAgazogbnVtYmVyO1xuICBpc0FscmVhZHlJbkFycmF5ID0gMDtcbiAgLy9zZXRPZkFsbFF1ZXJpZXM6IEFycmF5PGFueT47IC8ve251bWJlck9mU2VhcmNoQm94OiAnJywgbnVtYmVyT2ZQcm9wZXJ0eTogJycsIHByb3BlcnR5SVJJOiAnJywgbG9naWNhbE9wZXJhdG9yOiAnJywgc2VhcmNoVmFsOiAnJ31cbiAgaGVscGVyTWFwID0gbmV3IE1hcCgpO1xuICBtYXBPZkFsbFF1ZXJpZXMgPSBuZXcgTWFwKCk7XG4gIGNvdW50ID0gMDtcbiAgbnVtYmVyT2ZQcm9wZXJ0aWVzSW5TZWFyY2hCb3ggPSAnJztcbiAgc3RyOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIGtleXM6IEFycmF5PGFueT47XG4gIGZpbmFsUXVlcnlBcnJheT0gWycnXTtcbiAgY3VycmVudFNlYXJjaEJveCA9ICcxJztcbiAgYWxsU2VhcmNoUmVzdWx0czogQXJyYXk8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vY29uc29sZS5sb2codGhpcy52b2NhYnVsYXJ5KTtcbiAgICB0aGlzLmluaXRpYWxRdWVyeSh0aGlzLnZvY2FidWxhcnksIHRoaXMucmVzb3VyY2VUeXBlc1BhdGgpO1xuICB9XG5cbiAgaW5pdGlhbFF1ZXJ5KCkge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0XG4gICAgKFxuICAgICAgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLkFQSV9VUkwgK1xuICAgICAgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLnJlc291cmNlVHlwZXNQYXRoICtcbiAgICAgIGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5pbml0aWFsVm9jYWJ1bGFyeVxuICAgIClcbiAgICAgIC5tYXAoXG4gICAgICAgIChsYW1iZGE6IFJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGxhbWJkYS5qc29uKCk7XG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGEucmVzb3VyY2V0eXBlcztcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLm15UmVzb3VyY2VzID0gcmVzcG9uc2UpO1xuICB9XG5cbiAgcHJvcGVydHlRdWVyeSgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFJlc291cmNlICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgLy9jb25zb2xlLmxvZygnUGF0aCB0byByZXF1ZXN0IHByb3BlcnR5OicgKyBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2UucHJvcGVydHlMaXN0c1F1ZXJ5KTtcbiAgICAgIHRoaXMuZW5jb2RlZFVSTCA9IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnNlbGVjdGVkUmVzb3VyY2UpO1xuICAgICAgLy9jb25zb2xlLmxvZygnU2VsZWN0ZWQgcmVzb3VyY2U6JyArIHRoaXMuZW5jb2RlZFVSTCk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5BUElfVVJMICsgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLnByb3BlcnR5TGlzdHNRdWVyeSArIHRoaXMuZW5jb2RlZFVSTClcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAobGFtYmRhOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGxhbWJkYS5qc29uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnByb3BlcnRpZXM7XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUocmVzcG9uc2UgPT4gdGhpcy5teVByb3BlcnRpZXMgPSByZXNwb25zZSk7XG4gICAgfVxuICB9XG5cblxuICBmaW5hbFF1ZXJ5KCkge1xuICAgIHRoaXMucXVlcnkgPSBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2UuQVBJX1VSTCArXG4gICAgICAgICAgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLmV4dGVuZGVkU2VhcmNoICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zZWxlY3RlZFJlc291cmNlKSArXG4gICAgICAgICAgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLmV4dGVuZGVkUHJvcGVydHkgK1xuICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnNlbGVjdGVkUHJvcGVydHkpICtcbiAgICAgICAgICBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2UuY29tcGFyZU9wZXJhdG9yICtcbiAgICAgICAgICB0aGlzLmJvb2xPcGVyYXRvciArXG4gICAgICAgICAgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLnNlYXJjaHZhbCArXG4gICAgICAgICAgdGhpcy5zZWFyY2hGb3JWYWw7XG4gICAgLy9jb25zb2xlLmxvZyhcbiAgICAgIC8vJ0ZpbmFsIGV4dGVuZGVkIHNlYXJjaCBVUmw6ICcgKyB0aGlzLnF1ZXJ5KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnF1ZXJ5KVxuICAgICAgLm1hcChcbiAgICAgICAgKGxhbWJkYTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gbGFtYmRhLmpzb24oKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICByZXR1cm4gZGF0YS5zdWJqZWN0cztcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnNlYXJjaFJlc3VsdCA9IHJlc3BvbnNlKTtcbiAgfVxuXG4gIGluY3JlYXNlTnVtYmVyT2ZDb21wb25lbnRzKCkge1xuICAgIHRoaXMubnVtYmVyT2ZDb21wb25lbnRzICs9IDE7XG4gICAgY29uc29sZS5sb2codGhpcy5udW1iZXJPZkNvbXBvbmVudHMpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLmFycmF5U2l6ZSk7XG4gIH1cblxuICBpbmNyZWFzZUFycmF5RWxlbWVudCgpIHtcbiAgICB0aGlzLmFycmF5U2l6ZSA9IHRoaXMuYXJyYXlbdGhpcy5hcnJheS5sZW5ndGggLSAxIF07XG4gICAgdGhpcy5hcnJheVNpemUgKz0gMTtcbiAgICB0aGlzLmFycmF5LnB1c2godGhpcy5hcnJheVNpemUpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlTaXplKTtcbiAgfVxuXG4gIHVwZGF0ZVF1ZXJ5U2V0KHByb3BlcnR5VHJpcGxlOiBBcnJheTxhbnk+KSB7XG4gICAgdGhpcy5rID0gMDtcbiAgICAvLyBDYXNlOiBzZXRPZkFsbFF1ZXJpZXMgaXQgdG90YWxseSBlbXB0eTpcbiAgICBjb25zb2xlLmxvZygnUHJvcGVydHlUcmlwbGU6ICcgKyBwcm9wZXJ0eVRyaXBsZSk7XG4gICAgY29uc29sZS5sb2coJ1Jlc291cmNlOiAnICsgdGhpcy5zZWxlY3RlZFJlc291cmNlKTtcbiAgICB0aGlzLm1hcE9mQWxsUXVlcmllcy5zZXQoXG4gICAgICBwcm9wZXJ0eVRyaXBsZVswXS50b1N0cmluZygpICsgcHJvcGVydHlUcmlwbGVbMV0udG9TdHJpbmcoKSwgW1xuICAgICAgICBwcm9wZXJ0eVRyaXBsZVsyXSwgW1xuICAgICAgICAgIHByb3BlcnR5VHJpcGxlWzNdLCBwcm9wZXJ0eVRyaXBsZVs0XVxuICAgICAgICBdXG4gICAgICBdXG4gICAgKTtcbiAgICB0aGlzLnN0ciA9IEpTT04uc3RyaW5naWZ5KHRoaXMubWFwT2ZBbGxRdWVyaWVzLCBudWxsLCA0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0cik7XG4gICAgLy9GaW5hbCBsaXN0IG9mIFF1ZXJpZXM6XG4gICAgdGhpcy5rZXlzID0gQXJyYXkuZnJvbSh0aGlzLm1hcE9mQWxsUXVlcmllcy5rZXlzKCkpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMua2V5cyk7XG4gICAgdGhpcy5tYXBPZkFsbFF1ZXJpZXMuZm9yRWFjaChcbiAgICAgIHZhbHVlID0+IHtcbiAgICAgICAgaWYodGhpcy5rZXlzW3RoaXMua11bMV0gPT09ICcxJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgZmlyc3QgcHJvcGVydHknKTtcbiAgICAgICAgICB0aGlzLmZpbmFsUXVlcnlBcnJheVt0aGlzLmtleXNbdGhpcy5rXVswXSAtIDFdID1cbiAgICAgICAgICAgIGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5BUElfVVJMXG4gICAgICAgICAgICArIGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5leHRlbmRlZFNlYXJjaFxuICAgICAgICAgICAgKyBlbmNvZGVVUklDb21wb25lbnQocHJvcGVydHlUcmlwbGVbNV0pXG4gICAgICAgICAgICArIGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5leHRlbmRlZFByb3BlcnR5XG4gICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVswXSlcbiAgICAgICAgICAgICsgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLmNvbXBhcmVPcGVyYXRvclxuICAgICAgICAgICAgKyB2YWx1ZVsxXVswXVxuICAgICAgICAgICAgKyBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2Uuc2VhcmNodmFsXG4gICAgICAgICAgICArIHZhbHVlWzFdWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQgYWRkaXRpb25hbCBwcm9wZXJ0eScpO1xuICAgICAgICAgIHRoaXMuZmluYWxRdWVyeUFycmF5W3RoaXMua2V5c1t0aGlzLmtdWzBdIC0gMV1cbiAgICAgICAgICAgICs9IGdsb2JhbFNlYXJjaFZhcmlhYmxlU2VydmljZS5leHRlbmRlZFByb3BlcnR5XG4gICAgICAgICAgICArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZVswXSlcbiAgICAgICAgICAgICsgZ2xvYmFsU2VhcmNoVmFyaWFibGVTZXJ2aWNlLmNvbXBhcmVPcGVyYXRvclxuICAgICAgICAgICAgKyB2YWx1ZVsxXVswXVxuICAgICAgICAgICAgKyBnbG9iYWxTZWFyY2hWYXJpYWJsZVNlcnZpY2Uuc2VhcmNodmFsXG4gICAgICAgICAgICArIHZhbHVlWzFdWzFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaysrO1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVswXSk7XG4gICAgICAgIGZvcih0aGlzLmkgPSAwOyB0aGlzLmkgPCB2YWx1ZVsxXS5sZW5ndGg7IHRoaXMuaSsrKSB7XG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWVbMV1bdGhpcy5pXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gIH1cblxuICBleGVjdXRlRmluYWxRdWVyaWVzKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmluYWxRdWVyeUFycmF5KTtcbiAgICBmb3IodGhpcy5pID0gMDsgdGhpcy5pIDwgdGhpcy5maW5hbFF1ZXJ5QXJyYXkubGVuZ3RoOyB0aGlzLmkgKyspIHtcbiAgICAgIHRoaXMucGVyZm9ybVF1ZXJ5KHRoaXMuZmluYWxRdWVyeUFycmF5W3RoaXMuaV0pO1xuICAgIH1cbiAgfVxuICBwZXJmb3JtUXVlcnkocXVlcnk6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHF1ZXJ5KVxuICAgICAgLm1hcChcbiAgICAgICAgKGxhbWJkYTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhID0gbGFtYmRhLmpzb24oKTtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIHRoaXMuayA9IDA7XG4gICAgICAgICAgaWYoZGF0YS5zdWJqZWN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZih0aGlzLmFsbFNlYXJjaFJlc3VsdHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB0aGlzLmFsbFNlYXJjaFJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoUmVzdWx0cy5wdXNoLmFwcGx5KHRoaXMuYWxsU2VhcmNoUmVzdWx0cyxkYXRhLnN1YmplY3RzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5hbGxTZWFyY2hSZXN1bHRzKTtcbiAgICAgICAgICByZXR1cm4gZGF0YS5zdWJqZWN0cztcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShyZXNwb25zZSA9PiB0aGlzLnNlYXJjaFJlc3VsdCA9IHJlc3BvbnNlKTtcbiAgfVxuXG59XG4iXX0=
