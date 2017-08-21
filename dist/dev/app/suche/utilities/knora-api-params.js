"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var env_config_1 = require("../config/env.config");
var KnoraRequest = (function () {
    function KnoraRequest() {
        this._host = env_config_1.Config.API;
    }
    Object.defineProperty(KnoraRequest.prototype, "filterByRestype", {
        set: function (v) {
            this._filterByRestype = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "filterByProject", {
        set: function (v) {
            this._filterByProject = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "showNRows", {
        set: function (v) {
            this._showNRows = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "startAt", {
        set: function (v) {
            this._startAt = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KnoraRequest.prototype, "host", {
        set: function (v) {
            this._host = v;
        },
        enumerable: true,
        configurable: true
    });
    return KnoraRequest;
}());
exports.KnoraRequest = KnoraRequest;
var KnoraProperty = (function () {
    function KnoraProperty(propertyId, compop, searchval) {
        this.propertyId = propertyId;
        this.compop = compop;
        this.searchval = searchval;
        this._propertyId = propertyId;
        this._compop = compop;
        this._searchval = searchval;
    }
    KnoraProperty.prototype.toString = function () {
        return 'property_id=' + encodeURIComponent(this._propertyId) +
            '&compop=' + encodeURIComponent(this._compop) +
            '&searchval=' + encodeURIComponent(this._searchval);
    };
    return KnoraProperty;
}());
exports.KnoraProperty = KnoraProperty;
var FulltextSearch = (function (_super) {
    __extends(FulltextSearch, _super);
    function FulltextSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._searchstring = '';
        _this._searchtype = 'fulltext';
        _this._filterByRestype = '';
        _this._filterByProject = '';
        _this._showNRows = 0;
        _this._startAt = 0;
        return _this;
    }
    Object.defineProperty(FulltextSearch.prototype, "searchstring", {
        set: function (v) {
            this._searchstring = v;
        },
        enumerable: true,
        configurable: true
    });
    FulltextSearch.prototype.toString = function () {
        return this._host + this._searchstring +
            '?searchtype=' + this._searchtype +
            (this._filterByRestype.length > 0 ? '&filter_by_restype=' + encodeURIComponent(this._filterByRestype) : '') +
            (this._filterByProject.length > 0 ? '&filter_by_project=' + encodeURIComponent(this._filterByProject) : '') +
            (this._showNRows > 0 ? '&show_nrows=' + encodeURIComponent(this._showNRows.toString()) : '') +
            (this._startAt > 0 ? '&start_at=' + encodeURIComponent(this._startAt.toString()) : '');
    };
    return FulltextSearch;
}(KnoraRequest));
exports.FulltextSearch = FulltextSearch;
var ExtendedSearch = (function (_super) {
    __extends(ExtendedSearch, _super);
    function ExtendedSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._searchtype = 'extended';
        _this._filterByRestype = '';
        _this._filterByProject = '';
        _this._filterByOwner = '';
        _this._property = [];
        _this._showNRows = 0;
        _this._startAt = 0;
        return _this;
    }
    Object.defineProperty(ExtendedSearch.prototype, "filterByOwner", {
        set: function (v) {
            this._filterByOwner = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExtendedSearch.prototype, "property", {
        set: function (v) {
            this._property.push(v);
        },
        enumerable: true,
        configurable: true
    });
    ExtendedSearch.prototype.toString = function () {
        var propString = '';
        if (this._property.length > 0) {
            for (var _i = 0, _a = this._property; _i < _a.length; _i++) {
                var e = _a[_i];
                propString += '&';
                propString += e.toString();
            }
        }
        return this._host +
            '?searchtype=' + this._searchtype +
            (this._filterByRestype.length > 0 ? '&filter_by_restype=' + encodeURIComponent(this._filterByRestype) : '') +
            (this._filterByProject.length > 0 ? '&filter_by_project=' + encodeURIComponent(this._filterByProject) : '') +
            (this._filterByOwner.length > 0 ? '&filter_by_owner=' + encodeURIComponent(this._filterByOwner) : '') +
            propString +
            (this._showNRows > 0 ? '&show_nrows=' + encodeURIComponent(this._showNRows.toString()) : '') +
            (this._startAt > 0 ? '&start_at=' + encodeURIComponent(this._startAt.toString()) : '');
    };
    return ExtendedSearch;
}(KnoraRequest));
exports.ExtendedSearch = ExtendedSearch;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zdWNoZS91dGlsaXRpZXMva25vcmEtYXBpLXBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxtREFBOEM7QUFTOUM7SUFBQTtRQUNZLFVBQUssR0FBRyxtQkFBTSxDQUFDLEdBQUcsQ0FBQztJQStCL0IsQ0FBQztJQW5CQyxzQkFBSSx5Q0FBZTthQUFuQixVQUFvQixDQUFTO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx5Q0FBZTthQUFuQixVQUFvQixDQUFTO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtQ0FBUzthQUFiLFVBQWMsQ0FBUztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGlDQUFPO2FBQVgsVUFBWSxDQUFTO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksOEJBQUk7YUFBUixVQUFTLENBQVM7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFDSCxtQkFBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ3FCLG9DQUFZO0FBcUNsQztJQWdCRSx1QkFBcUIsVUFBa0IsRUFBVyxNQUFjLEVBQVcsU0FBaUI7UUFBdkUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUFXLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVyxjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQzFGLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzlCLENBQUM7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QUNSLFVBQVUsSUFBSSxHQUFHLENBQUM7Z0JBQ2xCLFVBQVUsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDNUI7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ2YsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2pDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQzNHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckcsVUFBVTtZQUNWLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsY0FBYyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDNUYsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxZQUFZLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFSCxxQkFBQztBQUFELENBeENBLEFBd0NDLENBeENtQyxZQUFZLEdBd0MvQztBQXhDWSx3Q0FBYyIsImZpbGUiOiJhcHAvc3VjaGUvdXRpbGl0aWVzL2tub3JhLWFwaS1wYXJhbXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvZW52LmNvbmZpZyc7XG5cbi8qKlxuICogQ3JlYXRlZCBieSBTZWJhc3RpYW4gU2Now7xwYmFjaCAoc2ViYXN0aWFuLnNjaHVlcGJhY2hAdW5pYmFzLmNoKSBvbiA3LzExLzE3LlxuICovXG5cbi8qKlxuICogQmFzZSBhYnN0cmFjdCBjbGFzcyBmb3IgY29uZmlndXJpbmcgYSByZXF1ZXN0IHRvIEtub3JhIEFQSVxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgS25vcmFSZXF1ZXN0IHtcbiAgcHJvdGVjdGVkIF9ob3N0ID0gQ29uZmlnLkFQSTtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IF9zZWFyY2h0eXBlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfZmlsdGVyQnlSZXN0eXBlOiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfZmlsdGVyQnlQcm9qZWN0OiBzdHJpbmc7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfc2hvd05Sb3dzOiBudW1iZXI7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBfc3RhcnRBdDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXJpYWxpc2VzIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcblxuICBzZXQgZmlsdGVyQnlSZXN0eXBlKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbHRlckJ5UmVzdHlwZSA9IHY7XG4gIH1cblxuICBzZXQgZmlsdGVyQnlQcm9qZWN0KHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbHRlckJ5UHJvamVjdCA9IHY7XG4gIH1cblxuICBzZXQgc2hvd05Sb3dzKHY6IG51bWJlcikge1xuICAgIHRoaXMuX3Nob3dOUm93cyA9IHY7XG4gIH1cblxuICBzZXQgc3RhcnRBdCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zdGFydEF0ID0gdjtcbiAgfVxuXG4gIHNldCBob3N0KHY6IHN0cmluZykge1xuICAgIHRoaXMuX2hvc3QgPSB2O1xuICB9XG59XG5cbi8qKlxuICogSGVscGVyIGNsYXNzIGZvciBkZWZpbmluZyBhIHByb3BlcnR5IHRyaXBsZSBhcyByZXF1ZXN0ZWQgYnkgS25vcmEgQVBJXG4gKi9cbmV4cG9ydCBjbGFzcyBLbm9yYVByb3BlcnR5IHtcblxuICBwcml2YXRlIF9wcm9wZXJ0eUlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2NvbXBvcDogc3RyaW5nO1xuICBwcml2YXRlIF9zZWFyY2h2YWw6IHN0cmluZztcblxuICAvKipcbiAgICogU2VyaWFsaXNlcyBwcm9wZXJ0eVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdwcm9wZXJ0eV9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3Byb3BlcnR5SWQpICtcbiAgICAgICcmY29tcG9wPScgKyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5fY29tcG9wKSArXG4gICAgICAnJnNlYXJjaHZhbD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3NlYXJjaHZhbCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBwcm9wZXJ0eUlkOiBzdHJpbmcsIHJlYWRvbmx5IGNvbXBvcDogc3RyaW5nLCByZWFkb25seSBzZWFyY2h2YWw6IHN0cmluZykge1xuICAgIHRoaXMuX3Byb3BlcnR5SWQgPSBwcm9wZXJ0eUlkO1xuICAgIHRoaXMuX2NvbXBvcCA9IGNvbXBvcDtcbiAgICB0aGlzLl9zZWFyY2h2YWwgPSBzZWFyY2h2YWw7XG4gIH1cblxufVxuXG4vKipcbiAqIEhlbHBlciBjbGFzcyBmb3IgY29uZmlndXJpbmcgYSBmdWxsdGV4dCBzZWFyY2ggcmVxdWVzdCB0byBLbm9yYSBBUElcbiAqL1xuZXhwb3J0IGNsYXNzIEZ1bGx0ZXh0U2VhcmNoIGV4dGVuZHMgS25vcmFSZXF1ZXN0IHtcbiAgc2V0IHNlYXJjaHN0cmluZyh2OiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zZWFyY2hzdHJpbmcgPSB2O1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZWFyY2hzdHJpbmc6IHN0cmluZyA9ICcnO1xuICBwcm90ZWN0ZWQgX3NlYXJjaHR5cGUgPSAnZnVsbHRleHQnO1xuICBwcm90ZWN0ZWQgX2ZpbHRlckJ5UmVzdHlwZTogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfZmlsdGVyQnlQcm9qZWN0OiBzdHJpbmcgPSAnJztcbiAgcHJvdGVjdGVkIF9zaG93TlJvd3M6IG51bWJlciA9IDA7XG4gIHByb3RlY3RlZCBfc3RhcnRBdDogbnVtYmVyID0gMDtcblxuICAvKipcbiAgICogU2VyaWFsaXNlcyByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEZvcm1hdHRlZCBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5faG9zdCArIHRoaXMuX3NlYXJjaHN0cmluZyArXG4gICAgICAnP3NlYXJjaHR5cGU9JyArIHRoaXMuX3NlYXJjaHR5cGUgK1xuICAgICAgKHRoaXMuX2ZpbHRlckJ5UmVzdHlwZS5sZW5ndGggPiAwID8gJyZmaWx0ZXJfYnlfcmVzdHlwZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2ZpbHRlckJ5UmVzdHlwZSkgOiAnJykgK1xuICAgICAgKHRoaXMuX2ZpbHRlckJ5UHJvamVjdC5sZW5ndGggPiAwID8gJyZmaWx0ZXJfYnlfcHJvamVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2ZpbHRlckJ5UHJvamVjdCkgOiAnJykgK1xuICAgICAgKHRoaXMuX3Nob3dOUm93cyA+IDAgPyAnJnNob3dfbnJvd3M9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9zaG93TlJvd3MudG9TdHJpbmcoKSkgOiAnJykgK1xuICAgICAgKHRoaXMuX3N0YXJ0QXQgPiAwID8gJyZzdGFydF9hdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3N0YXJ0QXQudG9TdHJpbmcoKSkgOiAnJyk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgY29uZmlndXJpbmcgYW4gZXh0ZW5kZWQgc2VhcmNoIHJlcXVlc3QgdG8gS25vcmEgQVBJLlxuICovXG5leHBvcnQgY2xhc3MgRXh0ZW5kZWRTZWFyY2ggZXh0ZW5kcyBLbm9yYVJlcXVlc3Qge1xuXG4gIHNldCBmaWx0ZXJCeU93bmVyKHY6IHN0cmluZykge1xuICAgIHRoaXMuX2ZpbHRlckJ5T3duZXIgPSB2O1xuICB9XG5cbiAgc2V0IHByb3BlcnR5KHY6IEtub3JhUHJvcGVydHkpIHtcbiAgICB0aGlzLl9wcm9wZXJ0eS5wdXNoKHYpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZWFyY2h0eXBlID0gJ2V4dGVuZGVkJztcbiAgcHJvdGVjdGVkIF9maWx0ZXJCeVJlc3R5cGU6IHN0cmluZyA9ICcnO1xuICBwcm90ZWN0ZWQgX2ZpbHRlckJ5UHJvamVjdDogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfZmlsdGVyQnlPd25lcjogc3RyaW5nID0gJyc7XG4gIHByb3RlY3RlZCBfcHJvcGVydHk6IEFycmF5PEtub3JhUHJvcGVydHk+ID0gW107XG4gIHByb3RlY3RlZCBfc2hvd05Sb3dzOiBudW1iZXIgPSAwO1xuICBwcm90ZWN0ZWQgX3N0YXJ0QXQ6IG51bWJlciA9IDA7XG5cbiAgLyoqXG4gICAqIFNlcmlhbGlzZXMgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBGb3JtYXR0ZWQgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgbGV0IHByb3BTdHJpbmc6IHN0cmluZyA9ICcnO1xuICAgIGlmICh0aGlzLl9wcm9wZXJ0eS5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBlIG9mIHRoaXMuX3Byb3BlcnR5KSB7XG4gICAgICAgIHByb3BTdHJpbmcgKz0gJyYnO1xuICAgICAgICBwcm9wU3RyaW5nICs9IGUudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2hvc3QgK1xuICAgICAgJz9zZWFyY2h0eXBlPScgKyB0aGlzLl9zZWFyY2h0eXBlICtcbiAgICAgICh0aGlzLl9maWx0ZXJCeVJlc3R5cGUubGVuZ3RoID4gMCA/ICcmZmlsdGVyX2J5X3Jlc3R5cGU9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9maWx0ZXJCeVJlc3R5cGUpIDogJycpICtcbiAgICAgICh0aGlzLl9maWx0ZXJCeVByb2plY3QubGVuZ3RoID4gMCA/ICcmZmlsdGVyX2J5X3Byb2plY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9maWx0ZXJCeVByb2plY3QpIDogJycpICtcbiAgICAgICh0aGlzLl9maWx0ZXJCeU93bmVyLmxlbmd0aCA+IDAgPyAnJmZpbHRlcl9ieV9vd25lcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX2ZpbHRlckJ5T3duZXIpIDogJycpICtcbiAgICAgIHByb3BTdHJpbmcgK1xuICAgICAgKHRoaXMuX3Nob3dOUm93cyA+IDAgPyAnJnNob3dfbnJvd3M9JyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9zaG93TlJvd3MudG9TdHJpbmcoKSkgOiAnJykgK1xuICAgICAgKHRoaXMuX3N0YXJ0QXQgPiAwID8gJyZzdGFydF9hdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3N0YXJ0QXQudG9TdHJpbmcoKSkgOiAnJyk7XG4gIH1cblxufVxuIl19
