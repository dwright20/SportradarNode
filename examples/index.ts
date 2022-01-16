import * as sra from '../src/index';

async function main(): Promise<void> {
    const nba = new sra.Nba({ apiKey: '' });

    const { data } = await nba.getDailySchedule('2022', '01', '15');

    console.log(data);
}

main()