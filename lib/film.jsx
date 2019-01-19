import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieById, mapStateToProps } from "./actions";


export default class Film extends Component {
    static propTypes = {
        movie: PropTypes.object,
        isFetching: PropTypes.bool,
        lastUpdated: PropTypes.number
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.store.dispatch(fetchMovieById(this.props.id));
    }

    render() {
        const movie = this.props.movies[0];

        return <div className="container">
            <h1>Netflixroulette <Link to="/search">Search</Link></h1>{
            !movie
                ? <h2>Loading</h2>
                : <div className="film">
                    <div className="cover">
                        <img src={movie.poster_path}/>
                    </div>
                    <div className="content">
                        <div className="title">
                            <h2>{movie.title}</h2>
                            <span className="vote">{movie.vote_average}</span>
                        </div>
                        <div className="genres">{movie.genres.join(' & ')}</div>
                        <div className="data">
                            <div className="year">{new Date(movie.release_date).getFullYear()}</div>
                            <div className="runtime">{movie.runtime} min</div>
                        </div>
                        <div className="description">{movie.overview}</div>
                    </div>
                </div>
        }</div>;
    }
}

export const ConnectedFilm = connect(mapStateToProps)(Film);