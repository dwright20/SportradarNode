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

  getDailyChangeLog(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/changes`);
  }

  getDailySchedule(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}games/${year}/${month}/${day}/schedule`);
  }

  getDailyTransfers(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/transfers`);
  }

  getFreeAgents() {
    return this.getRequest(`${this.prefix}league/free_agents`);
  }

  getGameBoxscore(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/boxscore`);
  }

  getGameSummary(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/summary`);
  }

  getInjuries() {
    return this.getRequest(`${this.prefix}league/injuries`);
  }

  getLeagueHierarchy() {
    return this.getRequest(`${this.prefix}league/hierarchy`);
  }

  getLeagueLeaders(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/leaders`);
  }

  getPlayByPlay(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/pbp`);
  }

  getPlayerProfile(playerId: string) {
    return this.getRequest(`${this.prefix}players/${playerId}/profile`);
  }

  getRankings(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/rankings`);
  }

  getSchedule(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}games/${seasonYear}/${seasonType}/schedule`);
  }

  getSeasonalStatisticsSeasonToDate(seasonYear: string, seasonType: SeasonType, teamId: string) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/teams/${teamId}/statistics`);
  }

  getSeriesSchedule(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}series/${seasonYear}/${seasonType}/schedule`);
  }

  getSeriesStatistics(seriesId: string, teamId: string) {
    return this.getRequest(`${this.prefix}series/${seriesId}/teams/${teamId}/statistics`);
  }

  getStandings(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/standings`);
  }

  getTeamProfileRosters(teamId: string) {
    return this.getRequest(`${this.prefix}teams/${teamId}/profile`);
  }
}
