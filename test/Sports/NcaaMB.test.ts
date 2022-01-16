import { NcaaMB, NcaaMBSeasonType, NcaaMBRankingsType } from '../../src/index';
import { MethodTestGenerator } from '../shared';

// Increase delay between calls for testing
const testSportradarObject = new NcaaMB({ apiKey: '' });

// Increase jest timeout due to # of tests to run
jest.setTimeout(10000);

const TEST_GAME_ID = 'c520a07e-1676-4ee5-8fa9-65909d2fa3d2';
const TEST_PLAYER_ID = '41c44740-d0f6-44ab-8347-3b5d515e5ecf';
const TEST_TEAM_ID = 'c10544de-e3bd-4776-ba2e-83df8c017fd1';
const TEST_CONF_ID = 'a30fe8ff-82d2-4521-bc8d-e08e6a9dbb52';
const TEST_TOURNAMENT_ID = '6b1b9057-68b6-4705-9642-0d5e5f2c9dd1';

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
  MethodTestGenerator(testSportradarObject.getGameBoxscore.bind(testSportradarObject), 'getGameBoxscore', [
    TEST_GAME_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getGameSummary.bind(testSportradarObject), 'getGameSummary', [TEST_GAME_ID]),
  MethodTestGenerator(testSportradarObject.getLeagueHierarchy.bind(testSportradarObject), 'getLeagueHierarchy', []),
  MethodTestGenerator(testSportradarObject.getLeagueLeaders.bind(testSportradarObject), 'getLeagueLeaders', [
    '2022',
    NcaaMBSeasonType.REG,
    TEST_CONF_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getPlayByPlay.bind(testSportradarObject), 'getPlayByPlay', [TEST_GAME_ID]),
  MethodTestGenerator(testSportradarObject.getPlayerProfile.bind(testSportradarObject), 'getPlayerProfile', [
    TEST_PLAYER_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getRankings.bind(testSportradarObject), 'getRankings', [
    '2021',
    NcaaMBRankingsType.AP,
  ]),
  MethodTestGenerator(testSportradarObject.getRankingsByWeek.bind(testSportradarObject), 'getRankingsByWeek', [
    '2021',
    NcaaMBRankingsType.AP,
    'W1',
  ]),
  MethodTestGenerator(testSportradarObject.getRpiRankings.bind(testSportradarObject), 'getRpiRankings', ['2021']),
  MethodTestGenerator(testSportradarObject.getSchedule.bind(testSportradarObject), 'getSchedule', [
    '2021',
    NcaaMBSeasonType.REG,
  ]),
  MethodTestGenerator(
    testSportradarObject.getSeasonalStatisticsSeasonToDate.bind(testSportradarObject),
    'getSeasonalStatisticsSeasonToDate',
    ['2021', NcaaMBSeasonType.REG, TEST_TEAM_ID],
  ),
  MethodTestGenerator(testSportradarObject.getSeasons.bind(testSportradarObject), 'getSeasons', []),
  MethodTestGenerator(testSportradarObject.getStandings.bind(testSportradarObject), 'getStandings', [
    '2021',
    NcaaMBSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getTeamProfileRosters.bind(testSportradarObject), 'getTeamProfileRosters', [
    TEST_TEAM_ID,
  ]),
  MethodTestGenerator(testSportradarObject.getTournamentList.bind(testSportradarObject), 'getTournamentList', [
    '2021',
    NcaaMBSeasonType.REG,
  ]),
  MethodTestGenerator(testSportradarObject.getTournamentSchedule.bind(testSportradarObject), 'getTournamentSchedule', [
    TEST_TOURNAMENT_ID,
  ]),
  MethodTestGenerator(
    testSportradarObject.getTournamentStatistics.bind(testSportradarObject),
    'getTournamentStatistics',
    [TEST_TOURNAMENT_ID, TEST_TEAM_ID],
  ),
  MethodTestGenerator(testSportradarObject.getTournamentSummary.bind(testSportradarObject), 'getTournamentSummary', [
    TEST_TOURNAMENT_ID,
  ]),
];

test('NcaaMB Object', () => {
  expect(testSportradarObject.prefix).toContain(`ncaamb`);
});

for (const methodTest of methodTests) {
  test(methodTest.name, () => {
    const args = methodTest.args;
    return methodTest.method(...args).then((response: any) => {
      expect(response.status).toBe(200);
    });
  });
}
