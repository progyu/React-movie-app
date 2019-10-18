import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres={movie.genres}
        summary={movie.summary}
        year={movie.year}
        />
    })
    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
      return fetch("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="container">
        <div className="movies">
          {this.state.movies ? this._renderMovies() : 'Loading'}
        </div>
      </section>
    );
  }
}

export default App;
