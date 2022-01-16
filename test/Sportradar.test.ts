import { Sportradar, Formats } from '../src/sportradar';

test('Sportradar Object', () => {
  const testSportradarObject = new Sportradar({ apiKey: 'testing-key' });
  expect(testSportradarObject.format).toBe(Formats.json);
  expect(testSportradarObject.requestDelayTime).toBe(1500);
  expect(testSportradarObject.apiKey).toBe('testing-key');
});
