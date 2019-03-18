class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    this.handleSubmit = props.handleSubmit.bind(this);

    this.state = {
      searchQuery: ''
    };
  }

  // 1) this fn sets searchQuery prop in the local state
  handleChangeOfTextInSearchBar(event) {
    this.setState({ searchQuery: event.target.value });
  }

  // 2) below you run App's handleSubmit fn with value of searchQuery from local
  // state set inside event.target.value of the button click event!!!!!!!!!!!
  // the whole event is being passed further; you can access value through e.target.value
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", onChange: this.handleChangeOfTextInSearchBar }),
      React.createElement(
        "button",
        { value: this.state.searchQuery, onClick: this.handleSubmit },
        "add to library"
      )
    );
  }
};

export default AddMovie;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FkZE1vdmllLmpzeCJdLCJuYW1lcyI6WyJBZGRNb3ZpZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsInN0YXRlIiwic2VhcmNoUXVlcnkiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFFBQU4sU0FBdUJDLE1BQU1DLFNBQTdCLENBQXVDO0FBQ3JDQyxjQUFhQyxLQUFiLEVBQW9CO0FBQ2xCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyw2QkFBTCxHQUFxQyxLQUFLQSw2QkFBTCxDQUFtQ0MsSUFBbkMsQ0FBd0MsSUFBeEMsQ0FBckM7QUFDQSxTQUFLQyxZQUFMLEdBQW9CSCxNQUFNRyxZQUFOLENBQW1CRCxJQUFuQixDQUF3QixJQUF4QixDQUFwQjs7QUFFQSxTQUFLRSxLQUFMLEdBQWE7QUFDWEMsbUJBQWE7QUFERixLQUFiO0FBR0Q7O0FBRUQ7QUFDQUosZ0NBQThCSyxLQUE5QixFQUFxQztBQUNuQyxTQUFLQyxRQUFMLENBQWMsRUFBQ0YsYUFBYUMsTUFBTUUsTUFBTixDQUFhQyxLQUEzQixFQUFkO0FBRUQ7O0FBRUQ7QUFDQTtBQUNBO0FBQ0FDLFdBQVM7QUFDUCxXQUNBO0FBQUE7QUFBQTtBQUNFLHFDQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtULDZCQUFsQyxHQURGO0FBRUU7QUFBQTtBQUFBLFVBQVEsT0FBTyxLQUFLRyxLQUFMLENBQVdDLFdBQTFCLEVBQXVDLFNBQVMsS0FBS0YsWUFBckQ7QUFBQTtBQUFBO0FBRkYsS0FEQTtBQU9EO0FBNUJvQyxDQTZCdEM7O0FBRUQsZUFBZVAsUUFBZiIsImZpbGUiOiJBZGRNb3ZpZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFkZE1vdmllIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlT2ZUZXh0SW5TZWFyY2hCYXIgPSB0aGlzLmhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSBwcm9wcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hRdWVyeTogJydcbiAgICB9O1xuICB9O1xuXG4gIC8vIDEpIHRoaXMgZm4gc2V0cyBzZWFyY2hRdWVyeSBwcm9wIGluIHRoZSBsb2NhbCBzdGF0ZVxuICBoYW5kbGVDaGFuZ2VPZlRleHRJblNlYXJjaEJhcihldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFF1ZXJ5OiBldmVudC50YXJnZXQudmFsdWV9KTtcblxuICB9XG5cbiAgLy8gMikgYmVsb3cgeW91IHJ1biBBcHAncyBoYW5kbGVTdWJtaXQgZm4gd2l0aCB2YWx1ZSBvZiBzZWFyY2hRdWVyeSBmcm9tIGxvY2FsXG4gIC8vIHN0YXRlIHNldCBpbnNpZGUgZXZlbnQudGFyZ2V0LnZhbHVlIG9mIHRoZSBidXR0b24gY2xpY2sgZXZlbnQhISEhISEhISEhIVxuICAvLyB0aGUgd2hvbGUgZXZlbnQgaXMgYmVpbmcgcGFzc2VkIGZ1cnRoZXI7IHlvdSBjYW4gYWNjZXNzIHZhbHVlIHRocm91Z2ggZS50YXJnZXQudmFsdWVcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyfS8+XG4gICAgICA8YnV0dG9uIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5fSBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+YWRkIHRvIGxpYnJhcnk8L2J1dHRvbj5cbiAgICAgIHsvKiA8YnV0dG9uIHZhbHVlPSdnYWxpbmEnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5hZGQgdG8gbGlicmFyeTwvYnV0dG9uPiAqL31cbiAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE1vdmllO1xuIl19