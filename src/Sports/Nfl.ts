import { Sportradar } from '../Sportradar';
import { Defaults, SportConstructor } from './Shared';

enum NflSeason {
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
    this.prefix = `nfl/${this.accessLevel}/v${Defaults.version.nfl}/${this.language}/`;
  }

  getDailyChangeLog(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/changes`);
  }

  getGameBoxscore(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/boxscore`);
  }

  getGameRoster(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/roster`);
  }

  getGameStatistics(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/statistics`);
  }

  getLeagueHierarchy() {
    return this.getRequest(`${this.prefix}league/hierarchy`);
  }

  getPlayByPlay(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/pbp`);
  }

  getPlayerProfile(playerId: string) {
    return this.getRequest(`${this.prefix}players/${playerId}/profile`);
  }

  getPostgameStandings(year: string, nflSeason: NflSeason) {
    return this.getRequest(`${this.prefix}seasons/${year}/${nflSeason}/standings/season`);
  }

  getSeasonSchedule(year: string, nflSeason: NflSeason) {
    return this.getRequest(`${this.prefix}games/${year}/${nflSeason}/schedule`);
  }

  getSeasonStatistics(year: string, nflSeason: NflSeason, teamId: string) {
    return this.getRequest(`${this.prefix}games/${year}/${nflSeason}/teams/${teamId}/statistics`);
  }

  getSeasons() {
    return this.getRequest(`${this.prefix}league/seasons`);
  }

  getTeamProfile(teamId: string) {
    return this.getRequest(`${this.prefix}teams/${teamId}/profile`);
  }

  getTeamRoster(teamId: string) {
    return this.getRequest(`${this.prefix}team/${teamId}/full_roster`);
  }

  getWeeklyDepthCharts(year: string, nflSeason: NflSeason, week: number) {
    return this.getRequest(`${this.prefix}seasons/${year}/${nflSeason}/${week}/depth_charts`);
  }

  getWeeklyInjuries(year: string, nflSeason: NflSeason, week: number) {
    return this.getRequest(`${this.prefix}seasons/${year}/${nflSeason}/${week}/injuries`);
  }

  getWeeklySchedule(year: string, nflSeason: NflSeason, week: number) {
    return this.getRequest(`${this.prefix}seasons/${year}/${nflSeason}/${week}/schedule`);
  }
}
