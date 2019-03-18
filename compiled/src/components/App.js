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
    let matches = this.hasMatches(this.state.watchedMovies, val);
    // if watchedMovies does't include this query
    if (!matches) {
      //add to watched
      let newWatchedList = this.state.watchedMovies; // take a copy of the state
      newWatchedList.push({ 'title': val }); // modify it
      this.setState({ watchedMovies: newWatchedList }); // update the state

      // delete from unwatched
      let unwatchedList = this.state.unwatchedMovies;
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
    // if watchedMovies already includes this query - do nothing
  }

  // this fn adds query to unwatchedMovies and deletes it from watchedMovies
  handleAddToUnwatched(e) {
    let val = e.target.value;
    let matches = this.hasMatches(this.state.unwatchedMovies, val);
    // if unwatchedMovies does't include this query
    if (!matches) {
      //add to unwatched
      let newUnwatchedList = this.state.unwatchedMovies;
      newUnwatchedList.push({ 'title': val });
      this.setState({ unwatchedMovies: newUnwatchedList });

      // delete from watched
      let watchedList = this.state.watchedMovies;
      // by default all movies are unwatched
      if (watchedList.length > 0) {
        let newWatchedList = [];
        watchedList.forEach(movie => {
          if (movie.title !== val) {
            newWatchedList.push(movie);
          }
        });
        this.setState({ watchedMovies: newWatchedList });
      }
    }
  }

  // helper function
  hasMatches(arr, target) {
    let count = 0;
    arr.forEach(movie => {
      if (movie.title === target) {
        count++;
      }
    });
    return count === 1 ? true : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwiQWRkTW92aWUiLCJleGFtcGxlTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJkaXNwbGF5ZWRNb3ZpZXMiLCJ1bndhdGNoZWRNb3ZpZXMiLCJ3YXRjaGVkTW92aWVzIiwiaGFuZGxlU3VibWl0QWRkIiwiYmluZCIsImhhbmRsZVN1Ym1pdEZpbHRlciIsImhhbmRsZVRvZ2dsZUZpbHRlciIsImhhbmRsZUFkZFRvV2F0Y2hlZCIsImhhbmRsZUFkZFRvVW53YXRjaGVkIiwicXVlcnkiLCJteU1vdmllcyIsIm5ld0xpc3QiLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCIsImFsZXJ0Iiwic2V0U3RhdGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ2YWwiLCJtYXRjaGVzIiwiaGFzTWF0Y2hlcyIsIm5ld1dhdGNoZWRMaXN0IiwidW53YXRjaGVkTGlzdCIsIm5ld1Vud2F0Y2hlZExpc3QiLCJmb3JFYWNoIiwibW92aWUiLCJ3YXRjaGVkTGlzdCIsImFyciIsImNvdW50IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQiwwQkFBMUI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxjQUFRUCxhQUZHO0FBR1hRLHVCQUFpQlIsYUFITjtB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QWhDO0FBQ0EsUUFBSVksTUFBTWIsTUFBTixDQUFhQyxLQUFiLEtBQXVCLFNBQTNCLEVBQXNDO0FBQ3RDO0FBQ0UsV0FBS0gsUUFBTCxDQUFjLEVBQUNuQixpQkFBaUIsS0FBS0YsS0FBTCxDQUFXSSxhQUE3QixFQUFkO0FBRUQsS0FKRCxNQUlPO0FBQ0xpQyxjQUFRQyxHQUFSLENBQVksS0FBS3RDLEtBQUwsQ0FBV0csZUFBdkI7QUFDQSxXQUFLa0IsUUFBTCxDQUFjLEVBQUNuQixpQkFBaUIsS0FBS0YsS0FBTCxDQUFXRyxlQUE3QixFQUFkO0FBQ0Q7QUFDRjs7QUFHRG9DLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS2hDLGtCQUEzQjtBQURGLE9BREY7QUFJRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsY0FBYyxLQUFLRixlQUE3QjtBQURGLE9BSkY7QUFPRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBUSxPQUFPLFNBQWYsRUFBMEIsU0FBUyxLQUFLRyxrQkFBeEM7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBUSxPQUFPLFdBQWYsRUFBNEIsU0FBUyxLQUFLQSxrQkFBMUM7QUFBQTtBQUFBO0FBRkYsT0FQRjtBQVdFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFNBQUQsSUFBVyxpQkFBaUIsS0FBS1IsS0FBTCxDQUFXRSxlQUF2QyxFQUF3RCxvQkFBb0IsS0FBS08sa0JBQWpGLEVBQXFHLHNCQUFzQixLQUFLQyxvQkFBaEk7QUFERjtBQVhGLEtBREY7QUFpQkQ7QUF6SStCLENBMElqQzs7QUFFRCxlQUFlZixHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcyc7XG5pbXBvcnQgZXhhbXBsZU1vdmllcyBmcm9tICcuLi9kYXRhL2V4YW1wbGVNb3ZpZXMuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gbW92aWVzOiBbXSxcbiAgICAgIG1vdmllczogZXhhbXBsZU1vdmllcyxcbiAgICAgIGRpc3BsYXllZE1vdmllczogZXhhbXBsZU1vdmllcyxcbiAgICAgIHVud2F0Y2hlZE1vdmllczogZXhhbXBsZU1vdmllcyxcbiAgICAgIHdhdGNoZWRNb3ZpZXM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRBZGQgPSB0aGlzLmhhbmRsZVN1Ym1pdEFkZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0RmlsdGVyID0gdGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcj0gdGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFkZFRvV2F0Y2hlZCA9IHRoaXMuaGFuZGxlQWRkVG9XYXRjaGVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZCA9IHRoaXMuaGFuZGxlQWRkVG9VbndhdGNoZWQuYmluZCh0aGlzKTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXRGaWx0ZXIocXVlcnkpIHtcbiAgICB2YXIgbXlNb3ZpZXMgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgICBsZXQgbmV3TGlzdCA9IFtdO1xuICAgIGZvciAodmFyIGk9MDsgaTxteU1vdmllcy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiAobXlNb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG5ld0xpc3QucHVzaCh7XCJ0aXRsZVwiOiBteU1vdmllc1tpXS50aXRsZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihuZXdMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICBhbGVydChcIk5vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IG5ld0xpc3R9KTsgLy8gdG8gZGlzcGxheSBmaWx0ZXJlZCBsaXN0XG4gICAgfVxuICB9O1xuXG4gIC8vaGVyZSBJIHBhc3MgdGhlIHdob2xlIGV2ZW50IG9mIHRoZSBjbGljayBvbiB0aGF0IGJ1dHRvbiB3aXRoIHZhbHVlIGluc2lkZSB0aGUgdGFyZ2V0IHByb3BlcnR5XG4gIGhhbmRsZVN1Ym1pdEFkZChlKSB7XG4gICAgbGV0IG5ld0xpc3QgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgICBuZXdMaXN0LnB1c2goeyd0aXRsZSc6IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBuZXdMaXN0fSk7XG4gIH07XG5cbiAgLy8gdGhpcyBmbiBhZGRzIHF1ZXJ5IHRvIHdhdGNoZWRNb3ZpZXMgYW5kIGRlbGV0ZXMgaXQgZnJvbSB1bndhdGNoZWRNb3ZpZXNcbiAgaGFuZGxlQWRkVG9XYXRjaGVkKGUpIHtcbiAgICBsZXQgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgbGV0IG1hdGNoZXMgPSB0aGlzLmhhc01hdGNoZXModGhpcy5zdGF0ZS53YXRjaGVkTW92aWVzLCB2YWwpO1xuICAgIC8vIGlmIHdhdGNoZWRNb3ZpZXMgZG9lcyd0IGluY2x1ZGUgdGhpcyBxdWVyeVxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgLy9hZGQgdG8gd2F0Y2hlZFxuICAgICAgbGV0IG5ld1dhdGNoZWRMaXN0ID0gdGhpcy5zdGF0ZS53YXRjaGVkTW92aWVzOyAgLy8gdGFrZSBhIGNvcHkgb2YgdGhlIHN0YXRlXG4gICAgICBuZXdXYXRjaGVkTGlzdC5wdXNoKHsndGl0bGUnOiB2YWx9KTsgICAgICAgICAgICAvLyBtb2RpZnkgaXRcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoZWRNb3ZpZXM6IG5ld1dhdGNoZWRMaXN0fSk7IC8vIHVwZGF0ZSB0aGUgc3RhdGVcblxuICAgICAgLy8gZGVsZXRlIGZyb20gdW53YXRjaGVkXG4gICAgICBsZXQgdW53YXRjaGVkTGlzdCA9IHRoaXMuc3RhdGUudW53YXRjaGVkTW92aWVzO1xuICAgICAgaWYgKHVud2F0Y2hlZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbmV3VW53YXRjaGVkTGlzdCA9IFtdO1xuICAgICAgICB1bndhdGNoZWRMaXN0LmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgICAgaWYobW92aWUudGl0bGUgIT09IHZhbCkge1xuICAgICAgICAgICAgbmV3VW53YXRjaGVkTGlzdC5wdXNoKG1vdmllKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3Vud2F0Y2hlZE1vdmllczogbmV3VW53YXRjaGVkTGlzdH0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBpZiB3YXRjaGVkTW92aWVzIGFscmVhZHkgaW5jbHVkZXMgdGhpcyBxdWVyeSAtIGRvIG5vdGhpbmdcbiAgfTtcblxuICAvLyB0aGlzIGZuIGFkZHMgcXVlcnkgdG8gdW53YXRjaGVkTW92aWVzIGFuZCBkZWxldGVzIGl0IGZyb20gd2F0Y2hlZE1vdmllc1xuICBoYW5kbGVBZGRUb1Vud2F0Y2hlZChlKSB7XG4gICAgbGV0IHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIGxldCBtYXRjaGVzID0gdGhpcy5oYXNNYXRjaGVzKHRoaXMuc3RhdGUudW53YXRjaGVkTW92aWVzLCB2YWwpO1xuICAgIC8vIGlmIHVud2F0Y2hlZE1vdmllcyBkb2VzJ3QgaW5jbHVkZSB0aGlzIHF1ZXJ5XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAvL2FkZCB0byB1bndhdGNoZWRcbiAgICAgIGxldCBuZXdVbndhdGNoZWRMaXN0ID0gdGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXM7XG4gICAgICBuZXdVbndhdGNoZWRMaXN0LnB1c2goeyd0aXRsZSc6IHZhbH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dW53YXRjaGVkTW92aWVzOiBuZXdVbndhdGNoZWRMaXN0fSk7XG5cbiAgICAgIC8vIGRlbGV0ZSBmcm9tIHdhdGNoZWRcbiAgICAgIGxldCB3YXRjaGVkTGlzdCA9IHRoaXMuc3RhdGUud2F0Y2hlZE1vdmllcztcbiAgICAgIC8vIGJ5IGRlZmF1bHQgYWxsIG1vdmllcyBhcmUgdW53YXRjaGVkXG4gICAgICBpZiAod2F0Y2hlZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbmV3V2F0Y2hlZExpc3QgPSBbXTtcbiAgICAgICAgd2F0Y2hlZExpc3QuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgICBpZihtb3ZpZS50aXRsZSAhPT0gdmFsKSB7XG4gICAgICAgICAgICBuZXdXYXRjaGVkTGlzdC5wdXNoKG1vdmllKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dhdGNoZWRNb3ZpZXM6IG5ld1dhdGNoZWRMaXN0fSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIGhlbHBlciBmdW5jdGlvblxuICBoYXNNYXRjaGVzKGFyciwgdGFyZ2V0KSB7XG4gICAgbGV0IGNvdW50ID0gMDtcbiAgICBhcnIuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgIGlmIChtb3ZpZS50aXRsZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIGNvdW50Kys7XG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gKGNvdW50ID09PSAxKSA/IHRydWU6IGZhbHNlO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlRmlsdGVyKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ21hZGUgaXQgdG8gaGFuZGxlVG9nZ2xlRmlsdGVyIScpO1xuICAgIGNvbnNvbGUubG9nKCdhcnJPZk1vdmllczogJywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh0eXBlb2YgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnd2F0Y2hlZCcpIHtcbiAgICAvLyB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IGV2ZW50LnRhcmdldC52YWx1ZX0pXG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IHRoaXMuc3RhdGUud2F0Y2hlZE1vdmllc30pXG4gICAgICBcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXMpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllc30pXG4gICAgfVxuICB9O1xuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PnNlYXJjaCBmb3IgbW92aWVcbiAgICAgICAgICA8U2VhcmNoIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXJ9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFkZE1vdmllIGhhbmRsZVN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXRBZGR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiB2YWx1ZT17J3dhdGNoZWQnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcn0+d2F0Y2hlZDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gdmFsdWU9eyd1bndhdGNoZWQnfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcn0+dG8gd2F0Y2g8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1vdmllTGlzdCBkaXNwbGF5ZWRNb3ZpZXM9e3RoaXMuc3RhdGUuZGlzcGxheWVkTW92aWVzfSBoYW5kbGVBZGRUb1dhdGNoZWQ9e3RoaXMuaGFuZGxlQWRkVG9XYXRjaGVkfSBoYW5kbGVBZGRUb1Vud2F0Y2hlZD17dGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7Il19