import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';
import style from './main.less';

ReactDOM.render(
    <div>
        <h1>Netflixroulette</h1>
        <Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />
    </div>,
    document.getElementById('app')
);

