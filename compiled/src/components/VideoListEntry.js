var MovieListEntry = ({ movie, handleMovieListEntryClick }) => React.createElement(
  "div",
  { className: "movie-list-entry media" },
  React.createElement(
    "div",
    { className: "media-left media-middle" },
    React.createElement("img", { className: "media-object", src: movie.snippet.thumbnails.default.url, alt: "" })
  ),
  React.createElement(
    "div",
    { className: "media-body" },
    React.createElement(
      "div",
      {
        className: "movie-list-entry-title",
        onClick: () => {
          handleMovieListEntryClick(movie);
        } },
      movie.snippet.title
    ),
    React.createElement(
      "div",
      { className: "movie-list-entry-detail" },
      movie.snippet.description
    )
  )
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default MovieListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeSIsIm1vdmllIiwiaGFuZGxlTW92aWVMaXN0RW50cnlDbGljayIsInNuaXBwZXQiLCJ0aHVtYm5haWxzIiwiZGVmYXVsdCIsInVybCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLGlCQUFpQixDQUFDLEVBQUNDLEtBQUQsRUFBUUMseUJBQVIsRUFBRCxLQUNuQjtBQUFBO0FBQUEsSUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSx5QkFBZjtBQUNFLGlDQUFLLFdBQVUsY0FBZixFQUE4QixLQUFLRCxNQUFNRSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLE9BQXpCLENBQWlDQyxHQUFwRSxFQUF5RSxLQUFJLEVBQTdFO0FBREYsR0FERjtBQUlFO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLG1CQUFVLHdCQURaO0FBRUUsaUJBQVMsTUFBTTtBQUFFSixvQ0FBMEJELEtBQTFCO0FBQW1DLFNBRnREO0FBRXlEQSxZQUFNRSxPQUFOLENBQWNJO0FBRnZFLEtBREY7QUFLRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQTBDTixZQUFNRSxPQUFOLENBQWNLO0FBQXhEO0FBTEY7QUFKRixDQURGOztBQWVBO0FBQ0E7QUFDQVIsZUFBZVMsU0FBZixHQUEyQjtBQUN6QlIsU0FBT1MsTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBREwsQ0FBM0I7O0FBSUE7QUFDQTtBQUNBLGVBQWViLGNBQWYiLCJmaWxlIjoiVmlkZW9MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTW92aWVMaXN0RW50cnkgPSAoe21vdmllLCBoYW5kbGVNb3ZpZUxpc3RFbnRyeUNsaWNrfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17bW92aWUuc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBcbiAgICAgICAgY2xhc3NOYW1lPVwibW92aWUtbGlzdC1lbnRyeS10aXRsZVwiIFxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGhhbmRsZU1vdmllTGlzdEVudHJ5Q2xpY2sobW92aWUpOyB9fT57bW92aWUuc25pcHBldC50aXRsZX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1saXN0LWVudHJ5LWRldGFpbFwiPnttb3ZpZS5zbmlwcGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbk1vdmllTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTtcblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdEVudHJ5O1xuIl19