// import MovieListEntryToggle from './MovieListEntryToggle.js';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        this.props.movie.title
      ),
      React.createElement(
        "button",
        { value: this.props.movie.title, onClick: this.props.handleAddToWatched },
        "WATCHED"
      ),
      React.createElement(
        "button",
        { value: this.props.movie.title, onClick: this.props.handleAddToUnwatched },
        "TO WATCH"
      )
    );
  }
};

export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIm1vdmllIiwidGl0bGUiLCJoYW5kbGVBZGRUb1dhdGNoZWQiLCJoYW5kbGVBZGRUb1Vud2F0Y2hlZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsTUFBTUEsY0FBTixTQUE2QkMsTUFBTUMsU0FBbkMsQ0FBNkM7QUFDM0NDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsV0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBTSxhQUFLRCxLQUFMLENBQVdFLEtBQVgsQ0FBaUJDO0FBQXZCLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxPQUFPLEtBQUtILEtBQUwsQ0FBV0UsS0FBWCxDQUFpQkMsS0FBaEMsRUFBdUMsU0FBUyxLQUFLSCxLQUFMLENBQVdJLGtCQUEzRDtBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFRLE9BQU8sS0FBS0osS0FBTCxDQUFXRSxLQUFYLENBQWlCQyxLQUFoQyxFQUF1QyxTQUFTLEtBQUtILEtBQUwsQ0FBV0ssb0JBQTNEO0FBQUE7QUFBQTtBQUhGLEtBREE7QUFPRDtBQWIwQyxDQWM1Qzs7QUFFRCxlQUFlVCxjQUFmIiwiZmlsZSI6Ik1vdmllTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE1vdmllTGlzdEVudHJ5VG9nZ2xlIGZyb20gJy4vTW92aWVMaXN0RW50cnlUb2dnbGUuanMnO1xuXG5jbGFzcyBNb3ZpZUxpc3RFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+e3RoaXMucHJvcHMubW92aWUudGl0bGV9PC9kaXY+XG4gICAgICA8YnV0dG9uIHZhbHVlPXt0aGlzLnByb3BzLm1vdmllLnRpdGxlfSBvbkNsaWNrPXt0aGlzLnByb3BzLmhhbmRsZUFkZFRvV2F0Y2hlZH0+V0FUQ0hFRDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiB2YWx1ZT17dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX0gb25DbGljaz17dGhpcy5wcm9wcy5oYW5kbGVBZGRUb1Vud2F0Y2hlZH0+VE8gV0FUQ0g8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdEVudHJ5OyJdfQ==