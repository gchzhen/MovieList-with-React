import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => {
  {
    return (
      <div>
      {
        props.movies.map((movie, i) => {
          return <MovieListEntry key={i.toString()} movie={movie} handleToggle={props.handleToggle}/>
        })
      }
      </div>
    )
  }
};

export default MovieList;
