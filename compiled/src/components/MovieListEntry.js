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
        { value: this.props.movie.title, onClick: this.setNewState },
        "WATCHED"
      ),
      React.createElement(
        "button",
        { value: this.props.movie.title, onClick: this.setNewState },
        "TO WATCH"
      )
    );
  }
};

export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNldE5ld1N0YXRlIiwiYmluZCIsImV2ZW50IiwiaGFuZGxlQWRkVG9XYXRjaGVkIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJtb3ZpZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxNQUFNQSxjQUFOLFNBQTZCQyxNQUFNQyxTQUFuQyxDQUE2QztBQUMzQ0MsY0FBWUMsS0FBWixFQUFtQjtBQUNqQixVQUFNQSxLQUFOO0FBQ0E7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFREQsY0FBWUUsS0FBWixFQUFtQjtBQUNqQixTQUFLSCxLQUFMLENBQVdJLGtCQUFYLENBQThCRCxNQUFNRSxNQUFOLENBQWFDLEtBQTNDLEVBRGlCLENBQ2tDO0FBQ25EO0FBQ0E7QUFDQTtBQUNEOztBQUVEQyxXQUFTO0FBQ1AsV0FDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBTSxhQUFLUCxLQUFMLENBQVdRLEtBQVgsQ0FBaUJDO0FBQXZCLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxPQUFPLEtBQUtULEtBQUwsQ0FBV1EsS0FBWCxDQUFpQkMsS0FBaEMsRUFBdUMsU0FBUyxLQUFLUixXQUFyRDtBQUFBO0FBQUEsT0FGRjtBQUdFO0FBQUE7QUFBQSxVQUFRLE9BQU8sS0FBS0QsS0FBTCxDQUFXUSxLQUFYLENBQWlCQyxLQUFoQyxFQUF1QyxTQUFTLEtBQUtSLFdBQXJEO0FBQUE7QUFBQTtBQUhGLEtBREE7QUFRRDtBQTNCMEMsQ0E0QjVDOztBQUVELGVBQWVMLGNBQWYiLCJmaWxlIjoiTW92aWVMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTW92aWVMaXN0RW50cnlUb2dnbGUgZnJvbSAnLi9Nb3ZpZUxpc3RFbnRyeVRvZ2dsZS5qcyc7XG5cbmNsYXNzIE1vdmllTGlzdEVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgLy8gcHJvcHMuaGFuZGxlQWRkVG9XYXRjaGVkXG4gICAgdGhpcy5zZXROZXdTdGF0ZSA9IHRoaXMuc2V0TmV3U3RhdGUuYmluZCh0aGlzKTtcbiAgICAvLyB0aGlzLnN0YXRlID0ge1xuICAgIC8vICAgYWRkVG9XYXRjaGVkOiAnJ1xuICAgIC8vIH07IC8vIG5vdyBJIGRvbid0IG5lZWQgc3RhdGUgdG8gaG9sZCB0aGUgdmFsdWUgY3ogSSdtXG4gICAgLy8gcGFzc2luZyBpdCBkaXJlY3RseSB0byBhIGhhbmRsZUFkZFRvV2F0Y2hlZCBmblxuICB9XG5cbiAgc2V0TmV3U3RhdGUoZXZlbnQpIHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUFkZFRvV2F0Y2hlZChldmVudC50YXJnZXQudmFsdWUpOyAvLyBleHRyYWN0aW5nIHZhbHVlIGZyb20gZXZlbnQgcmlnaHQgaGVyZVxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe2FkZFRvV2F0Y2hlZDogZXZlbnQudGFyZ2V0LnZhbHVlfSwgKCk9PiB7XG4gICAgLy8gICB0aGlzLnByb3BzLmhhbmRsZUFkZFRvV2F0Y2hlZCh0aGlzLnN0YXRlLmFkZFRvV2F0Y2hlZCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2Rpdj5cbiAgICAgIDxidXR0b24gdmFsdWU9e3RoaXMucHJvcHMubW92aWUudGl0bGV9IG9uQ2xpY2s9e3RoaXMuc2V0TmV3U3RhdGV9PldBVENIRUQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdmFsdWU9e3RoaXMucHJvcHMubW92aWUudGl0bGV9IG9uQ2xpY2s9e3RoaXMuc2V0TmV3U3RhdGV9PlRPIFdBVENIPC9idXR0b24+XG4gICAgICB7LyogPGRpdiBpZD0ndG9nZ2xlTW92aWVFbnRyeScgY2xhc3M9J2J0bic+VG8gd2F0Y2g8L2Rpdj4gKi99XG4gICAgPC9kaXY+XG4gICAgKVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3RFbnRyeTsiXX0=