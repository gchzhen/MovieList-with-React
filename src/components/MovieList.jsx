import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => {
  {
    console.log(props);
    return (
      <div>
      {
        props.displayedMovies.map((movie, i) => {
          return <MovieListEntry key={i.toString()} movie={movie} handleAddToWatched={props.handleAddToWatched} handleAddToUnwatched={props.handleAddToUnwatched}/>
        })
      }
      </div>
    )
  }
};

export default MovieList;
