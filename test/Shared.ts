import { AxiosResponse } from "axios";

export const MethodTestGenerator = (method: (...args: any[]) => Promise<AxiosResponse<any, any>>, name: string, args: any) => {
  return { method: method as (...args: any[]) => Promise<AxiosResponse<any, any>>, name: name as string, args: args as [] };
};
