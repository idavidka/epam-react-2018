import React, {Component} from 'react';

export default class Results extends Component {
    render() {
        return <div className="results">
            {this.props.isFetching ? <h2>Loading...</h2> : <h2>Found: {this.props.movies.length}</h2>}
            <ul>
                {this.props.movies.map((movie, i) =>
                    <li key={i}>
                        <img src={movie.poster_path} />
                        <div className="title">
                            <span className="year">{new Date(movie.release_date).getFullYear()}</span>
                            {movie.title}
                        </div>
                        <div className="genres">{movie.genres.join(' & ')}</div>
                    </li>
                )}
            </ul>
        </div>
    }
}