import Search from './Search.js';
import MovieList from './MovieList.js';
import AddMovie from './AddMovie.js';
import exampleMovies from '../data/exampleMovies.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //movies: exampleMovies
      movies: [],
      isWatched: false
    };
    this.handleSubmitFilter = this.handleSubmitFilter.bind(this);
    this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
    this.handleToggleFn = this.handleToggleFn.bind(this);
  }

  handleSubmitFilter(query) {
    /*everything what is commented below - was when I passed down handleSubmit from App and onClick down the
    tree in the Search invoked this App's handleSubmitFilter function. ?????????????????/   And now I just pass the query*/
    // handleSubmitFilter(event) {
    // console.log('event: ', event);
    console.log('query: ', query);
    console.log('what is state?', this.state); // why am I consoling out the state here? AAAAAAAAAAAAAA

    var mymovies = this.state.movies;
    var newlist = [];
    for (var i = 0; i < mymovies.length; i++) {
      // if (mymovies[i].title.toLowerCase().includes(event.target.value.toLowerCase()) === true){
      if (mymovies[i].title.toLowerCase().includes(query.toLowerCase()) === true) {
        newlist.push({ "title": mymovies[i].title });
      }
    }

    if (newlist.length === 0) {
      alert("No movie by that name found");
    } else {
      this.setState({ movies: newlist });
    } // after filtering moviesArr will only have mathcing with query movies inside
  }

  // handleSubmitAdd(event) {
  handleSubmitAdd(event) {
    var newlist = this.state.movies;
    newlist.push({ "title": event.target.value });
    this.setState({ movies: newlist });
  }

  handleToggleFn(event) {
    console.log('toggle working!');
    var beforeToggle = this.state.isWatched;
    console.log(beforeToggle);
    this.setState({ isWatched: !beforeToggle });
    console.log('what is state?', this.state);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(AddMovie, { handleSubmit: this.handleSubmitAdd })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(Search, { handleSubmit: this.handleSubmitFilter }),
        React.createElement(MovieList, { movies: this.state.movies, handleToggle: this.handleToggleFn })
      )
    );
  }
};
export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiTW92aWVMaXN0IiwiQWRkTW92aWUiLCJleGFtcGxlTW92aWVzIiwiQXBwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJpc1dhdGNoZWQiLCJoYW5kbGVTdWJtaXRGaWx0ZXIiLCJiaW5kIiwiaGFuZGxlU3VibWl0QWRkIiwiaGFuZGxlVG9nZ2xlRm4iLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJteW1vdmllcyIsIm5ld2xpc3QiLCJpIiwibGVuZ3RoIiwidGl0bGUiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwicHVzaCIsImFsZXJ0Iiwic2V0U3RhdGUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiYmVmb3JlVG9nZ2xlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxNQUFQLE1BQW1CLGFBQW5CO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixnQkFBdEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGVBQXJCO0FBQ0EsT0FBT0MsYUFBUCxNQUEwQiwwQkFBMUI7O0FBRUEsTUFBTUMsR0FBTixTQUFrQkMsTUFBTUMsU0FBeEIsQ0FBa0M7QUFDaENDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjs7QUFFQSxTQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxjQUFRLEVBRkc7QUFHWEMsaUJBQVc7QUFIQSxLQUFiO0FBS0EsU0FBS0Msa0JBQUwsR0FBMEIsS0FBS0Esa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQTFCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QixLQUFLQSxlQUFMLENBQXFCRCxJQUFyQixDQUEwQixJQUExQixDQUF2QjtBQUNBLFNBQUtFLGNBQUwsR0FBc0IsS0FBS0EsY0FBTCxDQUFvQkYsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDRDs7QUFFREQscUJBQW1CSSxLQUFuQixFQUEwQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixLQUF2QjtBQUNBQyxZQUFRQyxHQUFSLENBQVksZ0JBQVosRUFBOEIsS0FBS1QsS0FBbkMsRUFOd0IsQ0FNbUI7O0FBRTNDLFFBQUlVLFdBQVcsS0FBS1YsS0FBTCxDQUFXQyxNQUExQjtBQUNBLFFBQUlVLFVBQVUsRUFBZDtBQUNBLFNBQUssSUFBSUMsSUFBRSxDQUFYLEVBQWNBLElBQUVGLFNBQVNHLE1BQXpCLEVBQWlDRCxHQUFqQyxFQUFxQztBQUNuQztBQUNBLFVBQUlGLFNBQVNFLENBQVQsRUFBWUUsS0FBWixDQUFrQkMsV0FBbEIsR0FBZ0NDLFFBQWhDLENBQXlDVCxNQUFNUSxXQUFOLEVBQXpDLE1BQWtFLElBQXRFLEVBQTJFO0FBQ3pFSixnQkFBUU0sSUFBUixDQUFhLEVBQUMsU0FBU1AsU0FBU0UsQ0FBVCxFQUFZRSxLQUF0QixFQUFiO0FBQ0Q7QUFDRjs7QUFFRCxRQUFHSCxRQUFRRSxNQUFSLEtBQW1CLENBQXRCLEVBQXdCO0FBQ3RCSyxZQUFNLDZCQUFOO0FBQ0QsS0FGRCxNQUdJO0FBQ0YsV0FBS0MsUUFBTCxDQUFjLEVBQUNsQixRQUFPVSxPQUFSLEVBQWQ7QUFDRCxLQXRCdUIsQ0FzQnRCO0FBQ0g7O0FBRUQ7QUFDQU4sa0JBQWdCZSxLQUFoQixFQUF1QjtBQUNyQixRQUFJVCxVQUFVLEtBQUtYLEtBQUwsQ0FBV0MsTUFBekI7QUFDQVUsWUFBUU0sSUFBUixDQUFhLEVBQUMsU0FBU0csTUFBTUMsTUFBTixDQUFhQyxLQUF2QixFQUFiO0FBQ0EsU0FBS0gsUUFBTCxDQUFjLEVBQUNsQixRQUFPVSxPQUFSLEVBQWQ7QUFDRDs7QUFFREwsaUJBQWVjLEtBQWYsRUFBc0I7QUFDcEJaLFlBQVFDLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLFFBQUljLGVBQWUsS0FBS3ZCLEtBQUwsQ0FBV0UsU0FBOUI7QUFDQU0sWUFBUUMsR0FBUixDQUFZYyxZQUFaO0FBQ0EsU0FBS0osUUFBTCxDQUFjLEVBQUNqQixXQUFXLENBQUNxQixZQUFiLEVBQWQ7QUFDQWYsWUFBUUMsR0FBUixDQUFZLGdCQUFaLEVBQThCLEtBQUtULEtBQW5DO0FBQ0Q7O0FBRUR3QixXQUFTO0FBQ1AsV0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxRQUFELElBQVUsY0FBYyxLQUFLbkIsZUFBN0I7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsTUFBRCxJQUFRLGNBQWMsS0FBS0Ysa0JBQTNCLEdBREY7QUFFRSw0QkFBQyxTQUFELElBQVcsUUFBUSxLQUFLSCxLQUFMLENBQVdDLE1BQTlCLEVBQXNDLGNBQWMsS0FBS0ssY0FBekQ7QUFGRjtBQUpGLEtBREY7QUFXRDtBQWxFK0IsQ0FtRWpDO0FBQ0QsZUFBZVgsR0FBZiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2VhcmNoIGZyb20gJy4vU2VhcmNoLmpzJztcbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi9Nb3ZpZUxpc3QuanMnO1xuaW1wb3J0IEFkZE1vdmllIGZyb20gJy4vQWRkTW92aWUuanMnO1xuaW1wb3J0IGV4YW1wbGVNb3ZpZXMgZnJvbSAnLi4vZGF0YS9leGFtcGxlTW92aWVzLmpzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vbW92aWVzOiBleGFtcGxlTW92aWVzXG4gICAgICBtb3ZpZXM6IFtdLFxuICAgICAgaXNXYXRjaGVkOiBmYWxzZVxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTdWJtaXRGaWx0ZXIgPSB0aGlzLmhhbmRsZVN1Ym1pdEZpbHRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0QWRkID0gdGhpcy5oYW5kbGVTdWJtaXRBZGQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVRvZ2dsZUZuID0gdGhpcy5oYW5kbGVUb2dnbGVGbi5iaW5kKHRoaXMpO1xuICB9O1xuXG4gIGhhbmRsZVN1Ym1pdEZpbHRlcihxdWVyeSkge1xuICAgIC8qZXZlcnl0aGluZyB3aGF0IGlzIGNvbW1lbnRlZCBiZWxvdyAtIHdhcyB3aGVuIEkgcGFzc2VkIGRvd24gaGFuZGxlU3VibWl0IGZyb20gQXBwIGFuZCBvbkNsaWNrIGRvd24gdGhlXG4gICAgdHJlZSBpbiB0aGUgU2VhcmNoIGludm9rZWQgdGhpcyBBcHAncyBoYW5kbGVTdWJtaXRGaWx0ZXIgZnVuY3Rpb24uID8/Pz8/Pz8/Pz8/Pz8/Pz8/LyAgIEFuZCBub3cgSSBqdXN0IHBhc3MgdGhlIHF1ZXJ5Ki9cbiAgICAvLyBoYW5kbGVTdWJtaXRGaWx0ZXIoZXZlbnQpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZXZlbnQ6ICcsIGV2ZW50KTtcbiAgICBjb25zb2xlLmxvZygncXVlcnk6ICcsIHF1ZXJ5KTtcbiAgICBjb25zb2xlLmxvZygnd2hhdCBpcyBzdGF0ZT8nLCB0aGlzLnN0YXRlKTsgLy8gd2h5IGFtIEkgY29uc29saW5nIG91dCB0aGUgc3RhdGUgaGVyZT8gQUFBQUFBQUFBQUFBQUFcblxuICAgIHZhciBteW1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuICAgIHZhciBuZXdsaXN0ID0gW107XG4gICAgZm9yICh2YXIgaT0wOyBpPG15bW92aWVzLmxlbmd0aDsgaSsrKXtcbiAgICAgIC8vIGlmIChteW1vdmllc1tpXS50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGV2ZW50LnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpKSA9PT0gdHJ1ZSl7XG4gICAgICBpZiAobXltb3ZpZXNbaV0udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeS50b0xvd2VyQ2FzZSgpKSA9PT0gdHJ1ZSl7XG4gICAgICAgIG5ld2xpc3QucHVzaCh7XCJ0aXRsZVwiOiBteW1vdmllc1tpXS50aXRsZX0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmKG5ld2xpc3QubGVuZ3RoID09PSAwKXtcbiAgICAgIGFsZXJ0KFwiTm8gbW92aWUgYnkgdGhhdCBuYW1lIGZvdW5kXCIpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOm5ld2xpc3R9KTtcbiAgICB9IC8vIGFmdGVyIGZpbHRlcmluZyBtb3ZpZXNBcnIgd2lsbCBvbmx5IGhhdmUgbWF0aGNpbmcgd2l0aCBxdWVyeSBtb3ZpZXMgaW5zaWRlXG4gIH1cblxuICAvLyBoYW5kbGVTdWJtaXRBZGQoZXZlbnQpIHtcbiAgaGFuZGxlU3VibWl0QWRkKGV2ZW50KSB7XG4gICAgdmFyIG5ld2xpc3QgPSB0aGlzLnN0YXRlLm1vdmllcztcbiAgICBuZXdsaXN0LnB1c2goe1widGl0bGVcIjogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bW92aWVzOm5ld2xpc3R9KTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZUZuKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ3RvZ2dsZSB3b3JraW5nIScpO1xuICAgIHZhciBiZWZvcmVUb2dnbGUgPSB0aGlzLnN0YXRlLmlzV2F0Y2hlZDtcbiAgICBjb25zb2xlLmxvZyhiZWZvcmVUb2dnbGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2lzV2F0Y2hlZDogIWJlZm9yZVRvZ2dsZX0pO1xuICAgIGNvbnNvbGUubG9nKCd3aGF0IGlzIHN0YXRlPycsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBZGRNb3ZpZSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0QWRkfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTZWFyY2ggaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdEZpbHRlcn0vPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXt0aGlzLnN0YXRlLm1vdmllc30gaGFuZGxlVG9nZ2xlPXt0aGlzLmhhbmRsZVRvZ2dsZUZufS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=