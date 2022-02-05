import { Nba, NbaSeasonType } from '../../src/index';
import { MethodTestGenerator } from '../Shared';

const testSportradarObject = new Nba({ apiKey: '' });

// Increase jest timeout due to # of tests to run
jest.setTimeout(10000);

const TEST_GAME_ID = '6d2c3191-8604-4026-84d3-32f36d042a8e';
const TEST_PLAYER_ID = 'ab532a66-9314-4d57-ade7-bb54a70c65ad';
const TEST_TEAM_ID = '583ecefd-fb46-11e1-82cb-f4ce4684ea4c';
const TEST_SERIES_ID = 'ede9d891-2f05-4baf-82ea-f813221aa052';

const methodTests = [
  MethodTestGenerator(testSportradarObject.getDailyChangeLog.bind(testSportradarObject), 'getDailyChangeLog', [
    '2022',
    '01',
    '05',
  ]),
  MethodTestGenerator(testSportradarObject.getDailySchedule.bind(testSportradarObject), 'getDailySchedule', [
    '2022',
    '01',
    '05',
  ]),
  MethodTestGenerator(testSportradarObject.getDailyTransfers.bind(testSportradarObject), 'getDailyTransfers', [
    '2022',
    '01',
    '05',
  ]),
  MethodTestGenerator(testSportradarObject.getFreeAgents.bind(testSportradarObject), 'getFreeAgents', []),
  MethodTestGenerator(testSportradarObject.getGameBoxscore.bind(testSportradarObject), 'getGameBoxscore', [
    TEST_GAME_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getGameSummary.bind(testSportradarObject), 'getGameSummary', [TEST_GAME_ID]),
  MethodTestGenerator(testSportradarObject.getInjuries.bind(testSportradarObject), 'getInjuries', []),
  MethodTestGenerator(testSportradarObject.getLeagueHierarchy.bind(testSportradarObject), 'getLeagueHierarchy', []),
  MethodTestGenerator(testSportradarObject.getLeagueLeaders.bind(testSportradarObject), 'getLeagueLeaders', [
    '2020',
    NbaSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getLeagueLeaders.bind(testSportradarObject), 'getLeagueLeaders', [
    '2020',
    NbaSeasonType.PLAYIN,
  ]),
  MethodTestGenerator(testSportradarObject.getLeagueLeaders.bind(testSportradarObject), 'getLeagueLeaders', [
    '2020',
    NbaSeasonType.POST,
  ]),
  MethodTestGenerator(testSportradarObject.getPlayByPlay.bind(testSportradarObject), 'getPlayByPlay', [TEST_GAME_ID]),
  MethodTestGenerator(testSportradarObject.getPlayerProfile.bind(testSportradarObject), 'getPlayerProfile', [
    TEST_PLAYER_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getRankings.bind(testSportradarObject), 'getRankings', [
    '2020',
    NbaSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getSchedule.bind(testSportradarObject), 'getSchedule', [
    '2020',
    NbaSeasonType.REG,
  ]),
  MethodTestGenerator(
    testSportradarObject.getSeasonalStatisticsSeasonToDate.bind(testSportradarObject),
    'getSeasonalStatisticsSeasonToDate',
    ['2020', NbaSeasonType.REG, TEST_TEAM_ID],
  ),
  MethodTestGenerator(testSportradarObject.getSeriesSchedule.bind(testSportradarObject), 'getSeriesSchedule', [
    '2020',
    NbaSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getSeriesStatistics.bind(testSportradarObject), 'getSeriesStatistics', [
    TEST_SERIES_ID,
    TEST_TEAM_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getStandings.bind(testSportradarObject), 'getStandings', [
    '2020',
    NbaSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getTeamProfileRosters.bind(testSportradarObject), 'getTeamProfileRosters', [
    TEST_TEAM_ID,
  ]),
];

test('Nba Object', () => {
  expect(testSportradarObject.prefix).toBe(`nba/trial/v7/en/`);
});

for (const methodTest of methodTests) {
  test(methodTest.name, () => {
    const args = methodTest.args;
    return methodTest.method(...args).then((response: any) => {
      expect(response.status).toBe(200);
    });
  });
}
