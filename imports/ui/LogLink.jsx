import React, {Component} from 'react';

export default class LogLink extends Component {
    render() {
        return (
            <li>{this.props.log.label}</li>
        );
    }
}
