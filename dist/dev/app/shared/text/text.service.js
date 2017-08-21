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
var Observable_1 = require("rxjs/Observable");
var env_config_1 = require("../config/env.config");
var TextService = (function () {
    function TextService(http) {
        this.http = http;
        this._knoraUrl = env_config_1.Config.API;
    }
    TextService._extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TextService._handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    TextService.prototype.getText = function (params) {
        return this.http
            .get(params.toString())
            .map(function (response) { return response.json().subjects; });
    };
    return TextService;
}());
TextService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TextService);
exports.TextService = TextService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGV4dC90ZXh0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBMkM7QUFDM0Msc0NBQStDO0FBQy9DLDhDQUE2QztBQUM3QyxtREFBOEM7QUFLOUMsSUFBYSxXQUFXO0lBc0J0QixxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFwQnRCLGNBQVMsR0FBRyxtQkFBTSxDQUFDLEdBQUcsQ0FBQztJQXFCL0IsQ0FBQztJQW5CYyx3QkFBWSxHQUEzQixVQUE0QixHQUFhO1FBQ3ZDLElBQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVjLHdCQUFZLEdBQTNCLFVBQTRCLEtBQXFCO1FBQy9DLElBQUksTUFBYyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxlQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxZQUFNLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxVQUFJLEdBQUssQ0FBQztRQUNoRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQU1ELDZCQUFPLEdBQVAsVUFBUSxNQUFvQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBSXRCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0F1QmUsV0FBSTtHQXRCbkIsV0FBVyxDQW9DdkI7QUFwQ1ksa0NBQVciLCJmaWxlIjoiYXBwL3NoYXJlZC90ZXh0L3RleHQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBTZWJhc3RpYW4gU2Now7xwYmFjaCAoc2ViYXN0aWFuLnNjaHVlcGJhY2hAdW5pYmFzLmNoKSBvbiA3LzEwLzE3LlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9lbnYuY29uZmlnJztcbmltcG9ydCB7IEtub3JhUmVxdWVzdCB9IGZyb20gJy4uL3V0aWxpdGllcy9rbm9yYS1hcGktcGFyYW1zJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGV4dFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX2tub3JhVXJsID0gQ29uZmlnLkFQSTtcblxuICBwcml2YXRlIHN0YXRpYyBfZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xuICAgIGNvbnN0IGJvZHkgPSByZXMuanNvbigpO1xuICAgIHJldHVybiBib2R5LmRhdGEgfHwge307XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBfaGFuZGxlRXJyb3IoZXJyb3I6IFJlc3BvbnNlIHwgYW55KSB7XG4gICAgbGV0IGVyck1zZzogc3RyaW5nO1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFJlc3BvbnNlKSB7XG4gICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8ICcnO1xuICAgICAgY29uc3QgZXJyID0gYm9keS5lcnJvciB8fCBKU09OLnN0cmluZ2lmeShib2R5KTtcbiAgICAgIGVyck1zZyA9IGAke2Vycm9yLnN0YXR1c30gLSAke2Vycm9yLnN0YXR1c1RleHQgfHwgJyd9ICR7ZXJyfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVyck1zZyA9IGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgY29uc29sZS5lcnJvcihlcnJNc2cpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVyck1zZyk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcbiAgfVxuXG5cbiAgZ2V0VGV4dChwYXJhbXM6IEtub3JhUmVxdWVzdCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQocGFyYW1zLnRvU3RyaW5nKCkpXG4gICAgICAvLy5tYXAocmVzcG9uc2UgPT4gPHN0cmluZ1tdPiByZXNwb25zZS5qc29uKClbMV0pXG4gICAgICAvLy5tYXAoRmFzc3VuZ0tvbnN0VGV4dFNlcnZpY2UuX2V4dHJhY3REYXRhKVxuICAgICAgLy8uY2F0Y2goRmFzc3VuZ0tvbnN0VGV4dFNlcnZpY2UuX2hhbmRsZUVycm9yKTtcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpLnN1YmplY3RzKTtcbiAgICAvLy5zdWJzY3JpYmUoKHJlczogQXJyYXk8YW55PikgPT4gdGhpcy5wb2VtcyA9IHJlcyk7XG4gIH1cblxufVxuIl19
