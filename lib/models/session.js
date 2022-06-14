/**
 * Session Manager 
 */

class Session{
	constructor(sessionID, messages){
		this._sessionID = sessionID;
		this._messages	= messages;
	}

	setSessionID(sessionID) {
		this._sessionID = sessionID;
	}

	setMessages(messages) {
		this._messages = messages;
	}

	getSessionID() {
		return this._sessionID;
	}

	getMessages() {
		return this._messages;
	}
}


class SessionManager{
	constructor(sessions) {
		this._sessions = sessions;
	}

	getSession(sessionID){
		this._sessions.forEach((session) => {
			if (session.getSessionID() === sessionID) {
				return session;
			}
		});
		return null;
	}

	addSession(session) {
		this._sessions.push(session);
	}
}

sessionManager = new SessionManager([]);

module.exports = {
	SessionManager,
	Session,
	sessionManager
}