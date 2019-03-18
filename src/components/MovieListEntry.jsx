// import MovieListEntryToggle from './MovieListEntryToggle.js';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div>
      <div>{this.props.movie.title}</div>
      <button value={this.props.movie.title} onClick={this.props.handleAddToWatched}>WATCHED</button>
      <button value={this.props.movie.title} onClick={this.props.handleAddToUnwatched}>TO WATCH</button>
    </div>
    )
  }
};

export default MovieListEntry;