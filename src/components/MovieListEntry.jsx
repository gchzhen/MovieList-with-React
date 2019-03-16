var MovieListEntry = (props) => {
  return (
    <div>
      <div className='movieName'>{props.movie.title}</div>
      <button onClick={props.handleToggle}>add to watched</button>
    </div>
  );
}
export default MovieListEntry;