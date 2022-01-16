import { Sportradar } from '../sportradar';
import { Defaults, SportConstructor } from './shared';

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
  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} month Month in 2 digit format (MM)
   * @param {string} day Day in 2 digit format (DD)
   
   * @memberof NcaaMB
   */
  getDailyChangeLog(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}league/${year}/${month}/${day}/changes`);
  }

  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} month Month in 2 digit format (MM)
   * @param {string} day Day in 2 digit format (DD)
   
   * @memberof NcaaMB
   */
  getDailySchedule(year: string, month: string, day: string) {
    return this.getRequest(`${this.prefix}games/${year}/${month}/${day}/schedule`);
  }
  /**
   *
   *
   * @param {string} gameId
    
   * @memberof NcaaMB
   */
  getGameBoxscore(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/boxscore`);
  }

  /**
   *
   *
   * @param {string} gameId
    
   * @memberof NcaaMB
   */
  getGameSummary(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/summary`);
  }

  /**
   *
   *
    
   * @memberof NcaaMB
   */
  getLeagueHierarchy() {
    return this.getRequest(`${this.prefix}league/hierarchy`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NcaaMBSeasonType} seasonType
   * @param {string} conferenceId
    
   * @memberof NcaaMB
   */
  getLeagueLeaders(seasonYear: string, seasonType: SeasonType, conferenceId: string) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/${conferenceId}/leaders`);
  }

  /**
   *
   *
   * @param {string} gameId
    
   * @memberof NcaaMB
   */
  getPlayByPlay(gameId: string) {
    return this.getRequest(`${this.prefix}games/${gameId}/pbp`);
  }

  /**
   *
   *
   * @param {string} playerId
    
   * @memberof NcaaMB
   */
  getPlayerProfile(playerId: string) {
    return this.getRequest(`${this.prefix}players/${playerId}/profile`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {RankingsType} rankingsType
    
   * @memberof NcaaMB
   */
  getRankings(seasonYear: string, rankingsType: RankingsType) {
    return this.getRequest(`${this.prefix}polls/${rankingsType}/${seasonYear}/rankings`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {RankingsType} rankingsType
   * @param {string} week Week number in 1-2 digit format after a W (W14). Alternatively, PRE can be used for Pre-season, PST for Post-season, or PSTF Post-season final (USA Today only).
    
   * @memberof NcaaMB
   */
  getRankingsByWeek(seasonYear: string, rankingsType: RankingsType, week: string) {
    return this.getRequest(`${this.prefix}polls/${rankingsType}/${seasonYear}/${week}/rankings`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
    
   * @memberof NcaaMB
   */
  getRpiRankings(seasonYear: string) {
    return this.getRequest(`${this.prefix}rpi/${seasonYear}/rankings`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NcaaMBSeasonType} seasonType
    
   * @memberof NcaaMB
   */
  getSchedule(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}games/${seasonYear}/${seasonType}/schedule`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NcaaMBSeasonType} seasonType
   * @param {string} teamId
    
   * @memberof NcaaMB
   */
  getSeasonalStatisticsSeasonToDate(seasonYear: string, seasonType: SeasonType, teamId: string) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/teams/${teamId}/statistics`);
  }

  /**
   *
   *
    
   * @memberof NcaaMB
   */
  getSeasons() {
    return this.getRequest(`seasons`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY)
   * @param {NcaaMBSeasonType} seasonType
    
   * @memberof NcaaMB
   */
  getStandings(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}seasons/${seasonYear}/${seasonType}/standings`);
  }

  /**
   *
   *
   * @param {string} teamId
    
   * @memberof NcaaMB
   */
  getTeamProfileRosters(teamId: string) {
    return this.getRequest(`${this.prefix}teams/${teamId}/profile`);
  }

  /**
   *
   *
   * @param {string} seasonYear Year in 4 digit format (YYYY) Year in 4 digit format (YYYY)
   * @param {NcaaMBSeasonType} seasonType
    
   * @memberof NcaaMB
   */
  getTournamentList(seasonYear: string, seasonType: SeasonType) {
    return this.getRequest(`${this.prefix}tournaments/${seasonYear}/${seasonType}/schedule`);
  }
  /**
   *
   *
   * @param {string} tournamentId
    
   * @memberof NcaaMB
   */
  getTournamentSchedule(tournamentId: string) {
    return this.getRequest(`${this.prefix}tournaments/${tournamentId}/schedule`);
  }
  /**
   *
   *
   * @param {string} tournamentId
   * @param {string} teamId
    
   * @memberof NcaaMB
   */
  getTournamentStatistics(tournamentId: string, teamId: string) {
    return this.getRequest(`${this.prefix}tournaments/${tournamentId}/teams/${teamId}/statistics`);
  }

  /**
   *
   *
   * @param {string} tournamentId
    
   * @memberof NcaaMB
   */
  getTournamentSummary(tournamentId: string) {
    return this.getRequest(`${this.prefix}tournaments/${tournamentId}/summary`);
  }
}
