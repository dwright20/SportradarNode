import { Sportradar } from '../sportradar';
import { Defaults, SportConstructor } from './shared';

export enum SeasonType {
  REG = 'REG',
  PLAYIN = 'PIT',
  POST = 'PST',
}

export class Nba extends Sportradar implements SportConstructor {
  prefix: string;
  accessLevel: string;
  language: string;
  constructor(nbaSettings: SportConstructor) {
    super({
      apiKey: nbaSettings.apiKey,
      format: nbaSettings.format,
      requestDelayTime: nbaSettings.requestDelayTime,
      requestTimeout: nbaSettings.requestTimeout,
    });
    this.accessLevel = nbaSettings.accessLevel ?? 'trial';
    this.apiKey = nbaSettings.apiKey;
    this.language = nbaSettings.language ?? 'en';
    this.prefix = `nba/${this.accessLevel}/v${Defaults.version.nba}/${this.language}/`;
  }

  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} month Month in 2 digit format (MM)
   * @param {string} day Day in 2 digit format (DD)
   * @memberof Nba
   */
  getDailyChangeLog(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/changes`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} month Month in 2 digit format (MM)
   * @param {string} day Day in 2 digit format (DD)
   * @memberof Nba
   */
  getDailySchedule(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}games/${year}/${month}/${day}/schedule`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} month Month in 2 digit format (MM)
   * @param {string} day Day in 2 digit format (DD)
   * @memberof Nba
   */
  getDailyTransfers(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/transfers`);
  }

  /**
   * @memberof Nba
   */
  getFreeAgents() {
    return this.getRequest(`${this.prefix}league/free_agents`);
  }

  /**
   * @param {string} gameId
   * @memberof Nba
   */
  getGameBoxscore(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/boxscore`);
  }
  /**
   * @param {string} gameId
   * @memberof Nba
   */
  getGameSummary(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/summary`);
  }
  /**
   * @memberof Nba
   */
  getInjuries() {
    return this.getRequest(`${this.prefix}league/injuries`);
  }
  /**
   * @memberof Nba
   */
  getLeagueHierarchy() {
    return this.getRequest(`${this.prefix}league/hierarchy`);
  }

  /**
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NbaSeasonType} seasonType
   * @memberof Nba
   */
  getLeagueLeaders(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/leaders`);
  }
  /**
   * @param {string} gameId
   * @memberof Nba
   */
  getPlayByPlay(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/pbp`);
  }

  /**
   * @param {string} playerId
   * @memberof Nba
   */
  getPlayerProfile(playerId: string) {
    return this.getRequest(`${this.prefix}players/${playerId}/profile`);
  }
  /**
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NbaSeasonType} seasonType
   * @memberof Nba
   */
  getRankings(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/rankings`);
  }
  /**
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NbaSeasonType} seasonType
   * @memberof Nba
   */
  getSchedule(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}games/${seasonYear}/${seasonType}/schedule`);
  }

  /**
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NbaSeasonType} seasonType
   * @param {string} teamId
   * @memberof Nba
   */
  getSeasonalStatisticsSeasonToDate(seasonYear: string, seasonType: SeasonType, teamId: string) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/teams/${teamId}/statistics`);
  }
  /**
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NbaSeasonType} seasonType
   * @memberof Nba
   */
  getSeriesSchedule(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}series/${seasonYear}/${seasonType}/schedule`);
  }

  /**
   * @param {string} seriesId
   * @param {string} teamId
   * @memberof Nba
   */
  getSeriesStatistics(seriesId: string, teamId: string) {
    return this.getRequest(`${this.prefix}series/${seriesId}/teams/${teamId}/statistics`);
  }
  /**
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NbaSeasonType} seasonType
   * @memberof Nba
   */
  getStandings(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/standings`);
  }

  /**
   * @param {string} teamId
   * @memberof Nba
   */
  getTeamProfileRosters(teamId: string) {
    return this.getRequest(`${this.prefix}teams/${teamId}/profile`);
  }
}
