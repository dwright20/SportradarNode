import { Nfl, NflSeasonType } from '../../src/index';
import { MethodTestGenerator } from '../shared';

// Increase delay between calls for testing
const testSportradarObject = new Nfl({ apiKey: '' });

// Increase jest timeout due to # of tests to run
jest.setTimeout(10000);

const TEST_GAME_ID = '7d06369a-382a-448a-b295-6da9eab53245';
const TEST_PLAYER_ID = '41c44740-d0f6-44ab-8347-3b5d515e5ecf';
const TEST_TEAM_ID = '97354895-8c77-4fd4-a860-32e62ea7382a';

const methodTests = [
  MethodTestGenerator(testSportradarObject.getDailyChangeLog.bind(testSportradarObject), 'getDailyChangeLog', [
    '2022',
    '01',
    '05',
  ]),
  MethodTestGenerator(testSportradarObject.getGameBoxscore.bind(testSportradarObject), 'getGameBoxscore', [
    TEST_GAME_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getGameRoster.bind(testSportradarObject), 'getGameRoster', [TEST_GAME_ID]),
  MethodTestGenerator(testSportradarObject.getGameStatistics.bind(testSportradarObject), 'getGameStatistics', [
    TEST_GAME_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getLeagueHierarchy.bind(testSportradarObject), 'getLeagueHierarchy', []),
  MethodTestGenerator(testSportradarObject.getPlayByPlay.bind(testSportradarObject), 'getPlayByPlay', [TEST_GAME_ID]),
  MethodTestGenerator(testSportradarObject.getPlayerProfile.bind(testSportradarObject), 'getPlayerProfile', [
    TEST_PLAYER_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getPostgameStandings.bind(testSportradarObject), 'getPostgameStandings', [
    '2021',
    NflSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getSeasonSchedule.bind(testSportradarObject), 'getSeasonSchedule', [
    '2021',
    NflSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getSeasonStatistics.bind(testSportradarObject), 'getSeasonStatistics', [
    '2021',
    NflSeasonType.REG,
    TEST_TEAM_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getSeasons.bind(testSportradarObject), 'getSeasons', []),
  MethodTestGenerator(testSportradarObject.getTeamProfile.bind(testSportradarObject), 'getTeamProfile', [TEST_TEAM_ID]),
  MethodTestGenerator(testSportradarObject.getTeamRoster.bind(testSportradarObject), 'getTeamRoster', [TEST_TEAM_ID]),
  MethodTestGenerator(testSportradarObject.getWeeklyDepthCharts.bind(testSportradarObject), 'getWeeklyDepthCharts', [
    '2021',
    NflSeasonType.REG,
    1,
  ]),
  MethodTestGenerator(testSportradarObject.getWeeklyInjuries.bind(testSportradarObject), 'getWeeklyInjuries', [
    '2021',
    NflSeasonType.REG,
    1,
  ]),
  MethodTestGenerator(testSportradarObject.getWeeklySchedule.bind(testSportradarObject), 'getWeeklySchedule', [
    '2021',
    NflSeasonType.REG,
    1,
  ]),
];

test('Nfl Object', () => {
  expect(testSportradarObject.prefix).toBe(`nfl/trial/v7/en/`);
});

for (const methodTest of methodTests) {
  test(methodTest.name, () => {
    const args = methodTest.args;
    return methodTest.method(...args).then((response: any) => {
      expect(response.status).toBe(200);
    });
  });
}
