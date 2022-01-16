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
exports.Nba = exports.SeasonType = void 0;
var sportradar_1 = require("../sportradar");
var shared_1 = require("./shared");
var SeasonType;
(function (SeasonType) {
    SeasonType["REG"] = "REG";
    SeasonType["PLAYIN"] = "PIT";
    SeasonType["POST"] = "PST";
})(SeasonType = exports.SeasonType || (exports.SeasonType = {}));
var Nba = /** @class */ (function (_super) {
    __extends(Nba, _super);
    function Nba(nbaSettings) {
        var _a, _b;
        var _this = _super.call(this, {
            apiKey: nbaSettings.apiKey,
            format: nbaSettings.format,
            requestDelayTime: nbaSettings.requestDelayTime,
            requestTimeout: nbaSettings.requestTimeout
        }) || this;
        _this.accessLevel = (_a = nbaSettings.accessLevel) !== null && _a !== void 0 ? _a : 'trial';
        _this.apiKey = nbaSettings.apiKey;
        _this.language = (_b = nbaSettings.language) !== null && _b !== void 0 ? _b : 'en';
        _this.prefix = "nba/" + _this.accessLevel + "/v" + shared_1.Defaults.version.nba + "/" + _this.language + "/";
        return _this;
    }
    Nba.prototype.getDailyChangeLog = function (year, month, day) {
        return this.getRequest(this.prefix + "league/" + year + "/" + month + "/" + day + "/changes");
    };
    Nba.prototype.getDailySchedule = function (year, month, day) {
        return this.getRequest(this.prefix + "games/" + year + "/" + month + "/" + day + "/schedule");
    };
    Nba.prototype.getDailyTransfers = function (year, month, day) {
        return this.getRequest(this.prefix + "league/" + year + "/" + month + "/" + day + "/transfers");
    };
    Nba.prototype.getFreeAgents = function () {
        return this.getRequest(this.prefix + "league/free_agents");
    };
    Nba.prototype.getGameBoxscore = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/boxscore");
    };
    Nba.prototype.getGameSummary = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/summary");
    };
    Nba.prototype.getInjuries = function () {
        return this.getRequest(this.prefix + "league/injuries");
    };
    Nba.prototype.getLeagueHierarchy = function () {
        return this.getRequest(this.prefix + "league/hierarchy");
    };
    Nba.prototype.getLeagueLeaders = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/leaders");
    };
    Nba.prototype.getPlayByPlay = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/pbp");
    };
    Nba.prototype.getPlayerProfile = function (playerId) {
        return this.getRequest(this.prefix + "players/" + playerId + "/profile");
    };
    Nba.prototype.getRankings = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/rankings");
    };
    Nba.prototype.getSchedule = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "games/" + seasonYear + "/" + seasonType + "/schedule");
    };
    Nba.prototype.getSeasonalStatisticsSeasonToDate = function (seasonYear, seasonType, teamId) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/teams/" + teamId + "/statistics");
    };
    Nba.prototype.getSeriesSchedule = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "series/" + seasonYear + "/" + seasonType + "/schedule");
    };
    Nba.prototype.getSeriesStatistics = function (seriesId, teamId) {
        return this.getRequest(this.prefix + "series/" + seriesId + "/teams/" + teamId + "/statistics");
    };
    Nba.prototype.getStandings = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/standings");
    };
    Nba.prototype.getTeamProfileRosters = function (teamId) {
        return this.getRequest(this.prefix + "teams/" + teamId + "/profile");
    };
    return Nba;
}(sportradar_1.Sportradar));
exports.Nba = Nba;
