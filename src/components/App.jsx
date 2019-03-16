import Search from './Search.js';
import MovieList from './MovieList.js';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  // <MovieList movies={[]} /> self-closing HTML el with props
  constructor (props) {
    super(props);

    this.state = {
      movies: exampleMovies
    };
    // this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  };

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.movies);
  //   event.preventDefault();
  // }

  render() {
    return (
      <div>
        <Search state={this.state}/>
        <MovieList movies={this.state.movies}/>
      </div>
    );
  };
};
export default App;