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
    // this.handleAddToUnwatched = this.handleAddToUnwatched.bind(this);
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
  handleAddToWatched(query) {
    function hasMatches(arr, target) {
      let count = 0;
      arr.forEach(movie => {
        if (movie.title === target) {
          count++;
        }
      });
      return count === 1 ? true : false;
    }
    let matches = hasMatches(this.state.watchedMovies, query);
    if (!matches) {
      let newWatchedList = this.state.watchedMovies;
      newWatchedList.push({ 'title': query });
      this.setState({ watchedMovies: newWatchedList });
    }

    let unwatchedList = this.state.unwatchedMovies;
    // by default all movies are unwatched
    if (unwatchedList.length > 0) {
      let newUnwatchedList = [];
      unwatchedList.forEach(movie => {
        if (movie.title !== query) {
          newUnwatchedList.push(movie);
        }
      });
      this.setState({ unwatchedMovies: newUnwatchedList });
    }
  }

  // this fn adds query to watchedMovies and deletes it from unwatchedMovies
  // handleToggleFn(query) {
  //   function hasMatches(arr, target) {
  //     let count = 0;
  //     arr.forEach((movie) => {
  //       if (movie.title === target) {
  //         count++;
  //       }
  //     })
  //     return (count === 1) ? true: false;
  //   }
  //   let matches = hasMatches(this.state.watchedMovies, query);
  //   if (!matches) {
  //     let newWatchedList = this.state.watchedMovies;
  //     newWatchedList.push({'title': query});
  //     this.setState({watchedMovies: newWatchedList});
  //     console.log(`watchedMovies after: ${query}`);
  //   }

  //   let newUnwatchedList = [];
  //   let unwatchedList = this.state.unwatchedMovies;
  //   // by default all movies are unwatched
  //   if (unwatchedList.length > 0) {
  //     unwatchedList.forEach((movie) => {
  //       if(movie.title !== query) {
  //         newUnwatchedList.push(movie);
  //       }
  //     })
  //     this.setState({unwatchedMovies: newUnwatchedList});
  //   }
  // };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwiQWRkTW92aWUiLCJleGFtcGxlTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJkaXNwbGF5ZWRNb3ZpZXMiLCJ1bndhdGNoZWRNb3ZpZXMiLCJ3YXRjaGVkTW92aWVzIiwiaGFuZGxlU3VibWl0QWRkIiwiYmluZCIsImhhbmRsZVN1Ym1pdEZpbHRlciIsImhhbmRsZVRvZ2dsZUZpbHRlciIsImhhbmRsZUFkZFRvV2F0Y2hlZCIsInF1ZXJ5IiwibXlNb3ZpZXMiLCJuZXdMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInB1c2giLCJhbGVydCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFzTWF0Y2hlcyIsImFyciIsImNvdW50IiwiZm9yRWFjaCIsIm1vdmllIiwibWF0Y2hlcyIsIm5ld1dhdGNoZWRMaXN0IiwidW53YXRjaGVkTGlzdCIsIm5ld1Vud2F0Y2hlZExpc3QiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJoYW5kbGVBZGRUb1Vud2F0Y2hlZCJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBT0EsTUFBUCxNQUFtQixhQUFuQjtBQUNBLE9BQU9DLFNBQVAsTUFBc0IsZ0JBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQixlQUFyQjtBQUNBLE9BQU9DLGFBQVAsTUFBMEIsMEJBQTFCOztBQUVBLE1BQU1DLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWtDO0FBQ2hDQyxjQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFVBQU1BLEtBQU47O0FBRUEsU0FBS0MsS0FBTCxHQUFhO0FBQ1g7QUFDQUMsY0FBUVAsYUFGRztBQUdYUSx1QkFBaUJSLGFBSE47QUFJWFMsdUJBQWlCVCxhQUpOO0FB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RCxvQkFBb0IsS0FBS08sa0JBQWpGLEVBQXFHLHNCQUFzQixLQUFLNEIsb0JBQWhJO0FBREY7QUFYRixLQURGO0FBaUJEO0FBMUkrQixDQTJJakM7O0FBRUQsZUFBZTFDLEdBQWYiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qcyc7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4vTW92aWVMaXN0LmpzJztcbmltcG9ydCBBZGRNb3ZpZSBmcm9tICcuL0FkZE1vdmllLmpzJztcbmltcG9ydCBleGFtcGxlTW92aWVzIGZyb20gJy4uL2RhdGEvZXhhbXBsZU1vdmllcy5qcyc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAvLyBtb3ZpZXM6IFtdLFxuICAgICAgbW92aWVzOiBleGFtcGxlTW92aWVzLFxuICAgICAgZGlzcGxheWVkTW92aWVzOiBleGFtcGxlTW92aWVzLFxuICAgICAgdW53YXRjaGVkTW92aWVzOiBleGFtcGxlTW92aWVzLFxuICAgICAgd2F0Y2hlZE1vdmllczogW10sXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdEFkZCA9IHRoaXMuaGFuZGxlU3VibWl0QWRkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXIgPSB0aGlzLmhhbmRsZVN1Ym1pdEZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlVG9nZ2xlRmlsdGVyPSB0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQWRkVG9XYXRjaGVkID0gdGhpcy5oYW5kbGVBZGRUb1dhdGNoZWQuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLmhhbmRsZUFkZFRvVW53YXRjaGVkID0gdGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZC5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdEZpbHRlcihxdWVyeSkge1xuICAgIHZhciBteU1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIGxldCBuZXdMaXN0ID0gW107XG4gICAgZm9yICh2YXIgaT0wOyBpPG15TW92aWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIGlmIChteU1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpID09PSB0cnVlKXtcbiAgICAgICAgbmV3TGlzdC5wdXNoKHtcInRpdGxlXCI6IG15TW92aWVzW2ldLnRpdGxlfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKG5ld0xpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgIGFsZXJ0KFwiTm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXllZE1vdmllczogbmV3TGlzdH0pOyAvLyB0byBkaXNwbGF5IGZpbHRlcmVkIGxpc3RcbiAgICB9XG4gIH07XG5cbiAgLy9oZXJlIEkgcGFzcyB0aGUgd2hvbGUgZXZlbnQgb2YgdGhlIGNsaWNrIG9uIHRoYXQgYnV0dG9uIHdpdGggdmFsdWUgaW5zaWRlIHRoZSB0YXJnZXQgcHJvcGVydHlcbiAgaGFuZGxlU3VibWl0QWRkKGUpIHtcbiAgICBsZXQgbmV3TGlzdCA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIG5ld0xpc3QucHVzaCh7J3RpdGxlJzogZS50YXJnZXQudmFsdWV9KTtcbiAgICB0aGlzLnNldFN0YXRlKHttb3ZpZXM6IG5ld0xpc3R9KTtcbiAgfTtcblxuICAvLyB0aGlzIGZuIGFkZHMgcXVlcnkgdG8gd2F0Y2hlZE1vdmllcyBhbmQgZGVsZXRlcyBpdCBmcm9tIHVud2F0Y2hlZE1vdmllc1xuICBoYW5kbGVBZGRUb1dhdGNoZWQocXVlcnkpIHtcbiAgICBmdW5jdGlvbiBoYXNNYXRjaGVzKGFyciwgdGFyZ2V0KSB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgYXJyLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS50aXRsZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoY291bnQgPT09IDEpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuICAgIGxldCBtYXRjaGVzID0gaGFzTWF0Y2hlcyh0aGlzLnN0YXRlLndhdGNoZWRNb3ZpZXMsIHF1ZXJ5KTtcbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIGxldCBuZXdXYXRjaGVkTGlzdCA9IHRoaXMuc3RhdGUud2F0Y2hlZE1vdmllcztcbiAgICAgIG5ld1dhdGNoZWRMaXN0LnB1c2goeyd0aXRsZSc6IHF1ZXJ5fSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt3YXRjaGVkTW92aWVzOiBuZXdXYXRjaGVkTGlzdH0pO1xuICAgIH1cblxuICBcbiAgICBsZXQgdW53YXRjaGVkTGlzdCA9IHRoaXMuc3RhdGUudW53YXRjaGVkTW92aWVzO1xuICAgIC8vIGJ5IGRlZmF1bHQgYWxsIG1vdmllcyBhcmUgdW53YXRjaGVkXG4gICAgaWYgKHVud2F0Y2hlZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IG5ld1Vud2F0Y2hlZExpc3QgPSBbXTtcbiAgICAgIHVud2F0Y2hlZExpc3QuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgaWYobW92aWUudGl0bGUgIT09IHF1ZXJ5KSB7XG4gICAgICAgICAgbmV3VW53YXRjaGVkTGlzdC5wdXNoKG1vdmllKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Vud2F0Y2hlZE1vdmllczogbmV3VW53YXRjaGVkTGlzdH0pO1xuICAgIH1cbiAgfTtcblxuICAvLyB0aGlzIGZuIGFkZHMgcXVlcnkgdG8gd2F0Y2hlZE1vdmllcyBhbmQgZGVsZXRlcyBpdCBmcm9tIHVud2F0Y2hlZE1vdmllc1xuICAvLyBoYW5kbGVUb2dnbGVGbihxdWVyeSkge1xuICAvLyAgIGZ1bmN0aW9uIGhhc01hdGNoZXMoYXJyLCB0YXJnZXQpIHtcbiAgLy8gICAgIGxldCBjb3VudCA9IDA7XG4gIC8vICAgICBhcnIuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgLy8gICAgICAgaWYgKG1vdmllLnRpdGxlID09PSB0YXJnZXQpIHtcbiAgLy8gICAgICAgICBjb3VudCsrO1xuICAvLyAgICAgICB9XG4gIC8vICAgICB9KVxuICAvLyAgICAgcmV0dXJuIChjb3VudCA9PT0gMSkgPyB0cnVlOiBmYWxzZTtcbiAgLy8gICB9XG4gIC8vICAgbGV0IG1hdGNoZXMgPSBoYXNNYXRjaGVzKHRoaXMuc3RhdGUud2F0Y2hlZE1vdmllcywgcXVlcnkpO1xuICAvLyAgIGlmICghbWF0Y2hlcykge1xuICAvLyAgICAgbGV0IG5ld1dhdGNoZWRMaXN0ID0gdGhpcy5zdGF0ZS53YXRjaGVkTW92aWVzO1xuICAvLyAgICAgbmV3V2F0Y2hlZExpc3QucHVzaCh7J3RpdGxlJzogcXVlcnl9KTtcbiAgLy8gICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoZWRNb3ZpZXM6IG5ld1dhdGNoZWRMaXN0fSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhgd2F0Y2hlZE1vdmllcyBhZnRlcjogJHtxdWVyeX1gKTtcbiAgLy8gICB9XG5cbiAgLy8gICBsZXQgbmV3VW53YXRjaGVkTGlzdCA9IFtdO1xuICAvLyAgIGxldCB1bndhdGNoZWRMaXN0ID0gdGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXM7XG4gIC8vICAgLy8gYnkgZGVmYXVsdCBhbGwgbW92aWVzIGFyZSB1bndhdGNoZWRcbiAgLy8gICBpZiAodW53YXRjaGVkTGlzdC5sZW5ndGggPiAwKSB7XG4gIC8vICAgICB1bndhdGNoZWRMaXN0LmZvckVhY2goKG1vdmllKSA9PiB7XG4gIC8vICAgICAgIGlmKG1vdmllLnRpdGxlICE9PSBxdWVyeSkge1xuICAvLyAgICAgICAgIG5ld1Vud2F0Y2hlZExpc3QucHVzaChtb3ZpZSk7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pXG4gIC8vICAgICB0aGlzLnNldFN0YXRlKHt1bndhdGNoZWRNb3ZpZXM6IG5ld1Vud2F0Y2hlZExpc3R9KTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgaGFuZGxlVG9nZ2xlRmlsdGVyKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ21hZGUgaXQgdG8gaGFuZGxlVG9nZ2xlRmlsdGVyIScpO1xuICAgIGNvbnNvbGUubG9nKCdhcnJPZk1vdmllczogJywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnd2F0Y2hlZCcpIHtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IHRoaXMuc3RhdGUud2F0Y2hlZE1vdmllc30pXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllc30pXG4gICAgfVxuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PnNlYXJjaCBmb3IgbW92aWVcbiAgICAgICAgICA8U2VhcmNoIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFkZE1vdmllIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRBZGR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17J3dhdGNoZWQnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcn0+d2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdmFsdWU9eyd1bndhdGNoZWQnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcn0+dG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1vdmllTGlzdCBkaXNwbGF5ZWRNb3ZpZXM9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSBoYW5kbGVBZGRUb1dhdGNoZWQ9e3RoaXMuaGFuZGxlQWRkVG9XYXRjaGVkfSBoYW5kbGVBZGRUb1Vud2F0Y2hlZD17dGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19