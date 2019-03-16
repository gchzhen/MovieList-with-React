import Search from './Search.js';
import MovieList from './MovieList.js';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  // <MovieList movies={[]} /> self-closing HTML el with props
  constructor(props) {
    super(props);

    this.state = {
      movies: exampleMovies
    };
    // this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.movies);
  //   event.preventDefault();
  // }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Search, { state: this.state }),
      React.createElement(MovieList, { movies: this.state.movies })
    );
  }
};
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwiZXhhbXBsZU1vdmllcyIsIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibW92aWVzIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxhQUFQLE1BQTBCLDBCQUExQjs7QUFFQSxNQUFNQyxHQUFOLFNBQWtCQyxNQUFNQyxTQUF4QixDQUFrQztBQUNoQztBQUNBQyxjQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFVBQU1BLEtBQU47O0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVFQO0FBREcsS0FBYjtBQUdBO0FBQ0E7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQVEsV0FBUztBQUNQLFdBQ0U7QUFBQTtBQUFBO0FBQ0UsMEJBQUMsTUFBRCxJQUFRLE9BQU8sS0FBS0YsS0FBcEIsR0FERjtBQUVFLDBCQUFDLFNBQUQsSUFBVyxRQUFRLEtBQUtBLEtBQUwsQ0FBV0MsTUFBOUI7QUFGRixLQURGO0FBTUQ7QUF4QitCLENBeUJqQztBQUNELGVBQWVOLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmltcG9ydCBleGFtcGxlTW92aWVzIGZyb20gJy4uL2RhdGEvZXhhbXBsZU1vdmllcy5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIDxNb3ZpZUxpc3QgbW92aWVzPXtbXX0gLz4gc2VsZi1jbG9zaW5nIEhUTUwgZWwgd2l0aCBwcm9wc1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVzOiBleGFtcGxlTW92aWVzXG4gICAgfTtcbiAgICAvLyB0aGlzLmhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyID0gdGhpcy5oYW5kbGVDaGFuZ2VPZlRleHRJblNlYXJjaEJhci5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfTtcblxuICAvLyBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgLy8gICBhbGVydCgnQSBuYW1lIHdhcyBzdWJtaXR0ZWQ6ICcgKyB0aGlzLnN0YXRlLm1vdmllcyk7XG4gIC8vICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPFNlYXJjaCBzdGF0ZT17dGhpcy5zdGF0ZX0vPlxuICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17dGhpcy5zdGF0ZS5tb3ZpZXN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==