import React, {Component} from 'react';
import Error from './error'

export default class Search extends Component {
    render() {
        return <div className="field">
            <label>{this.props.title}</label>
            <input type="text" placeholder={this.props.placeholder} />

            <Error />
        </div>
    }
}