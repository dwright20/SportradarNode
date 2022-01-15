import { AxiosResponse } from 'axios';

export const axiosResponse: AxiosResponse = {
  data: { falseProp: 'value' },
  status: 200,
  statusText: 'OK',
  config: {},
  headers: {},
};

export default {
  create: jest.fn().mockReturnValue({
    get: jest.fn(() => Promise.resolve(axiosResponse)),
  }),
};
