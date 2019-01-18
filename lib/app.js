import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Search from './search';
import style from './main.less';

render(
    <Router>
        <div>
            <h1>Netflixroulette</h1>
            <Route path="/" component={() => <Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />} />
            <Route path="/search" component={() => <Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />} />
            <Route path="/film/:movie" component={() => <div>TEST</div>} />
        </div>
    </Router>,
    document.getElementById('app')
);