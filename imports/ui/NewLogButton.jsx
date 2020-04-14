import React, {Component} from 'react';

export default class NewLogButton extends Component {
    state = {adding: false, label: ''};

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({label: this.state.label});
        this.setState({adding: false, label: ''});
    };

    render() {
        return (
            <div>
                <button className="button is-dark" onClick={() => this.setState({adding: true})}>
                    Start new Logs
                </button>

                {
                    this.state.adding &&
                    <div className="modal is-active">
                        <div className="modal-background"></div>
                        <div className="modal-content">
                            <div className="box">
                                <form onSubmit={this.onSubmit}>
                                    <div className="field">
                                        <label className="label">Log Name</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="My board game plays"
                                                   value={this.state.label} autoFocus={true}
                                                   onChange={(event) => this.setState({label: event.target.value})}/>
                                        </div>
                                    </div>
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link">Add</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <button className="modal-close is-large" aria-label="close"
                                onClick={() => this.setState({adding: false})}></button>
                    </div>
                }
            </div>
        );
    }
}
