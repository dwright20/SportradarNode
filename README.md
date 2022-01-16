# SportradarNode

A [node](https://nodejs.org/) package for interacting with the [Sportradar](https://www.sportradar.com/) API without needing to remember the endpoints, inputs, and (some) Sportradar-specific IDs. To use this package and connect to the Sportradar API, you will need a [Sportradar account](https://developer.sportradar.com/member/register). With this account you can create an API key that comes free of charge and provides access to the API at a rate of 1 call/second and up-to 1000 calls/month.

## Coverage
Category | Images | NBA | NBA Draft | NCAAMB | NFL | NFL Draft | Soccer |
--- | --- | --- | --- | --- | --- | --- | --- | 
Class | :soon: | :ballot_box_with_check: |  :ballot_box_with_check: |  :ballot_box_with_check: |  :ballot_box_with_check: |  :ballot_box_with_check: |  :soon: |
Tests | :soon: | :ballot_box_with_check: |  :ballot_box_with_check: |  :ballot_box_with_check: |  :ballot_box_with_check: |  :ballot_box_with_check: | :soon: | 

## Usage
### Installation
This package is available through the [npm registry](https://www.npmjs.com/) and installed using the npm install command: 
```
$ npm install sportradar-node
```
### Example
Lets get a list of the NFL teams who made the playoffs in the 2021-2022 season:

```typescript
import * as sra from 'sportradar-node';

const nfl = new sra.Nfl({ apiKey: '' });

const { data } = await nfl.getPostgameStandings('2021', sra.NflSeasonType.REG);

var playoffTeams = [];

const conferences = data.conferences as [any];
conferences.forEach(conf => {
    const divisions = conf.divisions as [any];
    divisions.forEach(div => {
        const teams = div.teams as [any];
        teams.forEach(team => {
            if (team.rank.clinched != 'eliminated') {
                playoffTeams.push(team.name);
            }
        });
    });
});

console.log(playoffTeams);
```

More examples to come in the [examples folder](/examples)
