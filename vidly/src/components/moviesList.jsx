import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieList extends Component {
    state = {
        movies: getMovies()
    }

    handleDelete = id => {
        let movies = this.state.movies;

        let movieInDb = movies.find(m => m._id === id);
        movies.splice(movies.indexOf(movieInDb), 1);
        this.setState({movies: movies});
    }

    renderMovies = () => {
        if(this.state.movies.length === 0) return <p className="mt-3">No movies</p>;

        return  <React.Fragment>
                    <p className="mt-3">Showing {this.state.movies.length} movies in the database.</p>
                    <table className="table">
                        <thead>
                            <tr><th>Title</th><th>Genre</th><th>Stock</th><th>Rating</th><th>Action</th></tr>
                        </thead>
                        <tbody>
                            {this.state.movies.map(item => <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>{item.genre.name}</td>
                                <td>{item.numberInStock}</td>
                                <td>{item.dailyRentalRate}</td>
                                <td><button onClick={() => this.handleDelete(item._id)} className="btn btn-danger">delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </React.Fragment>
    }

    render() {
        return this.renderMovies();
    }
}

export default MovieList;