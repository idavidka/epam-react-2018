import React, {Component} from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Field from './field';
import Button from './button';
import Results from './results';
import Filter from './filter';

import { fetchMovie, mapStateToProps } from "./actions";

const ConnectedResult = connect(mapStateToProps)(Results);

export default class Search extends Component {
    static propTypes = {
        movies: PropTypes.array,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number
    }

    constructor(props) {
        super(props);

        this.state = {
            type: 'Title'
        };
    }

    componentDidMount() {
        if(this.props.history.location.search != '') {
            const params = new URLSearchParams(this.props.history.location.search);

            this.state.type = params.get('type');
            this.state.query = params.get('query');

            this.doSearch();
        }
    }

    getType() {
        if(arguments.length <= 0) {
            return this.state.type || 'title';
        }
    }

    setType(type) {
        this.setState({
            type: type
        });
    }

    setQuery(event) {
        this.setState({
            query: event.target.value
        });
    }

    doSearch() {
        this.props.store.dispatch(fetchMovie(this.state.query, this.state.type));
    }

    onSearch() {
        this.props.history.push(`/search?type=${this.state.type}&query=${this.state.query}`);
        this.doSearch();
    }

    render() {
        return <div className="container">
                <h1>Netflixroulette</h1>
                <div className="fields">
                    <Field title={this.props.title} placeholder={this.props.placeholder}
                           change={this.setQuery.bind(this)}/>
                    <Button content={this.props.button} search={this.onSearch.bind(this)}/>
                    <Filter typeHandler={this.setType.bind(this)} type={this.getType()}/>
                </div>
                <ConnectedResult />
            </div>;
    }
}