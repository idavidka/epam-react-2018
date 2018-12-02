import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

ReactDOM.render(
    <div>
        <h1>Hi</h1>
        <Search title={'Search'} placeholder={'Search...'} name={'search'} />
    </div>,
    document.getElementById('app')
);

