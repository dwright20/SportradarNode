import { Sportradar } from '../sportradar';
import { Defaults, SportConstructor } from './shared';

export class NbaDraft extends Sportradar {
  prefix: string;
  accessLevel: string;
  language: string;
  constructor(nbaDraftSettings: SportConstructor) {
    super({
      apiKey: nbaDraftSettings.apiKey,
      format: nbaDraftSettings.format,
      requestDelayTime: nbaDraftSettings.requestDelayTime,
      requestTimeout: nbaDraftSettings.requestTimeout,
    });
    this.accessLevel = nbaDraftSettings.accessLevel ?? 'trial';
    this.apiKey = nbaDraftSettings.apiKey;
    this.language = nbaDraftSettings.language ?? 'en';
    this.prefix = `draft/nba/${this.accessLevel}/v${Defaults.version.nbaDraft}/${this.language}/`;
  }

  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @memberof NbaDraft
   */
  getDraftSummary(year: string) {
    return this.getRequest(`${this.prefix}${year}/draft`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @memberof NbaDraft
   */
  getProspects(year: string) {
    return this.getRequest(`${this.prefix}${year}/prospects`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @param {string} teamId
   * @memberof NbaDraft
   */
  getTeamDraftSummary(year: string, teamId: string) {
    return this.getRequest(`${this.prefix}${year}/teams/${teamId}/draft`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @memberof NbaDraft
   */
  getTopProspects(year: string) {
    return this.getRequest(`${this.prefix}${year}/top_prospects`);
  }
  /**
   * @param {string} year Year in 4 digit format (YYYY)
   * @memberof NbaDraft
   */
  getTrades(year: string) {
    return this.getRequest(`${this.prefix}${year}/trades`);
  }
}
