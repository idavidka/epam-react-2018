import React, {Component} from 'react';

export default class Button extends Component {
    render() {
        return <input type="button" onClick={this.props.search.bind(this)} value={this.props.content} />;
    }
}