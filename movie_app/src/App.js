import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies : [
          {
            title: "Matrix",
            poster: "",
          },
          {
            title: "Full Metal Jacket",
            poster: "",
          },
          {
            title: "Oldboy",
            poster: "",
          },
          {
            title: "Star Wars",
            poster: "",
          },
        ]
      })
    }, 5000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies;
  }

  render() {
  return (
    <div className="App">
      {this.state.movies ? this._renderMovies() : 'Loading'}
    </div>
  );
  }
}

export default App;
