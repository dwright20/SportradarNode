import { Sportradar } from '../sportradar';
import { Defaults, SportConstructor } from './shared';

export class NflDraft extends Sportradar {
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
    this.prefix = `draft/nfl/${this.accessLevel}/v${Defaults.version.nflDraft}/${this.language}/`;
  }
  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
    
   * @memberof NflDraft
   */
  getDraftSummary(year: string) {
    return this.getRequest(`${this.prefix}${year}/draft`);
  }
  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
    
   * @memberof NflDraft
   */
  getProspects(year: string) {
    return this.getRequest(`${this.prefix}${year}/prospects`);
  }
  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} teamId
   * @memberof NflDraft
   */
  getTeamDraftSummary(year: string, teamId: string) {
    return this.getRequest(`${this.prefix}${year}/teams/${teamId}/draft`);
  }
  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
    
   * @memberof NflDraft
   */
  getTopProspects(year: string) {
    return this.getRequest(`${this.prefix}${year}/top_prospects`);
  }
  /**
   *
   *
   * @param {string} year Year in 4 digit format (YYYY)
    
   * @memberof NflDraft
   */
  getTrades(year: string) {
    return this.getRequest(`${this.prefix}${year}/trades`);
  }
}
