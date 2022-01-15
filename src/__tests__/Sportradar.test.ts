import { Sportradar, Formats } from '../Sportradar';
import * as testKeys from '../../testingconfig.json';

test('Sportradar Object', () => {
  const testSportradarObject = new Sportradar({ apiKey: testKeys.api_keys.nba });
  expect(testSportradarObject.format).toBe(Formats.json);
  expect(testSportradarObject.requestDelayTime).toBe(1500);
});
