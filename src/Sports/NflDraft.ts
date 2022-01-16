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
