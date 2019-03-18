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

  // this fn adds query to unwatchedMovies and deletes it from watchedMovies
  handleAddToUnwatched(query) {
    function hasMatches(arr, target) {
      let count = 0;
      arr.forEach(movie => {
        if (movie.title === target) {
          count++;
        }
      });
      return count === 1 ? true : false;
    }
    let matches = hasMatches(this.state.unwatchedMovies, query);
    if (!matches) {
      let newUnwatchedList = this.state.unwatchedMovies;
      newUnwatchedList.push({ 'title': query });
      this.setState({ unwatchedMovies: newUnwatchedList });
    }

    let watchedList = this.state.unwatchedMovies;
    // by default all movies are unwatched
    if (watchedList.length > 0) {
      let newWatchedList = [];
      watchedList.forEach(movie => {
        if (movie.title !== query) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwiQWRkTW92aWUiLCJleGFtcGxlTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJkaXNwbGF5ZWRNb3ZpZXMiLCJ1bndhdGNoZWRNb3ZpZXMiLCJ3YXRjaGVkTW92aWVzIiwiaGFuZGxlU3VibWl0QWRkIiwiYmluZCIsImhhbmRsZVN1Ym1pdEZpbHRlciIsImhhbmRsZVRvZ2dsZUZpbHRlciIsImhhbmRsZUFkZFRvV2F0Y2hlZCIsInF1ZXJ5IiwibXlNb3ZpZXMiLCJuZXdMaXN0IiwiaSIsImxlbmd0aCIsInRpdGxlIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInB1c2giLCJhbGVydCIsInNldFN0YXRlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGFzTWF0Y2hlcyIsImFyciIsImNvdW50IiwiZm9yRWFjaCIsIm1vdmllIiwibWF0Y2hlcyIsIm5ld1dhdGNoZWRMaXN0IiwidW53YXRjaGVkTGlzdCIsIm5ld1Vud2F0Y2hlZExpc3QiLCJoYW5kbGVBZGRUb1Vud2F0Y2hlZCIsIndhdGNoZWRMaXN0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQiwwQkFBMUI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxjQUFRUCxhQUZHO0FBR1hRLHVCQUFpQlIsYUFITjtBQUlYUyx1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LFFBQUlZLE1BQU1iLE1BQU4sQ0FBYUMsS0FBYixLQUF1QixTQUEzQixFQUFzQztBQUN0QztBQUNFLFdBQUtILFFBQUwsQ0FBYyxFQUFDbEIsaUJBQWlCLEtBQUtGLEtBQUwsQ0FBV0ksYUFBN0IsRUFBZDtBQUVELEtBSkQsTUFJTztBQUNMZ0MsY0FBUUMsR0FBUixDQUFZLEtBQUtyQyxLQUFMLENBQVdHLGVBQXZCO0FBQ0EsV0FBS2lCLFFBQUwsQ0FBYyxFQUFDbEIsaUJBQWlCLEtBQUtGLEtBQUwsQ0FBV0csZUFBN0IsRUFBZDtBQUNEO0FBQ0Y7O0FBR0RtQyxXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUNFLDRCQUFDLE1BQUQsSUFBUSxjQUFjLEtBQUsvQixrQkFBM0I7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsUUFBRCxJQUFVLGNBQWMsS0FBS0YsZUFBN0I7QUFERixPQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsT0FBTyxTQUFmLEVBQTBCLFNBQVMsS0FBS0csa0JBQXhDO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQVEsT0FBTyxXQUFmLEVBQTRCLFNBQVMsS0FBS0Esa0JBQTFDO0FBQUE7QUFBQTtBQUZGLE9BUEY7QUFXRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxTQUFELElBQVcsaUJBQWlCLEtBQUtSLEtBQUwsQ0FBV0UsZUFBdkMsRUFBd0Qsb0JBQW9CLEtBQUtPLGtCQUFqRixFQUFxRyxzQkFBc0IsS0FBS3dCLG9CQUFoSTtBQURGO0FBWEYsS0FERjtBQWlCRDtBQTFJK0IsQ0EySWpDOztBQUVELGVBQWV0QyxHQUFmIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2guanMnO1xuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuL01vdmllTGlzdC5qcyc7XG5pbXBvcnQgQWRkTW92aWUgZnJvbSAnLi9BZGRNb3ZpZS5qcyc7XG5pbXBvcnQgZXhhbXBsZU1vdmllcyBmcm9tICcuLi9kYXRhL2V4YW1wbGVNb3ZpZXMuanMnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gbW92aWVzOiBbXSxcbiAgICAgIG1vdmllczogZXhhbXBsZU1vdmllcyxcbiAgICAgIGRpc3BsYXllZE1vdmllczogZXhhbXBsZU1vdmllcyxcbiAgICAgIHVud2F0Y2hlZE1vdmllczogZXhhbXBsZU1vdmllcyxcbiAgICAgIHdhdGNoZWRNb3ZpZXM6IFtdLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRBZGQgPSB0aGlzLmhhbmRsZVN1Ym1pdEFkZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0RmlsdGVyID0gdGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZUZpbHRlcj0gdGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUFkZFRvV2F0Y2hlZCA9IHRoaXMuaGFuZGxlQWRkVG9XYXRjaGVkLmJpbmQodGhpcyk7XG4gICAgLy8gdGhpcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZCA9IHRoaXMuaGFuZGxlQWRkVG9VbndhdGNoZWQuYmluZCh0aGlzKTtcbiAgfTtcblxuICBoYW5kbGVTdWJtaXRGaWx0ZXIocXVlcnkpIHtcbiAgICB2YXIgbXlNb3ZpZXMgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgICBsZXQgbmV3TGlzdCA9IFtdO1xuICAgIGZvciAodmFyIGk9MDsgaTxteU1vdmllcy5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiAobXlNb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG5ld0xpc3QucHVzaCh7XCJ0aXRsZVwiOiBteU1vdmllc1tpXS50aXRsZX0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihuZXdMaXN0Lmxlbmd0aCA9PT0gMCl7XG4gICAgICBhbGVydChcIk5vIG1vdmllIGJ5IHRoYXQgbmFtZSBmb3VuZFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtkaXNwbGF5ZWRNb3ZpZXM6IG5ld0xpc3R9KTsgLy8gdG8gZGlzcGxheSBmaWx0ZXJlZCBsaXN0XG4gICAgfVxuICB9O1xuXG4gIC8vaGVyZSBJIHBhc3MgdGhlIHdob2xlIGV2ZW50IG9mIHRoZSBjbGljayBvbiB0aGF0IGJ1dHRvbiB3aXRoIHZhbHVlIGluc2lkZSB0aGUgdGFyZ2V0IHByb3BlcnR5XG4gIGhhbmRsZVN1Ym1pdEFkZChlKSB7XG4gICAgbGV0IG5ld0xpc3QgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgICBuZXdMaXN0LnB1c2goeyd0aXRsZSc6IGUudGFyZ2V0LnZhbHVlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOiBuZXdMaXN0fSk7XG4gIH07XG5cbiAgLy8gdGhpcyBmbiBhZGRzIHF1ZXJ5IHRvIHdhdGNoZWRNb3ZpZXMgYW5kIGRlbGV0ZXMgaXQgZnJvbSB1bndhdGNoZWRNb3ZpZXNcbiAgaGFuZGxlQWRkVG9XYXRjaGVkKHF1ZXJ5KSB7XG4gICAgZnVuY3Rpb24gaGFzTWF0Y2hlcyhhcnIsIHRhcmdldCkge1xuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGFyci5mb3JFYWNoKChtb3ZpZSkgPT4ge1xuICAgICAgICBpZiAobW92aWUudGl0bGUgPT09IHRhcmdldCkge1xuICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICByZXR1cm4gKGNvdW50ID09PSAxKSA/IHRydWU6IGZhbHNlO1xuICAgIH1cbiAgICBsZXQgbWF0Y2hlcyA9IGhhc01hdGNoZXModGhpcy5zdGF0ZS53YXRjaGVkTW92aWVzLCBxdWVyeSk7XG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICBsZXQgbmV3V2F0Y2hlZExpc3QgPSB0aGlzLnN0YXRlLndhdGNoZWRNb3ZpZXM7XG4gICAgICBuZXdXYXRjaGVkTGlzdC5wdXNoKHsndGl0bGUnOiBxdWVyeX0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7d2F0Y2hlZE1vdmllczogbmV3V2F0Y2hlZExpc3R9KTtcbiAgICB9XG5cbiAgXG4gICAgbGV0IHVud2F0Y2hlZExpc3QgPSB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllcztcbiAgICAvLyBieSBkZWZhdWx0IGFsbCBtb3ZpZXMgYXJlIHVud2F0Y2hlZFxuICAgIGlmICh1bndhdGNoZWRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBuZXdVbndhdGNoZWRMaXN0ID0gW107XG4gICAgICB1bndhdGNoZWRMaXN0LmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGlmKG1vdmllLnRpdGxlICE9PSBxdWVyeSkge1xuICAgICAgICAgIG5ld1Vud2F0Y2hlZExpc3QucHVzaChtb3ZpZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHt1bndhdGNoZWRNb3ZpZXM6IG5ld1Vud2F0Y2hlZExpc3R9KTtcbiAgICB9XG4gIH07XG5cbiAgLy8gdGhpcyBmbiBhZGRzIHF1ZXJ5IHRvIHVud2F0Y2hlZE1vdmllcyBhbmQgZGVsZXRlcyBpdCBmcm9tIHdhdGNoZWRNb3ZpZXNcbiAgaGFuZGxlQWRkVG9VbndhdGNoZWQocXVlcnkpIHtcbiAgICBmdW5jdGlvbiBoYXNNYXRjaGVzKGFyciwgdGFyZ2V0KSB7XG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgYXJyLmZvckVhY2goKG1vdmllKSA9PiB7XG4gICAgICAgIGlmIChtb3ZpZS50aXRsZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgICAgY291bnQrKztcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiAoY291bnQgPT09IDEpID8gdHJ1ZTogZmFsc2U7XG4gICAgfVxuICAgIGxldCBtYXRjaGVzID0gaGFzTWF0Y2hlcyh0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllcywgcXVlcnkpO1xuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgbGV0IG5ld1Vud2F0Y2hlZExpc3QgPSB0aGlzLnN0YXRlLnVud2F0Y2hlZE1vdmllcztcbiAgICAgIG5ld1Vud2F0Y2hlZExpc3QucHVzaCh7J3RpdGxlJzogcXVlcnl9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Vud2F0Y2hlZE1vdmllczogbmV3VW53YXRjaGVkTGlzdH0pO1xuICAgIH1cblxuICAgIFxuICAgIGxldCB3YXRjaGVkTGlzdCA9IHRoaXMuc3RhdGUudW53YXRjaGVkTW92aWVzO1xuICAgIC8vIGJ5IGRlZmF1bHQgYWxsIG1vdmllcyBhcmUgdW53YXRjaGVkXG4gICAgaWYgKHdhdGNoZWRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCBuZXdXYXRjaGVkTGlzdCA9IFtdO1xuICAgICAgd2F0Y2hlZExpc3QuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgaWYobW92aWUudGl0bGUgIT09IHF1ZXJ5KSB7XG4gICAgICAgICAgbmV3V2F0Y2hlZExpc3QucHVzaChtb3ZpZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0aGlzLnNldFN0YXRlKHt1bndhdGNoZWRNb3ZpZXM6IG5ld1dhdGNoZWRMaXN0fSk7XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZVRvZ2dsZUZpbHRlcihldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdtYWRlIGl0IHRvIGhhbmRsZVRvZ2dsZUZpbHRlciEnKTtcbiAgICBjb25zb2xlLmxvZygnYXJyT2ZNb3ZpZXM6ICcsIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2codHlwZW9mIGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gJ3dhdGNoZWQnKSB7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheWVkTW92aWVzOiBldmVudC50YXJnZXQudmFsdWV9KVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzcGxheWVkTW92aWVzOiB0aGlzLnN0YXRlLndhdGNoZWRNb3ZpZXN9KVxuICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudW53YXRjaGVkTW92aWVzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc3BsYXllZE1vdmllczogdGhpcy5zdGF0ZS51bndhdGNoZWRNb3ZpZXN9KVxuICAgIH1cbiAgfTtcblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5zZWFyY2ggZm9yIG1vdmllXG4gICAgICAgICAgPFNlYXJjaCBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0RmlsdGVyfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRNb3ZpZSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0QWRkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdmFsdWU9eyd3YXRjaGVkJ30gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXJ9PndhdGNoZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIHZhbHVlPXsndW53YXRjaGVkJ30gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXJ9PnRvIHdhdGNoPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNb3ZpZUxpc3QgZGlzcGxheWVkTW92aWVzPXt0aGlzLnN0YXRlLmRpc3BsYXllZE1vdmllc30gaGFuZGxlQWRkVG9XYXRjaGVkPXt0aGlzLmhhbmRsZUFkZFRvV2F0Y2hlZH0gaGFuZGxlQWRkVG9VbndhdGNoZWQ9e3RoaXMuaGFuZGxlQWRkVG9VbndhdGNoZWR9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ==