import { Sportradar } from '../Sportradar';
import { Defaults, SportConstructor } from './Shared';

export enum SeasonType {
  REG = 'REG',
  CONF = 'CT',
  POST = 'PST',
}

export enum RankingsType {
  AP = 'AP',
  US = 'US',
}

export class NcaaMB extends Sportradar {
  prefix: string;
  accessLevel: string;
  language: string;
  constructor(ncaaMBDraftSettings: SportConstructor) {
    super({
      apiKey: ncaaMBDraftSettings.apiKey,
      format: ncaaMBDraftSettings.format,
      requestDelayTime: ncaaMBDraftSettings.requestDelayTime,
      requestTimeout: ncaaMBDraftSettings.requestTimeout,
    });
    this.accessLevel = ncaaMBDraftSettings.accessLevel ?? 'trial';
    this.apiKey = ncaaMBDraftSettings.apiKey;
    this.language = ncaaMBDraftSettings.language ?? 'en';
    this.prefix = `ncaamb/${this.accessLevel}/v${Defaults.version.ncaamb}/${this.language}/`;
  }

  getDailyChangeLog(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/changes`);
  }

  getDailySchedule(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}games/${year}/${month}/${day}/schedule`);
  }

  getGameBoxscore(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/boxscore`);
  }

  getGameSummary(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/summary`);
  }

  getLeagueHierarchy() {
    return this.getRequest(`${this.prefix}league/hierarchy`);
  }

  getLeagueLeaders(seasonYear: string, seasonType: SeasonType, conferenceId: string) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/${conferenceId}/leaders`);
  }

  getPlayByPlay(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/pbp`);
  }

  getPlayerProfile(playerId: string) {
    return this.getRequest(`${this.prefix}players/${playerId}/profile`);
  }

  getRankings(seasonYear: string, rankingsType: RankingsType) {
    return this.getRequest(`${this.prefix}polls/${rankingsType}/${seasonYear}/rankings`);
  }

  getRankingsByWeek(seasonYear: string, rankingsType: RankingsType, week: string) {
    return this.getRequest(`${this.prefix}polls/${rankingsType}/${seasonYear}/${week}/rankings`);
  }

  getRpiRankings(seasonYear: string) {
    return this.getRequest(`${this.prefix}rpi/${seasonYear}/rankings`);
  }

  getSchedule(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}games/${seasonYear}/${seasonType}/schedule`);
  }

  getSeasonalStatisticsSeasonToDate(seasonYear: string, seasonType: SeasonType, teamId: string) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/teams/${teamId}/statistics`);
  }

  getSeasons() {
    return this.getRequest(`seasons`);
  }

  getStandings(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/standings`);
  }

  getTeamProfileRosters(teamId: string) {
    return this.getRequest(`${this.prefix}teams/${teamId}/profile`);
  }

  getTournamentList(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}tournaments/${seasonYear}/${seasonType}/schedule`);
  }

  getTournamentSchedule(tournamentId: string) {
    return this.getRequest(`${this.prefix}tournaments/${tournamentId}/schedule`);
  }

  getTournamentStatistics(tournamentId: string, teamId: string) {
    return this.getRequest(`${this.prefix}tournaments/${tournamentId}/teams/${teamId}/statistics`);
  }

  getTournamentSummary(tournamentId: string) {
    return this.getRequest(`${this.prefix}tournaments/${tournamentId}/summary`);
  }
}
