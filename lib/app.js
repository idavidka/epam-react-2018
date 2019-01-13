import React from 'react';
import { render } from 'react-dom';
import Search from './search';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import style from './main.less';

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <div>
            <h1>Netflixroulette</h1>
            <Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />
        </div>
    </Provider>,
    document.getElementById('app')
);
;