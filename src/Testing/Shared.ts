export const MethodTestGenerator = (method: Function, name: string, args: any) => {
  return { method: method, name: name, args: args as [] };
};

export const TestKeys = require('../../testingconfig.json');
