import {Meteor} from 'meteor/meteor';
import {LogsCollection} from '/imports/api/logs';

function insertLog({label}) {
    LogsCollection.insert({label, createdAt: new Date()});
}

Meteor.startup(() => {
    if (LogsCollection.find().count() === 0) {
        insertLog({
            label: 'Board games',
        });
    }
});
