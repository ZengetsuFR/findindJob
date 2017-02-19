import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    // code to run on server at startup
    var Future = Npm.require( 'fibers/future' );
});
