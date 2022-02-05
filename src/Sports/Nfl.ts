import { Sportradar } from '../sportradar';
import { Defaults, SportConstructor } from './shared';

export enum SeasonType {
  REG = 'REG',
  PRE = 'PRE',
  POST = 'PST',
}

export class Nfl extends Sportradar {
  prefix: string;
  accessLevel: string;
  language: string;
  constructor(nflDraftSettings: SportConstructor) {
    super({
      apiKey: nflDraftSettings.apiKey,
      format: nflDraftSettings.format,
      requestDelayTime: nflDraftSettings.requestDelayTime,
      requestTimeout: nflDraftSettings.requestTimeout,
    });
    this.accessLevel = nflDraftSettings.accessLevel ?? 'trial';
    this.apiKey = nflDraftSettings.apiKey;
    this.language = nflDraftSettings.language ?? 'en';
    this.prefix = `nfl/official/${this.accessLevel}/v${Defaults.version.nfl}/${this.language}/`;
  }
  /**
   * @param {string} month Month in 2 digit format (MM)
   * @param {string} day Day in 2 digit format (DD)
   * @memberof Nfl
   */
  getDailyChangeLog(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/changes`);
  }
  /**
   * @param {string} gameId
   * @memberof Nfl
   */
  getGameBoxscore(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/boxscore`);
  }
  /**
   * @param {string} gameId
   * @memberof Nfl
   */
  getGameRoster(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/roster`);
  }
  /**
   * @param {string} gameId
   * @memberof Nfl
   */
  getGameStatistics(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/statistics`);
  }
  /**
   * @memberof Nfl
   */
  getLeagueHierarchy() {
    return this.getRequest(`${this.prefix}league/hierarchy`);
  }
  /**
   * @param {string} gameId
   * @memberof Nfl
   */
  getPlayByPlay(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/pbp`);
  }

  /**
   * @param {string} playerId
   * @memberof Nfl
   */
  getPlayerProfile(playerId: string) {
    return this.getRequest(`${this.prefix}players/${playerId}/profile`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {NflSeasonType} seasonType
   * @memberof Nfl
   */
  getPostgameStandings(year: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${year}/${seasonType}/standings/season`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {NflSeasonType} seasonType
   * @memberof Nfl
   */
  getSeasonSchedule(year: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}games/${year}/${seasonType}/schedule`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {NflSeasonType} seasonType
   * @param {string} teamId
   * @memberof Nfl
   */
  getSeasonStatistics(year: string, seasonType: SeasonType, teamId: string) {
    return this.getRequest(`${this.prefix}games/${year}/${seasonType}/teams/${teamId}/statistics`);
  }
  /**
   * @memberof Nfl
   */
  getSeasons() {
    return this.getRequest(`${this.prefix}league/seasons`);
  }
  /**
   * @param {string} teamId
   * @memberof Nfl
   */
  getTeamProfile(teamId: string) {
    return this.getRequest(`${this.prefix}teams/${teamId}/profile`);
  }
  /**
   * @param {string} teamId
   * @memberof Nfl
   */
  getTeamRoster(teamId: string) {
    return this.getRequest(`${this.prefix}team/${teamId}/full_roster`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {NflSeasonType} seasonType
   * @param {number} week
   * @memberof Nfl
   */
  getWeeklyDepthCharts(year: string, seasonType: SeasonType, week: number) {
    return this.getRequest(`${this.prefix}seasons/${year}/${seasonType}/${week}/depth_charts`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {NflSeasonType} seasonType
   * @param {number} week
   * @memberof Nfl
   */
  getWeeklyInjuries(year: string, seasonType: SeasonType, week: number) {
    return this.getRequest(`${this.prefix}seasons/${year}/${seasonType}/${week}/injuries`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {NflSeasonType} seasonType
   * @param {number} week
   * @memberof Nfl
   */
  getWeeklySchedule(year: string, seasonType: SeasonType, week: number) {
    return this.getRequest(`${this.prefix}seasons/${year}/${seasonType}/${week}/schedule`);
  }
}
