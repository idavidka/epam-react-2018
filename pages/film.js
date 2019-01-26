import { renderToString } from 'react-dom/server';
import Film from '../lib/film';

export default (params) => {
    const film = renderToString(<Film id={params.movie} />);

    const output = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Task 7 / Server</title>
        </head>
        <body>
            <div id="app">${film}</div>
        </body>
        <script type="text/javascript" src="/app.js"></script>
        </html>`;

    return output;
}