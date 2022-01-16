"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.NflDraft = exports.NflSeasonType = exports.Nfl = exports.NcaaMBRankingsType = exports.NcaaMBSeasonType = exports.NcaaMB = exports.NbaDraft = exports.NbaSeasonType = exports.Nba = void 0;
var nba_1 = require("./nba");
__createBinding(exports, nba_1, "Nba");
__createBinding(exports, nba_1, "SeasonType", "NbaSeasonType");
var nbaDraft_1 = require("./nbaDraft");
__createBinding(exports, nbaDraft_1, "NbaDraft");
var ncaaMB_1 = require("./ncaaMB");
__createBinding(exports, ncaaMB_1, "NcaaMB");
__createBinding(exports, ncaaMB_1, "SeasonType", "NcaaMBSeasonType");
__createBinding(exports, ncaaMB_1, "RankingsType", "NcaaMBRankingsType");
var nfl_1 = require("./nfl");
__createBinding(exports, nfl_1, "Nfl");
__createBinding(exports, nfl_1, "SeasonType", "NflSeasonType");
var nflDraft_1 = require("./nflDraft");
__createBinding(exports, nflDraft_1, "NflDraft");
