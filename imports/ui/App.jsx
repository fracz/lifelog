import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import {LogsCollection} from '../api/logs.js';
import LogLink from "./LogLink";
import NewLogButton from "./NewLogButton";
import AccountsUiWrapper from "./AccountsUiWrapper";

class App extends Component {
    renderLogs() {
        return this.props.logs.map((log) => (
            <LogLink key={log._id} log={log}/>
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>LifeLog</h1>
                </header>

                <AccountsUiWrapper/>

                {
                    this.props.currentUser &&
                    <div>
                        <ul>
                            {this.renderLogs()}
                        </ul>

                        <NewLogButton
                            onSubmit={(e) => Meteor.call('logs.insert', e.label)}/>
                    </div>
                }
            </div>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('logs');

    return {
        logs: LogsCollection.find({}).fetch(),
        currentUser: Meteor.user(),
    };
})(App);
