import { Sportradar } from '../Sportradar';
import { Defaults, SportConstructor } from './Shared';

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

  getDraftSummary(year: string) {
    return this.getRequest(`${this.prefix}${year}/draft`);
  }

  getProspects(year: string) {
    return this.getRequest(`${this.prefix}${year}/prospects`);
  }

  getTeamDraftSummary(year: string, teamId: string) {
    return this.getRequest(`${this.prefix}${year}/teams/${teamId}/draft`);
  }

  getTopProspects(year: string) {
    return this.getRequest(`${this.prefix}${year}/top_prospects`);
  }

  getTrades(year: string) {
    return this.getRequest(`${this.prefix}${year}/trades`);
  }
}
