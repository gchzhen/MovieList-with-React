import Search from './Search.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // movies: [],
      movies: exampleMovies,
      displayedMovies: exampleMovies,
      unwatchedMovies: exampleMovies,
      watchedMovies: []
    };
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
    this.handleToggleFilter = this.handleToggleFilter.bind(this);
    this.handleAddToWatched = this.handleAddToWatched.bind(this);
    this.handleAddToUnwatched = this.handleAddToUnwatched.bind(this);
  }

  handleSubmitFilter(query) {
    var myMovies = this.state.movies;
    let newList = [];
    for (var i = 0; i < myMovies.length; i++) {
      if (myMovies[i].title.toLowerCase().includes(query.toLowerCase()) === true) {
        newList.push({ "title": myMovies[i].title });
      }
    }
    if (newList.length === 0) {
      alert("No movie by that name found");
    } else {
      this.setState({ displayedMovies: newList }); // to display filtered list
    }
  }

  //here I pass the whole event of the click on that button with value inside the target property
  handleSubmitAdd(e) {
    let newList = this.state.movies;
    newList.push({ 'title': e.target.value });
    this.setState({ movies: newList });
  }

  // this fn adds query to watchedMovies and deletes it from unwatchedMovies
  handleAddToWatched(e) {
    let val = e.target.value;
    function hasMatches(arr, target) {
      let count = 0;
      arr.forEach(movie => {
        if (movie.title === target) {
          count++;
        }
      });
      return count === 1 ? true : false;
    }
    let matches = hasMatches(this.state.watchedMovies, val);
    if (!matches) {
      let newWatchedList = this.state.watchedMovies;
      newWatchedList.push({ 'title': val });
      this.setState({ watchedMovies: newWatchedList });
    }

    let unwatchedList = this.state.unwatchedMovies;
    // by default all movies are unwatched
    if (unwatchedList.length > 0) {
      let newUnwatchedList = [];
      unwatchedList.forEach(movie => {
        if (movie.title !== val) {
          newUnwatchedList.push(movie);
        }
      });
      this.setState({ unwatchedMovies: newUnwatchedList });
    }
  }

  // this fn adds query to unwatchedMovies and deletes it from watchedMovies
  handleAddToUnwatched(e) {
    let val = e.target.value;
    function hasMatches(arr, target) {
      let count = 0;
      arr.forEach(movie => {
        if (movie.title === target) {
          count++;
        }
      });
      return count === 1 ? true : false;
    }
    let matches = hasMatches(this.state.unwatchedMovies, val);
    if (!matches) {
      let newUnwatchedList = this.state.unwatchedMovies;
      newUnwatchedList.push({ 'title': val });
      this.setState({ unwatchedMovies: newUnwatchedList });
    }

    let watchedList = this.state.unwatchedMovies;
    // by default all movies are unwatched
    if (watchedList.length > 0) {
      let newWatchedList = [];
      watchedList.forEach(movie => {
        if (movie.title !== val) {
          newWatchedList.push(movie);
        }
      });
      this.setState({ unwatchedMovies: newWatchedList });
    }
  }

  handleToggleFilter(event) {
    console.log('made it to handleToggleFilter!');
    console.log('arrOfMovies: ', event.target.value);
    console.log(typeof event.target.value);
    if (event.target.value === 'watched') {
      // this.setState({displayedMovies: event.target.value})
      this.setState({ displayedMovies: this.state.watchedMovies });
    } else {
      console.log(this.state.unwatchedMovies);
      this.setState({ displayedMovies: this.state.unwatchedMovies });
    }
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        'search for movie',
        React.createElement(Search, { handleSubmit: this.handleSubmitFilter })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(AddMovie, { handleSubmit: this.handleSubmitAdd })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { value: 'watched', onClick: this.handleToggleFilter },
          'watched'
        ),
        React.createElement(
          'button',
          { value: 'unwatched', onClick: this.handleToggleFilter },
          'to watch'
        )
      ),
      React.createElement(
        'div',
        null,
        React.createElement(MovieList, { displayedMovies: this.state.displayedMovies, handleAddToWatched: this.handleAddToWatched, handleAddToUnwatched: this.handleAddToUnwatched })
      )
    );
  }
};

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwiQWRkTW92aWUiLCJleGFtcGxlTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJkaXNwbGF5ZWRNb3ZpZXMiLCJ1bndhdGNoZWRNb3ZpZXMiLCJ3YXRjaGVkTW92aWVzIiwiaGFuZGxlU3VibWl0QWRkIiwiYmluZCIsImhhbmRsZVN1Ym1pdEZpbHRlciIsImhhbmRsZVRvZ2dsZUZpbHRlciIsImhhbmRsZUFkZFRvV2F0Y2hlZCIsImhhbmRsZUFkZFRvVW53YXRjaGVkIiwicXVlcnkiLCJteU1vdmllcyIsIm5ld0xpc3QiLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCIsImFsZXJ0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ2YWwiLCJoYXNNYXRjaGVzIiwiYXJyIiwiY291bnQiLCJmb3JFYWNoIiwibW92aWUiLCJtYXRjaGVzIiwibmV3V2F0Y2hlZExpc3QiLCJ1bndhdGNoZWRMaXN0IiwibmV3VW53YXRjaGVkTGlzdCIsIndhdGNoZWRMaXN0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQiwwQkFBMUI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxjQUFRUCxhQUZHO0FBR1hRLHVCQUFpQlIsYUFITjtB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QXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmltcG9ydCBBZGRNb3ZpZSBmcm9tICcuL0FkZE1vdmllLmpzJztcbmltcG9ydCBleGFtcGxlTW92aWVzIGZyb20gJy4uL2RhdGEvZXhhbXBsZU1vdmllcy5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBtb3ZpZXM6IFtdLFxuICAgICAgbW92aWVzOiBleGFtcGxlTW92aWVzLFxuICAgICAgZGlzcGxheWVkTW92aWVzOiBleGFtcGxlTW92aWVzLFxuICAgICAgdW53YXRjaGVkTW92aWVzOiBleGFtcGxlTW92aWVzLFxuICAgICAgd2F0Y2hlZE1vdmllczogW10sXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdEFkZCA9IHRoaXMuaGFuZGxlU3VibWl0QWRkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXIgPSB0aGlzLmhhbmRsZVN1Ym1pdEZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlRmlsdGVyPSB0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQWRkVG9XYXRjaGVkID0gdGhpcy5oYW5kbGVBZGRUb1dhdGNoZWQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFkZFRvVW53YXRjaGVkID0gdGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZC5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdEZpbHRlcihxdWVyeSkge1xuICAgIHZhciBteU1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgZm9yICh2YXIgaT0wOyBpPG15TW92aWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChteU1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpID09PSB0cnVlKXtcbiAgICAgICAgbmV3TGlzdC5wdXNoKHtcInRpdGxlXCI6IG15TW92aWVzW2ldLnRpdGxlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKG5ld0xpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgIGFsZXJ0KFwiTm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXllZE1vdmllczogbmV3TGlzdH0pOyAvLyB0byBkaXNwbGF5IGZpbHRlcmVkIGxpc3RcbiAgICB9XG4gIH07XG5cbiAgLy9oZXJlIEkgcGFzcyB0aGUgd2hvbGUgZXZlbnQgb2YgdGhlIGNsaWNrIG9uIHRoYXQgYnV0dG9uIHdpdGggdmFsdWUgaW5zaWRlIHRoZSB0YXJnZXQgcHJvcGVydHlcbiAgaGFuZGxlU3VibWl0QWRkKGUpIHtcbiAgICBsZXQgbmV3TGlzdCA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIG5ld0xpc3QucHVzaCh7J3RpdGxlJzogZS50YXJnZXQudmFsdWV9KTtcbiAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IG5ld0xpc3R9KTtcbiAgfTtcblxuICAvLyB0aGlzIGZuIGFkZHMgcXVlcnkgdG8gd2F0Y2hlZE1vdmllcyBhbmQgZGVsZXRlcyBpdCBmcm9tIHVud2F0Y2hlZE1vdmllc1xuICBoYW5kbGVBZGRUb1dhdGNoZWQoZSkge1xuICAgIGxldCB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBmdW5jdGlvbiBoYXNNYXRjaGVzKGFyciwgdGFyZ2V0KSB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgYXJyLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS50aXRsZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoY291bnQgPT09IDEpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuICAgIGxldCBtYXRjaGVzID0gaGFzTWF0Y2hlcyh0aGlzLnN0YXRlLndhdGNoZWRNb3ZpZXMsIHZhbCk7XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgbmV3V2F0Y2hlZExpc3QgPSB0aGlzLnN0YXRlLndhdGNoZWRNb3ZpZXM7XG4gICAgICBuZXdXYXRjaGVkTGlzdC5wdXNoKHsndGl0bGUnOiB2YWx9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoZWRNb3ZpZXM6IG5ld1dhdGNoZWRMaXN0fSk7XG4gICAgfVxuXG4gIFxuICAgIGxldCB1bndhdGNoZWRMaXN0ID0gdGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXM7XG4gICAgLy8gYnkgZGVmYXVsdCBhbGwgbW92aWVzIGFyZSB1bndhdGNoZWRcbiAgICBpZiAodW53YXRjaGVkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbmV3VW53YXRjaGVkTGlzdCA9IFtdO1xuICAgICAgdW53YXRjaGVkTGlzdC5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgICBpZihtb3ZpZS50aXRsZSAhPT0gdmFsKSB7XG4gICAgICAgICAgbmV3VW53YXRjaGVkTGlzdC5wdXNoKG1vdmllKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Vud2F0Y2hlZE1vdmllczogbmV3VW53YXRjaGVkTGlzdH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyB0aGlzIGZuIGFkZHMgcXVlcnkgdG8gdW53YXRjaGVkTW92aWVzIGFuZCBkZWxldGVzIGl0IGZyb20gd2F0Y2hlZE1vdmllc1xuICBoYW5kbGVBZGRUb1Vud2F0Y2hlZChlKSB7XG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGZ1bmN0aW9uIGhhc01hdGNoZXMoYXJyLCB0YXJnZXQpIHtcbiAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICBhcnIuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKG1vdmllLnRpdGxlID09PSB0YXJnZXQpIHtcbiAgICAgICAgICBjb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIChjb3VudCA9PT0gMSkgPyB0cnVlOiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IG1hdGNoZXMgPSBoYXNNYXRjaGVzKHRoaXMuc3RhdGUudW53YXRjaGVkTW92aWVzLCB2YWwpO1xuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgbGV0IG5ld1Vud2F0Y2hlZExpc3QgPSB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllcztcbiAgICAgIG5ld1Vud2F0Y2hlZExpc3QucHVzaCh7J3RpdGxlJzogdmFsfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt1bndhdGNoZWRNb3ZpZXM6IG5ld1Vud2F0Y2hlZExpc3R9KTtcbiAgICB9XG5cbiAgICBcbiAgICBsZXQgd2F0Y2hlZExpc3QgPSB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllcztcbiAgICAvLyBieSBkZWZhdWx0IGFsbCBtb3ZpZXMgYXJlIHVud2F0Y2hlZFxuICAgIGlmICh3YXRjaGVkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbmV3V2F0Y2hlZExpc3QgPSBbXTtcbiAgICAgIHdhdGNoZWRMaXN0LmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGlmKG1vdmllLnRpdGxlICE9PSB2YWwpIHtcbiAgICAgICAgICBuZXdXYXRjaGVkTGlzdC5wdXNoKG1vdmllKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Vud2F0Y2hlZE1vdmllczogbmV3V2F0Y2hlZExpc3R9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlRmlsdGVyKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ21hZGUgaXQgdG8gaGFuZGxlVG9nZ2xlRmlsdGVyIScpO1xuICAgIGNvbnNvbGUubG9nKCdhcnJPZk1vdmllczogJywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnd2F0Y2hlZCcpIHtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IHRoaXMuc3RhdGUud2F0Y2hlZE1vdmllc30pXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllc30pXG4gICAgfVxuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PnNlYXJjaCBmb3IgbW92aWVcbiAgICAgICAgICA8U2VhcmNoIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFkZE1vdmllIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRBZGR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17J3dhdGNoZWQnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcn0+d2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdmFsdWU9eyd1bndhdGNoZWQnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcn0+dG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1vdmllTGlzdCBkaXNwbGF5ZWRNb3ZpZXM9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSBoYW5kbGVBZGRUb1dhdGNoZWQ9e3RoaXMuaGFuZGxlQWRkVG9XYXRjaGVkfSBoYW5kbGVBZGRUb1Vud2F0Y2hlZD17dGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19