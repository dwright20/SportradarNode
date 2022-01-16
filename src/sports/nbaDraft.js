"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.NbaDraft = void 0;
var sportradar_1 = require("../sportradar");
var shared_1 = require("./shared");
var NbaDraft = /** @class */ (function (_super) {
    __extends(NbaDraft, _super);
    function NbaDraft(nbaDraftSettings) {
        var _a, _b;
        var _this = _super.call(this, {
            apiKey: nbaDraftSettings.apiKey,
            format: nbaDraftSettings.format,
            requestDelayTime: nbaDraftSettings.requestDelayTime,
            requestTimeout: nbaDraftSettings.requestTimeout
        }) || this;
        _this.accessLevel = (_a = nbaDraftSettings.accessLevel) !== null && _a !== void 0 ? _a : 'trial';
        _this.apiKey = nbaDraftSettings.apiKey;
        _this.language = (_b = nbaDraftSettings.language) !== null && _b !== void 0 ? _b : 'en';
        _this.prefix = "draft/nba/" + _this.accessLevel + "/v" + shared_1.Defaults.version.nbaDraft + "/" + _this.language + "/";
        return _this;
    }
    NbaDraft.prototype.getDraftSummary = function (year) {
        return this.getRequest("" + this.prefix + year + "/draft");
    };
    NbaDraft.prototype.getProspects = function (year) {
        return this.getRequest("" + this.prefix + year + "/prospects");
    };
    NbaDraft.prototype.getTeamDraftSummary = function (year, teamId) {
        return this.getRequest("" + this.prefix + year + "/teams/" + teamId + "/draft");
    };
    NbaDraft.prototype.getTopProspects = function (year) {
        return this.getRequest("" + this.prefix + year + "/top_prospects");
    };
    NbaDraft.prototype.getTrades = function (year) {
        return this.getRequest("" + this.prefix + year + "/trades");
    };
    return NbaDraft;
}(sportradar_1.Sportradar));
exports.NbaDraft = NbaDraft;
