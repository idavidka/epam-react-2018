import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import Search from './search';
import { ConnectedFilm } from './film';
import NotFound from './not-found';
import style from './main.less';
import reducer from "./reducers";
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

const searchPage = props => <Search {...props} store={store} title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />;
const filmPage = props => <ConnectedFilm {...props} store={store} id={props.match.params.movie} />;

render(
    <Provider store={store}>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={searchPage} />
                    <Route path="/search" component={searchPage} />
                    <Route path="/film/:movie" component={filmPage} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
);