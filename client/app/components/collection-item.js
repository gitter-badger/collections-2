import Ember from 'ember';

export default Ember.Component.extend({
    selected: false,
    actions : {
        markSelected (item) {
            this.toggleProperty('selected');
            this.get('toggleSelectedList')(this.get('selected'), item);
        }
    }
});