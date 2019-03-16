class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    // handleSubmit coming down from App.jsx as <props.handleSubmit>
    // this.handleSubmit = props.handleSubmit.bind(this);//when I was passing down the
    this.handleSubmit = this.handleSubmitInner.bind(this); // I am bounding my inner

    this.state = {
      searchQuery: ''
    };
  }

  handleChangeOfTextInSearchBar(event) {
    this.setState({ searchQuery: event.target.value }, () => {
      console.log('state of Search', this.state.searchQuery);
    });
  }

  handleSubmitInner(event) {
    event.preventDefault();
    // invoking the outer handleSubmit
    this.props.handleSubmit(this.state.searchQuery);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement('input', { type: 'text', onChange: this.handleChangeOfTextInSearchBar }),
      React.createElement(
        'button',
        { value: this.state.searchQuery, onClick: this.handleSubmit },
        'search library'
      )
    );
  }
};

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlT2ZUZXh0SW5TZWFyY2hCYXIiLCJiaW5kIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlU3VibWl0SW5uZXIiLCJzdGF0ZSIsInNlYXJjaFF1ZXJ5IiwiZXZlbnQiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFOLFNBQXFCQyxNQUFNQyxTQUEzQixDQUFxQztBQUNuQ0MsY0FBYUMsS0FBYixFQUFvQjtBQUNsQixVQUFNQSxLQUFOO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUMsS0FBS0EsNkJBQUwsQ0FBbUNDLElBQW5DLENBQXdDLElBQXhDLENBQXJDO0FBQ0E7QUFDQTtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0MsaUJBQUwsQ0FBdUJGLElBQXZCLENBQTRCLElBQTVCLENBQXBCLENBTGtCLENBS3FDOztBQUV2RCxTQUFLRyxLQUFMLEdBQWE7QUFDWEMsbUJBQWE7QUFERixLQUFiO0FBR0Q7O0FBRURMLGdDQUE4Qk0sS0FBOUIsRUFBcUM7QUFDbkMsU0FBS0MsUUFBTCxDQUFjLEVBQUNGLGFBQWFDLE1BQU1FLE1BQU4sQ0FBYUMsS0FBM0IsRUFBZCxFQUFpRCxNQUFLO0FBQ3BEQyxjQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0IsS0FBS1AsS0FBTCxDQUFXQyxXQUExQztBQUNELEtBRkQ7QUFHRDs7QUFFREYsb0JBQWtCRyxLQUFsQixFQUF5QjtBQUN2QkEsVUFBTU0sY0FBTjtBQUNBO0FBQ0EsU0FBS2IsS0FBTCxDQUFXRyxZQUFYLENBQXdCLEtBQUtFLEtBQUwsQ0FBV0MsV0FBbkM7QUFDRDs7QUFFRFEsV0FBUztBQUNQLFdBQ0E7QUFBQTtBQUFBO0FBQ0UscUNBQU8sTUFBSyxNQUFaLEVBQW1CLFVBQVUsS0FBS2IsNkJBQWxDLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBUSxPQUFPLEtBQUtJLEtBQUwsQ0FBV0MsV0FBMUIsRUFBdUMsU0FBUyxLQUFLSCxZQUFyRDtBQUFBO0FBQUE7QUFGRixLQURBO0FBTUQ7QUFoQ2tDLENBaUNwQzs7QUFFRCxlQUFlUCxNQUFmIiwiZmlsZSI6IlNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyID0gdGhpcy5oYW5kbGVDaGFuZ2VPZlRleHRJblNlYXJjaEJhci5iaW5kKHRoaXMpO1xuICAgIC8vIGhhbmRsZVN1Ym1pdCBjb21pbmcgZG93biBmcm9tIEFwcC5qc3ggYXMgPHByb3BzLmhhbmRsZVN1Ym1pdD5cbiAgICAvLyB0aGlzLmhhbmRsZVN1Ym1pdCA9IHByb3BzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpOy8vd2hlbiBJIHdhcyBwYXNzaW5nIGRvd24gdGhlXG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdElubmVyLmJpbmQodGhpcyk7IC8vIEkgYW0gYm91bmRpbmcgbXkgaW5uZXJcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hRdWVyeTogJydcbiAgICB9O1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoUXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZX0sICgpPT4ge1xuICAgICAgY29uc29sZS5sb2coJ3N0YXRlIG9mIFNlYXJjaCcsIHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXRJbm5lcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gaW52b2tpbmcgdGhlIG91dGVyIGhhbmRsZVN1Ym1pdFxuICAgIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlT2ZUZXh0SW5TZWFyY2hCYXJ9Lz5cbiAgICAgIDxidXR0b24gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0fT5zZWFyY2ggbGlicmFyeTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl19