import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';
import {Meteor} from 'meteor/meteor';

export const LogsCollection = new Mongo.Collection('logs');


if (Meteor.isServer) {
    Meteor.publish('logs', function tasksPublication() {
        return LogsCollection.find({owner: this.userId});
    });
}

Meteor.methods({
    'logs.insert'(label) {
        check(label, String);
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        LogsCollection.insert({
            label,
            createdAt: new Date(),
            owner: this.userId,
        });
    },
    'logs.delete'(logId) {
        check(logId, String);
        const log = LogsCollection.findOne(logId);
        if (log.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }
        LogsCollection.remove(logId);
    },
});
