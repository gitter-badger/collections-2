import Ember from 'ember';
import DS from 'ember-data';


function getToken() {
    var token;
    var session = window.localStorage['ember_simple_auth:session'];
    if (session) {
        token = JSON.parse(session)['authenticated'];
        if ('attributes' in token) {
            return token['attributes']['accessToken'];
        }
        return token;
    }
}

export default DS.JSONAPIAdapter.extend({
    session: Ember.inject.service(),
    host: 'https://staging-api.osf.io',
    namespace: 'v2',
    ajax(url, method, hash) {
        hash = hash || {};
        hash.crossOrigin = true;
        hash.xhrFields = { withCredentials: false };
        hash.headers = hash.headers || {};
        hash.headers['AUTHORIZATION'] = 'Bearer ' + getToken();
        hash.headers['X-CSRFTOKEN'] = this.get('session.data.authenticated.csrfToken');
        return this._super(url, method, hash);
    },
    buildURL() {
        var base = this._super(...arguments);
        return `${base}/`;
    }
});

