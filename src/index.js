import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import TitleComponent from './TitleComponent';
import TitleCreateElement from './TitleCreateElement';

ReactDOM.render(
    <div>
        <TitleComponent className={"title"}>Hello World 1!</TitleComponent>
    </div>
    , document.getElementById('root').appendChild(document.createElement('div')));


ReactDOM.render(
    TitleCreateElement
    , document.getElementById('root').appendChild(document.createElement('div')));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
