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
exports.NcaaMB = exports.RankingsType = exports.SeasonType = void 0;
var sportradar_1 = require("../sportradar");
var shared_1 = require("./shared");
var SeasonType;
(function (SeasonType) {
    SeasonType["REG"] = "REG";
    SeasonType["CONF"] = "CT";
    SeasonType["POST"] = "PST";
})(SeasonType = exports.SeasonType || (exports.SeasonType = {}));
var RankingsType;
(function (RankingsType) {
    RankingsType["AP"] = "AP";
    RankingsType["US"] = "US";
})(RankingsType = exports.RankingsType || (exports.RankingsType = {}));
var NcaaMB = /** @class */ (function (_super) {
    __extends(NcaaMB, _super);
    function NcaaMB(ncaaMBDraftSettings) {
        var _a, _b;
        var _this = _super.call(this, {
            apiKey: ncaaMBDraftSettings.apiKey,
            format: ncaaMBDraftSettings.format,
            requestDelayTime: ncaaMBDraftSettings.requestDelayTime,
            requestTimeout: ncaaMBDraftSettings.requestTimeout
        }) || this;
        _this.accessLevel = (_a = ncaaMBDraftSettings.accessLevel) !== null && _a !== void 0 ? _a : 'trial';
        _this.apiKey = ncaaMBDraftSettings.apiKey;
        _this.language = (_b = ncaaMBDraftSettings.language) !== null && _b !== void 0 ? _b : 'en';
        _this.prefix = "ncaamb/" + _this.accessLevel + "/v" + shared_1.Defaults.version.ncaamb + "/" + _this.language + "/";
        return _this;
    }
    NcaaMB.prototype.getDailyChangeLog = function (year, month, day) {
        return this.getRequest(this.prefix + "league/" + year + "/" + month + "/" + day + "/changes");
    };
    NcaaMB.prototype.getDailySchedule = function (year, month, day) {
        return this.getRequest(this.prefix + "games/" + year + "/" + month + "/" + day + "/schedule");
    };
    NcaaMB.prototype.getGameBoxscore = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/boxscore");
    };
    NcaaMB.prototype.getGameSummary = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/summary");
    };
    NcaaMB.prototype.getLeagueHierarchy = function () {
        return this.getRequest(this.prefix + "league/hierarchy");
    };
    NcaaMB.prototype.getLeagueLeaders = function (seasonYear, seasonType, conferenceId) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/" + conferenceId + "/leaders");
    };
    NcaaMB.prototype.getPlayByPlay = function (gameId) {
        return this.getRequest(this.prefix + "games/" + gameId + "/pbp");
    };
    NcaaMB.prototype.getPlayerProfile = function (playerId) {
        return this.getRequest(this.prefix + "players/" + playerId + "/profile");
    };
    NcaaMB.prototype.getRankings = function (seasonYear, rankingsType) {
        return this.getRequest(this.prefix + "polls/" + rankingsType + "/" + seasonYear + "/rankings");
    };
    NcaaMB.prototype.getRankingsByWeek = function (seasonYear, rankingsType, week) {
        return this.getRequest(this.prefix + "polls/" + rankingsType + "/" + seasonYear + "/" + week + "/rankings");
    };
    NcaaMB.prototype.getRpiRankings = function (seasonYear) {
        return this.getRequest(this.prefix + "rpi/" + seasonYear + "/rankings");
    };
    NcaaMB.prototype.getSchedule = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "games/" + seasonYear + "/" + seasonType + "/schedule");
    };
    NcaaMB.prototype.getSeasonalStatisticsSeasonToDate = function (seasonYear, seasonType, teamId) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/teams/" + teamId + "/statistics");
    };
    NcaaMB.prototype.getSeasons = function () {
        return this.getRequest("seasons");
    };
    NcaaMB.prototype.getStandings = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "seasons/" + seasonYear + "/" + seasonType + "/standings");
    };
    NcaaMB.prototype.getTeamProfileRosters = function (teamId) {
        return this.getRequest(this.prefix + "teams/" + teamId + "/profile");
    };
    NcaaMB.prototype.getTournamentList = function (seasonYear, seasonType) {
        return this.getRequest(this.prefix + "tournaments/" + seasonYear + "/" + seasonType + "/schedule");
    };
    NcaaMB.prototype.getTournamentSchedule = function (tournamentId) {
        return this.getRequest(this.prefix + "tournaments/" + tournamentId + "/schedule");
    };
    NcaaMB.prototype.getTournamentStatistics = function (tournamentId, teamId) {
        return this.getRequest(this.prefix + "tournaments/" + tournamentId + "/teams/" + teamId + "/statistics");
    };
    NcaaMB.prototype.getTournamentSummary = function (tournamentId) {
        return this.getRequest(this.prefix + "tournaments/" + tournamentId + "/summary");
    };
    return NcaaMB;
}(sportradar_1.Sportradar));
exports.NcaaMB = NcaaMB;
