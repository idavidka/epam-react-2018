import React, {Component} from 'react';

module.exports = class Search extends Component {
    render() {
        return <div>
            <label>{this.props.title}</label>
            <input type={'text'} name={this.props.name} placeholder={this.props.placeholder} />
        </div>
    }
}