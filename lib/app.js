import React from 'react';
import { render } from 'react-dom';
import Search from './search';
import style from './main.less';


render(
        <div>
            <h1>Netflixroulette</h1>
            <Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />
        </div>,
    document.getElementById('app')
);