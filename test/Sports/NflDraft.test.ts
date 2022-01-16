import { NflDraft } from '../../src/index';
import { MethodTestGenerator } from '../shared';

const testSportradarObject = new NflDraft({ apiKey: '' });

const TEST_TEAM_ID = '97354895-8c77-4fd4-a860-32e62ea7382a';

const methodTests = [
  MethodTestGenerator(testSportradarObject.getDraftSummary.bind(testSportradarObject), 'getDraftSummary', ['2020']),
  MethodTestGenerator(testSportradarObject.getProspects.bind(testSportradarObject), 'getProspects', ['2020']),
  MethodTestGenerator(testSportradarObject.getTeamDraftSummary.bind(testSportradarObject), 'getTeamDraftSummary', [
    '2020',
    TEST_TEAM_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getTopProspects.bind(testSportradarObject), 'getTopProspects', ['2020']),
  MethodTestGenerator(testSportradarObject.getTrades.bind(testSportradarObject), 'getTrades', ['2020']),
];

for (const methodTest of methodTests) {
  test(methodTest.name, () => {
    const args = methodTest.args;
    return methodTest.method(...args).then((response: any) => {
      expect(response.status).toBe(200);
    });
  });
}
