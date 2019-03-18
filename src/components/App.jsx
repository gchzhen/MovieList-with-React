import Search from './Search.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      // movies: [],
      movies: exampleMovies,
      displayedMovies: exampleMovies,
      unwatchedMovies: exampleMovies,
      watchedMovies: [],
    };
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
    this.handleToggleFilter= this.handleToggleFilter.bind(this);
    this.handleAddToWatched = this.handleAddToWatched.bind(this);
    this.handleAddToUnwatched = this.handleAddToUnwatched.bind(this);
  };

  handleSubmitFilter(query) {
    var myMovies = this.state.movies;
    let newList = [];
    for (var i=0; i<myMovies.length; i++){
      if (myMovies[i].title.toLowerCase().includes(query.toLowerCase()) === true){
        newList.push({"title": myMovies[i].title});
      }
    }
    if(newList.length === 0){
      alert("No movie by that name found");
    }
    else {
      this.setState({displayedMovies: newList}); // to display filtered list
    }
  };

  //here I pass the whole event of the click on that button with value inside the target property
  handleSubmitAdd(e) {
    let newList = this.state.movies;
    newList.push({'title': e.target.value});
    this.setState({movies: newList});
  };

  // this fn adds query to watchedMovies and deletes it from unwatchedMovies
  handleAddToWatched(e) {
    let val = e.target.value;
    let matches = this.hasMatches(this.state.watchedMovies, val);
    // if watchedMovies does't include this query
    if (!matches) {
      //add to watched
      let newWatchedList = this.state.watchedMovies;  // take a copy of the state
      newWatchedList.push({'title': val});            // modify it
      this.setState({watchedMovies: newWatchedList}); // update the state

      // delete from unwatched
      let unwatchedList = this.state.unwatchedMovies;
      if (unwatchedList.length > 0) {
        let newUnwatchedList = [];
        unwatchedList.forEach((movie) => {
          if(movie.title !== val) {
            newUnwatchedList.push(movie);
          }
        })
        this.setState({unwatchedMovies: newUnwatchedList});
      }
    }
    // if watchedMovies already includes this query - do nothing
  };

  // this fn adds query to unwatchedMovies and deletes it from watchedMovies
  handleAddToUnwatched(e) {
    let val = e.target.value;
    let matches = this.hasMatches(this.state.unwatchedMovies, val);
    // if unwatchedMovies does't include this query
    if (!matches) {
      //add to unwatched
      let newUnwatchedList = this.state.unwatchedMovies;
      newUnwatchedList.push({'title': val});
      this.setState({unwatchedMovies: newUnwatchedList});

      // delete from watched
      let watchedList = this.state.watchedMovies;
      // by default all movies are unwatched
      if (watchedList.length > 0) {
        let newWatchedList = [];
        watchedList.forEach((movie) => {
          if(movie.title !== val) {
            newWatchedList.push(movie);
          }
        })
        this.setState({watchedMovies: newWatchedList});
      }
    }
  };

  // helper function
  hasMatches(arr, target) {
    let count = 0;
    arr.forEach((movie) => {
      if (movie.title === target) {
        count++;
      }
    })
    return (count === 1) ? true: false;
  }

  handleToggleFilter(event) {
    console.log('made it to handleToggleFilter!');
    console.log('arrOfMovies: ', event.target.value);
    console.log(typeof event.target.value);
    if (event.target.value === 'watched') {
    // this.setState({displayedMovies: event.target.value})
      this.setState({displayedMovies: this.state.watchedMovies})
      
    } else {
      console.log(this.state.unwatchedMovies);
      this.setState({displayedMovies: this.state.unwatchedMovies})
    }
  };


  render() {
    return (
      <div>
        <div>search for movie
          <Search handleSubmit={this.handleSubmitFilter}/>
        </div>
        <div>
          <AddMovie handleSubmit={this.handleSubmitAdd}/>
        </div>
        <div>
          <button value={'watched'} onClick={this.handleToggleFilter}>watched</button>
          <button value={'unwatched'} onClick={this.handleToggleFilter}>to watch</button>
        </div>
        <div>
          <MovieList displayedMovies={this.state.displayedMovies} handleAddToWatched={this.handleAddToWatched} handleAddToUnwatched={this.handleAddToUnwatched}/>
        </div>
      </div>
    );
  };
};

export default App;