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
exports.Nfl = exports.SeasonType = void 0;
var sportradar_1 = require("../sportradar");
var shared_1 = require("./shared");
var SeasonType;
(function (SeasonType) {
    SeasonType["REG"] = "REG";
    SeasonType["PRE"] = "PRE";
    SeasonType["POST"] = "PST";
})(SeasonType = exports.SeasonType || (exports.SeasonType = {}));
var Nfl = /** @class */ (function (_super) {
    __extends(Nfl, _super);
    function Nfl(nflDraftSettings) {
        var _a, _b;
        var _this = _super.call(this, {
            apiKey: nflDraftSettings.apiKey,
            format: nflDraftSettings.format,
            requestDelayTime: nflDraftSettings.requestDelayTime,
            requestTimeout: nflDraftSettings.requestTimeout
        }) || this;
        _this.accessLevel = (_a = nflDraftSettings.accessLevel) !== null && _a !== void 0 ? _a : 'trial';
        _this.apiKey = nflDraftSettings.apiKey;
        _this.language = (_b = nflDraftSettings.language) !== null && _b !== void 0 ? _b : 'en';
        _this.prefix = "nfl/official/" + _this.accessLevel + "/v" + shared_1.Defaults.version.nfl + "/" + _this.language + "/";
        return _this;
    }
    Nfl.prototype.getDailyChangeLog = function (year, month, day) {
        return this.getRequest(this.prefix + "league/" + year + "/" + month + "/" + day + "/changes");
    };
    Nfl.prototype.getGameBoxscore = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/boxscore");
    };
    Nfl.prototype.getGameRoster = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/roster");
    };
    Nfl.prototype.getGameStatistics = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/statistics");
    };
    Nfl.prototype.getLeagueHierarchy = function () {
        return this.getRequest(this.prefix + "league/hierarchy");
    };
    Nfl.prototype.getPlayByPlay = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/pbp");
    };
    Nfl.prototype.getPlayerProfile = function (playerId) {
        return this.getRequest(this.prefix + "players/" + playerId + "/profile");
    };
    Nfl.prototype.getPostgameStandings = function (year, seasonType) {
        return this.getRequest(this.prefix + "seasons/" + year + "/" + seasonType + "/standings/season");
    };
    Nfl.prototype.getSeasonSchedule = function (year, seasonType) {
        return this.getRequest(this.prefix + "games/" + year + "/" + seasonType + "/schedule");
    };
    Nfl.prototype.getSeasonStatistics = function (year, seasonType, teamId) {
        return this.getRequest(this.prefix + "games/" + year + "/" + seasonType + "/teams/" + teamId + "/statistics");
    };
    Nfl.prototype.getSeasons = function () {
        return this.getRequest(this.prefix + "league/seasons");
    };
    Nfl.prototype.getTeamProfile = function (teamId) {
        return this.getRequest(this.prefix + "teams/" + teamId + "/profile");
    };
    Nfl.prototype.getTeamRoster = function (teamId) {
        return this.getRequest(this.prefix + "team/" + teamId + "/full_roster");
    };
    Nfl.prototype.getWeeklyDepthCharts = function (year, seasonType, week) {
        return this.getRequest(this.prefix + "seasons/" + year + "/" + seasonType + "/" + week + "/depth_charts");
    };
    Nfl.prototype.getWeeklyInjuries = function (year, seasonType, week) {
        return this.getRequest(this.prefix + "seasons/" + year + "/" + seasonType + "/" + week + "/injuries");
    };
    Nfl.prototype.getWeeklySchedule = function (year, seasonType, week) {
        return this.getRequest(this.prefix + "seasons/" + year + "/" + seasonType + "/" + week + "/schedule");
    };
    return Nfl;
}(sportradar_1.Sportradar));
exports.Nfl = Nfl;
