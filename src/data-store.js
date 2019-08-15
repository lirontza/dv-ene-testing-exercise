import {expect} from "chai";
import {AdType} from "./enums";

export let dataStore = {
    whitelistDataStore: {
        'DoubleVerify': {
            type: 'company',
            site: 'www.doubleverify.com',
            category: 'advertising'
        },
        'VideoNow': {
            type: 'company',
            site: 'www.vidnow.com',
            category: 'advertising'
        },
        'AdProfit': {
            type: 'company',
            site: 'www.adprofit.com',
            category: 'advertising'
        },
        'CacheFlow' : {
            type: 'app',
            owner: 'king-jojo@gmail.com'
        },
        'TodayGames' : {
            type: 'app',
            owner: 'gammy@gmail.com'
        },
        'SomeSongApp' : {
            type: 'app',
            owner: 'some-song@gmail.com'
        },
        'Nomig' : {
            type: 'app',
            owner: 'queen-ally@gmail.com'
        }
    },
    blacklistDataStore: {
        'VideoNext': {
            type: 'company',
            site: 'www.vidnext.com',
            category: 'advertising'
        },
        'AdExchange': {
            type: 'company',
            site: 'www.adexchange.com',
            category: 'advertising'
        },
        'FoolThemAll' : {
            type: 'app',
            owner: 'annonymous@gmail.com'
        },
        'GetTheirMoney' : {
            type: 'app',
            owner: 'noname@gmail.com'
        },
        'DoWhatYouDo' : {
            type: 'app',
            owner: 'dudu@gmail.com'
        }
    },
    sessionDataStore: {
        201: {
            sessionId: 201,
            adType: AdType.Display,
            maxViewedSamples: 5
        },
        202: {
            sessionId: 202,
            adType: AdType.Display,
            maxViewedSamples: 12
        },
        301: {
            sessionId: 301,
            adType: AdType.Video,
            videoPlayed: true,
            maxViewedSamples: 4
        },
        302: {
            sessionId: 302,
            adType: AdType.Video,
            videoPlayed: true,
            maxViewedSamples: 8
        }
    }
};
