import {leagueID} from '$lib/utils/leagueInfo';

export const tabs = [
    {
        icon: 'home',
        label: 'League Webpage',
        dest: 'https://extraordinarilyfreshffl.com/',
        key: 'home',
    },
    {
        icon: 'swap_horiz',
        label: 'Trades & Waivers',
        dest: '/transactions',
        key: 'transactions',
    },
    {
        icon: 'view_comfy',
        label: 'League Info',
        nest: true,
        key: 'league_info',
        children: [
            {
                icon: 'storage',
                label: 'Rosters',
                dest: '/rosters',
            },
            {
                icon: 'groups',
                label: 'Managers',
                dest: '/managers',
            },
            {
                icon: 'view_comfy',
                label: 'Drafts',
                dest: '/drafts',
            },
            {
                icon: 'sports_football',
                label: 'Go to Sleeper',
                dest: `https://sleeper.app/leagues/${leagueID}`,
            },
        ]
    },
    {
        icon: 'lightbulb',
        label: 'Taxi Squad Draft Info',
        dest: 'https://extraordinarilyfreshffl.com/taxi-squad-draft/s',
        key: 'resources',
    },
];
