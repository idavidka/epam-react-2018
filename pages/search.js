import { renderToString } from 'react-dom/server';
import Search from '../lib/search';

export default () => {
    const search = renderToString(<Search title="Find your movie" button={'Search'} placeholder={'Search for a movie'} />);

    const output = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Task 7 / Server</title>
        </head>
        <body>
            <div id="app">${search}</div>
        </body>
        <script type="text/javascript" src="/app.js"></script>
        </html>`;

    return output;
}