import { NbaDraft } from '../../src/index';
import { MethodTestGenerator } from '../Shared';

const testSportradarObject = new NbaDraft({ apiKey: '' });

const TEST_TEAM_ID = '583ecefd-fb46-11e1-82cb-f4ce4684ea4c';

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
