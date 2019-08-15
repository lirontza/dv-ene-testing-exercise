import {dataStore} from './data-store';

class WhitelistData {
    constructor() {
        this.entities = dataStore.whitelistDataStore;
    }

    inWhitelist(entityId) {
        return !!this.entities[entityId];
    }
}

class BlacklistData {
    constructor() {
        this.entities = dataStore.blacklistDataStore;
    }

    inBlacklist(entityId) {
        return !!this.entities[entityId];
    }
}

class SessionData {
    constructor() {
        this.sessions = dataStore.sessionDataStore;
    }

    getSession(sessionId) {
        return this.sessions[sessionId];
    }

    insertSession(session) {
        this.sessions[session.sessionId] = session;
    }
}

export let dataSets = {
    sessionData: new SessionData(),
    whitelistData: new WhitelistData(),
    blacklistData: new BlacklistData()
};
