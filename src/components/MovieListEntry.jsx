// import MovieListEntryToggle from './MovieListEntryToggle.js';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
    // props.handleAddToWatched
    this.setNewState = this.setNewState.bind(this);
    // this.state = {
    //   addToWatched: ''
    // }; // now I don't need state to hold the value cz I'm
    // passing it directly to a handleAddToWatched fn
  }

  setNewState(event) {
    this.props.handleAddToWatched(event.target.value); // extracting value from event right here
    // this.setState({addToWatched: event.target.value}, ()=> {
    //   this.props.handleAddToWatched(this.state.addToWatched);
    // });
  }

  render() {
    return (
    <div>
      <div>{this.props.movie.title}</div>
      <button value={this.props.movie.title} onClick={this.setNewState}>WATCHED</button>
      <button value={this.props.movie.title} onClick={this.setNewState}>TO WATCH</button>
      {/* <div id='toggleMovieEntry' class='btn'>To watch</div> */}
    </div>
    )
  }
};

export default MovieListEntry;