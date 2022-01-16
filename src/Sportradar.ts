import axios, { AxiosInstance } from 'axios';

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

  AxiosClient: AxiosInstance;
  format: Formats;
  requestDelayTime: number;
  apiKey: string;
  requestTimeout: number;

  constructor(sportradarSettings: SportradarSettings) {
    this.format = sportradarSettings.format ?? Formats.json;
    this.apiKey = sportradarSettings.apiKey;
    this.requestTimeout = sportradarSettings.requestTimeout ?? 3000;
    this.requestDelayTime = sportradarSettings.requestDelayTime ?? 1500;
    this.AxiosClient = axios.create({
      baseURL: this.API_BASE_URL,
      headers: { application: 'sportradar-node' },
      params: { api_key: sportradarSettings.apiKey },
      timeout: this.requestTimeout,
    });
  }

  private sleep() {
    return new Promise((resolve) => {
      setTimeout(resolve, this.requestDelayTime);
    });
  }

  /**
   * Takes a string, appends it to http://api.sportradar.us/, and makes a GET request
   * @param path
   * @returns AxiosResponse
   */
  async getRequest(path: string) {
    await this.sleep();
    return this.AxiosClient.get(path + this.format);
  }

  /**
   * Takes a string, appends it to http://api.sportradar.us/, and makes a POST request
   * @param path
   * @returns AxiosResponse
   */
  async postRequest(path: string) {
    await this.sleep();
    return this.AxiosClient.post(path + this.format);
  }
}
