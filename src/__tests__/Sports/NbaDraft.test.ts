import { NbaDraft } from '../../index';
import { MethodTestGenerator, TestKeys } from '../../Testing/Shared';

// Increase delay between calls for testing
const testSportradarObject = new NbaDraft({ apiKey: TestKeys.api_keys.nba, requestDelayTime: 2500 });

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
  test(methodTest.name, async () => {
    const args = methodTest.args;
    await methodTest
      .method(...args)
      .then((response: any) => {
        expect(response.status).toBe(200);
      })
      .catch((err: any) => {
        console.log(`Error during ${methodTest.name} test: ${err}`);
      });
  });
};
