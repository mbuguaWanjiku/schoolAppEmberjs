import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('studentHome', function() {
    this.route('editProfile');
    this.route('attendance');
    this.route('schoolFees');
    this.route('evaluationResult');
    this.route('survey');
    this.route('edit-profile');
  });
});

export default Router;
