import Search from './Search.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      //movies: exampleMovies
      movies: [],
      isWatched: false
    };
    this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleToggleFn = this.handleToggleFn.bind(this);
  };

  handleSubmitFilter(query) {
    /*everything what is commented below - was when I passed down handleSubmit from App and onClick down the
    tree in the Search invoked this App's handleSubmitFilter function. ?????????????????/   And now I just pass the query*/
    // handleSubmitFilter(event) {
    // console.log('event: ', event);
    console.log('query: ', query);
    console.log('what is state?', this.state); // why am I consoling out the state here? AAAAAAAAAAAAAA

    var mymovies = this.state.movies;
    var newlist = [];
    for (var i=0; i<mymovies.length; i++){
      // if (mymovies[i].title.toLowerCase().includes(event.target.value.toLowerCase()) === true){
      if (mymovies[i].title.toLowerCase().includes(query.toLowerCase()) === true){
        newlist.push({"title": mymovies[i].title});
      }
    }

    if(newlist.length === 0){
      alert("No movie by that name found");
    }
    else{
      this.setState({movies:newlist});
    } // after filtering moviesArr will only have mathcing with query movies inside
  }

  // handleSubmitAdd(event) {
  handleSubmitAdd(event) {
    var newlist = this.state.movies;
    newlist.push({"title": event.target.value});
    this.setState({movies:newlist});
  }

  handleToggleFn(event) {
    console.log('toggle working!');
    var beforeToggle = this.state.isWatched;
    console.log(beforeToggle);
    this.setState({isWatched: !beforeToggle});
    console.log('what is state?', this.state);
  }

  render() {
    return (
      <div>
        <div>
          <AddMovie handleSubmit={this.handleSubmitAdd}/>
        </div>
        <div>
          <Search handleSubmit={this.handleSubmitFilter}/>
          <MovieList movies={this.state.movies} handleToggle={this.handleToggleFn}/>
        </div>
      </div>
    );
  };
};
export default App;
