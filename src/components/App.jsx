var App = () => (
  // <MovieList movies={[]} /> self-closing HTML el with props
  <div>
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
);

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
