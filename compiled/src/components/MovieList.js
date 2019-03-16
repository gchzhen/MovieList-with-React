import MovieListEntry from './MovieListEntry.js';

var MovieList = props => {
  {
    return React.createElement(
      'div',
      null,
      props.movies.map((movie, i) => {
        return React.createElement(MovieListEntry, { key: i.toString(), movie: movie });
      })
    );
  }
};

export default MovieList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdC5qc3giXSwibmFtZXMiOlsiTW92aWVMaXN0RW50cnkiLCJNb3ZpZUxpc3QiLCJwcm9wcyIsIm1vdmllcyIsIm1hcCIsIm1vdmllIiwiaSIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQSxPQUFPQSxjQUFQLE1BQTJCLHFCQUEzQjs7QUFFQSxJQUFJQyxZQUFhQyxLQUFELElBQVc7QUFDekI7QUFDRSxXQUNFO0FBQUE7QUFBQTtBQUVFQSxZQUFNQyxNQUFOLENBQWFDLEdBQWIsQ0FBaUIsQ0FBQ0MsS0FBRCxFQUFRQyxDQUFSLEtBQWM7QUFDN0IsZUFBTyxvQkFBQyxjQUFELElBQWdCLEtBQUtBLEVBQUVDLFFBQUYsRUFBckIsRUFBbUMsT0FBT0YsS0FBMUMsR0FBUDtBQUNELE9BRkQ7QUFGRixLQURGO0FBU0Q7QUFDRixDQVpEOztBQWNBLGVBQWVKLFNBQWYiLCJmaWxlIjoiTW92aWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmllTGlzdEVudHJ5IGZyb20gJy4vTW92aWVMaXN0RW50cnkuanMnO1xuXG52YXIgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIHtcbiAgICAgICAgcHJvcHMubW92aWVzLm1hcCgobW92aWUsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4gPE1vdmllTGlzdEVudHJ5IGtleT17aS50b1N0cmluZygpfSBtb3ZpZT17bW92aWV9IC8+XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiJdfQ==