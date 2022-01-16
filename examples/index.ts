import * as sra from '../src/index';

const nbaCalls = new sra.Nba({ apiKey: '' });

nbaCalls.getDailySchedule('2022', '01', '15')
.then((resp) => {
    console.log(resp.data);
});