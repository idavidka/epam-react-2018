import React, {Component} from 'react';

module.exports = class Search extends Component {
    render() {
        return <div className="field">
            <input type="text" placeholder={this.props.placeholder} />
            <div className="error">
            </div>
        </div>
    }
}