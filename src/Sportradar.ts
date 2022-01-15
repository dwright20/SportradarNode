import axios from 'axios';

export enum Formats {
  json = '.json',
  xml = '.xml',
}

export interface SportradarSettings {
  apiKey: string;
  format?: Formats;
  requestTimeout?: number;
  requestDelayTime?: number;
}

export class Sportradar implements SportradarSettings {
  API_BASE_URL: string = 'http://api.sportradar.us/';

  format: Formats;
  requestDelayTime: number;
  apiKey: string;
  requestTimeout: number;

  private instance = axios.create({
    baseURL: this.API_BASE_URL,
    headers: { application: 'sportradar-node' },
  });

  constructor(sportradarSettings: SportradarSettings) {
    this.format = sportradarSettings.format ?? Formats.json;
    this.apiKey = sportradarSettings.apiKey;
    this.instance.defaults.params = { api_key: sportradarSettings.apiKey };
    this.requestTimeout = sportradarSettings.requestTimeout ?? 3000;
    this.instance.defaults.timeout = this.requestTimeout;
    this.requestDelayTime = sportradarSettings.requestDelayTime ?? 1500;
  }

  private sleep() {
    return new Promise((resolve) => {
      setTimeout(resolve, this.requestDelayTime);
    });
  }

  async getRequest(path: string) {
    await this.sleep();
    return this.instance.get(path + this.format);
  }

  async postRequest(path: string) {
    await this.sleep();
    return this.instance.post(path + this.format);
  }
}
