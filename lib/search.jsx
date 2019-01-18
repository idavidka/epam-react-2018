import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Field from './field';
import Button from './button';
import Results from './results';
import Filter from './filter';


import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

import { fetchMovie } from "./actions";

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

const mapStateToProps = state => {
    const movies = state.moviesByQuery || {};

    return {
        isFetching: movies.isFetching === true ? true : false,
        lastUpdated: movies.lastUpdated || Date.now(),
        movies: movies.movies || []
    }
};

const ConnectedResult = connect(mapStateToProps)(Results);

export default class Search extends Component {
    static propTypes = {
        movies: PropTypes.array,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number
    }

    constructor(props) {
        super(props);

        console.log('ok',this.props);

        this.state = {
            type: 'Title'
        };
    }

    getType() {
        if(arguments.length <= 0) {
            return this.state.type || 'title';
        }
    }

    setType(type) {
        this.setState({type: type});
    }

    setQuery(event) {
        this.setState({
            query: event.target.value
        });
    }

    onSearch() {
        store.dispatch(fetchMovie(this.state.query, this.state.type));
    }

    render() {
        return <Provider store={store}>
            <div className="container">
                <div className="fields">
                    <Field title={this.props.title} placeholder={this.props.placeholder}
                           change={this.setQuery.bind(this)}/>
                    <Button content={this.props.button} search={this.onSearch.bind(this)}/>
                    <Filter typeHandler={this.setType.bind(this)} type={this.getType()}/>
                </div>
                <ConnectedResult />
            </div>
        </Provider>;
    }
}