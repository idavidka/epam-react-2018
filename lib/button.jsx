import React, {Component} from 'react';

module.exports = class Search extends Component {
    onSearch() {

        console.log('search', this.state);
    }

    render() {
        return <input type="button" onClick={this.onSearch.bind(this)} value={this.props.content} />;
    }
}