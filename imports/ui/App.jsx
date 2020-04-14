import React, {Component} from 'react';
import {withTracker} from 'meteor/react-meteor-data';

import {LogsCollection} from '../api/logs.js';
import LogLink from "./LogLink";
import NewLogButton from "./NewLogButton";

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

                <ul>
                    {this.renderLogs()}
                </ul>

                <NewLogButton onSubmit={(e) => LogsCollection.insert(e)}/>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        logs: LogsCollection.find({}).fetch(),
    };
})(App);
