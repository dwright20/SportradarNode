import { Formats } from '../sportradar';

export const Defaults = {
  version: {
    nba: 7,
    nbaDraft: 1,
    ncaamb: 7,
    nfl: 7,
    nflDraft: 1,
  },
  accessLevel: 'trial',
  language: 'en',
};

export interface SportConstructor {
  apiKey: string;
  accessLevel?: string;
  language?: string;
  format?: Formats;
  requestTimeout?: number;
  requestDelayTime?: number;
}
