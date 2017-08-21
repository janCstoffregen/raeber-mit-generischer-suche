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
var DynamicPaging = (function () {
    function DynamicPaging(http) {
        this.http = http;
        this._offset = 0;
        this._size = 20;
    }
    Object.defineProperty(DynamicPaging.prototype, "size", {
        get: function () {
            return this._size;
        },
        set: function (v) {
            this._size = v;
        },
        enumerable: true,
        configurable: true
    });
    DynamicPaging.prototype.loadText = function (req) {
        req.showNRows = this._size;
        req.startAt = this._offset;
        this._offset = this._offset + this._size;
        return this.getText(req);
    };
    DynamicPaging.prototype.getText = function (params) {
        return this.http
            .get(params.toString())
            .map(function (response) { return response.json().subjects; });
    };
    return DynamicPaging;
}());
DynamicPaging = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DynamicPaging);
exports.DynamicPaging = DynamicPaging;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGV4dGdyaWQvcGFnaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxzQ0FBMkM7QUFFM0Msc0NBQXFDO0FBSXJDLElBQWEsYUFBYTtJQUl4Qix1QkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFIdEIsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxFQUFFLENBQUM7SUFHbkIsQ0FBQztJQUVELHNCQUFJLCtCQUFJO2FBQVI7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDO2FBRUQsVUFBUyxDQUFTO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7OztPQUpBO0lBTUQsZ0NBQVEsR0FBUixVQUFTLEdBQWlCO1FBQ3hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUMzQixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFPLEdBQVAsVUFBUSxNQUFvQjtRQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBNUJZLGFBQWE7SUFEekIsaUJBQVUsRUFBRTtxQ0FLZSxXQUFJO0dBSm5CLGFBQWEsQ0E0QnpCO0FBNUJZLHNDQUFhIiwiZmlsZSI6ImFwcC9zaGFyZWQvdGV4dGdyaWQvcGFnaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgU2ViYXN0aWFuIFNjaMO8cGJhY2ggKHNlYmFzdGlhbi5zY2h1ZXBiYWNoQHVuaWJhcy5jaCkgb24gNy8xMi8xNy5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEh0dHAgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IEtub3JhUmVxdWVzdCB9IGZyb20gJy4uL3V0aWxpdGllcy9rbm9yYS1hcGktcGFyYW1zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNQYWdpbmcge1xuICBwcml2YXRlIF9vZmZzZXQgPSAwO1xuICBwcml2YXRlIF9zaXplID0gMjA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7XG4gIH1cblxuICBnZXQgc2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgc2V0IHNpemUodjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHY7XG4gIH1cblxuICBsb2FkVGV4dChyZXE6IEtub3JhUmVxdWVzdCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuICAgIHJlcS5zaG93TlJvd3MgPSB0aGlzLl9zaXplO1xuICAgIHJlcS5zdGFydEF0ID0gdGhpcy5fb2Zmc2V0O1xuICAgIHRoaXMuX29mZnNldCA9IHRoaXMuX29mZnNldCArIHRoaXMuX3NpemU7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGV4dChyZXEpO1xuICB9XG5cbiAgZ2V0VGV4dChwYXJhbXM6IEtub3JhUmVxdWVzdCk6IE9ic2VydmFibGU8QXJyYXk8YW55Pj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQocGFyYW1zLnRvU3RyaW5nKCkpXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKS5zdWJqZWN0cyk7XG4gIH1cblxufVxuIl19
