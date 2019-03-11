import Search from './Search.js';

class App extends React.Component {
  // <MovieList movies={[]} /> self-closing HTML el with props
  constructor (props) {
    super(props);

      this.state = {
        movies: [{title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}],
        currentMovie: null
      };
    };

    render() {
      return (
        <div>


          <nav className="navbar">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <Search
                  handleSearchInputChange={this.state.movies[0].title}
                />
              </div>
            </div>
          </nav>

          <div className="row">

          <div className="col-md-5">
            <div><h4>MovieList</h4></div>
            <MovieList movies={[
            {title: 'Mean Girls'},
            {title: 'Hackers'},
            {title: 'The Grey'},
            {title: 'Sunshine'},
            {title: 'Ex Machina'}
            ]}/>
          </div>

          </div>


        </div>
      );
    };
  };


var MovieList = (props) => {
  console.log(props);
  return  (
    <ul>
      {props.movies.map(movie =>
        <MovieListEntry movie={movie} />
      )}
    </ul>
  );
};

var MovieListEntry = (props) => {
  console.log(props);
  return (
    <ul>
      <li>{props.movie.title}</li>
    </ul>
  );
};
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;