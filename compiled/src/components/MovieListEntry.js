var MovieListEntry = props => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'movieName' },
      props.movie.title
    ),
    React.createElement(
      'button',
      { onClick: props.handleToggle },
      'add to watched'
    )
  );
};
export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsInByb3BzIiwibW92aWUiLCJ0aXRsZSIsImhhbmRsZVRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsaUJBQWtCQyxLQUFELElBQVc7QUFDOUIsU0FDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFBNEJBLFlBQU1DLEtBQU4sQ0FBWUM7QUFBeEMsS0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLFNBQVNGLE1BQU1HLFlBQXZCO0FBQUE7QUFBQTtBQUZGLEdBREY7QUFNRCxDQVBEO0FBUUEsZUFBZUosY0FBZiIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNb3ZpZUxpc3RFbnRyeSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbW92aWVOYW1lJz57cHJvcHMubW92aWUudGl0bGV9PC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZVRvZ2dsZX0+YWRkIHRvIHdhdGNoZWQ8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdEVudHJ5OyJdfQ==