class Search extends React.Component {
  constructor(props) {
    super(props);
    // handleSubmit comes down from App.jsx as <props.handleSubmit>
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);

    this.state = {
      searchQuery: ''
    };
  }

  // it catches every change in search bar even when you clear it it checks against an empty query
  handleChangeOfTextInSearchBar(event) {
    //WHY DO I NEED TO RUN HANDLESUBMIT IN CALLBACK????????????????????
    this.setState({ searchQuery: event.target.value }, () => {
      this.props.handleSubmit(this.state.searchQuery);
    });
    // this.setState({searchQuery: event.target.value});
    // this.props.handleSubmit(this.state.searchQuery);
  }

  // do I need this button now?????????????????????/
  // handleSubmitInner(event) {
  //   event.preventDefault();
  //   // invoking the outer handleSubmit
  //   this.props.handleSubmit(this.state.searchQuery)
  // }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("input", { type: "text", onChange: this.handleChangeOfTextInSearchBar })
    );
  }
};

export default Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlT2ZUZXh0SW5TZWFyY2hCYXIiLCJiaW5kIiwic3RhdGUiLCJzZWFyY2hRdWVyeSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTixTQUFxQkMsTUFBTUMsU0FBM0IsQ0FBcUM7QUFDbkNDLGNBQWFDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjtBQUNBO0FBQ0EsU0FBS0MsNkJBQUwsR0FBcUMsS0FBS0EsNkJBQUwsQ0FBbUNDLElBQW5DLENBQXdDLElBQXhDLENBQXJDOztBQUVBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYTtBQURGLEtBQWI7QUFHRDs7QUFFRDtBQUNBSCxnQ0FBOEJJLEtBQTlCLEVBQXFDO0FBQ25DO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLEVBQUNGLGFBQWFDLE1BQU1FLE1BQU4sQ0FBYUMsS0FBM0IsRUFBZCxFQUFpRCxNQUFLO0FBQ3BELFdBQUtSLEtBQUwsQ0FBV1MsWUFBWCxDQUF3QixLQUFLTixLQUFMLENBQVdDLFdBQW5DO0FBQ0QsS0FGRDtBQUdBO0FBQ0E7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFNLFdBQVM7QUFDUCxXQUNBO0FBQUE7QUFBQTtBQUNFLHFDQUFPLE1BQUssTUFBWixFQUFtQixVQUFVLEtBQUtULDZCQUFsQztBQURGLEtBREE7QUFNRDtBQW5Da0MsQ0FvQ3BDOztBQUVELGVBQWVMLE1BQWYiLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGhhbmRsZVN1Ym1pdCBjb21lcyBkb3duIGZyb20gQXBwLmpzeCBhcyA8cHJvcHMuaGFuZGxlU3VibWl0PlxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlT2ZUZXh0SW5TZWFyY2hCYXIgPSB0aGlzLmhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUXVlcnk6ICcnXG4gICAgfTtcbiAgfTtcblxuICAvLyBpdCBjYXRjaGVzIGV2ZXJ5IGNoYW5nZSBpbiBzZWFyY2ggYmFyIGV2ZW4gd2hlbiB5b3UgY2xlYXIgaXQgaXQgY2hlY2tzIGFnYWluc3QgYW4gZW1wdHkgcXVlcnlcbiAgaGFuZGxlQ2hhbmdlT2ZUZXh0SW5TZWFyY2hCYXIoZXZlbnQpIHtcbiAgICAvL1dIWSBETyBJIE5FRUQgVE8gUlVOIEhBTkRMRVNVQk1JVCBJTiBDQUxMQkFDSz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoUXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZX0sICgpPT4ge1xuICAgICAgdGhpcy5wcm9wcy5oYW5kbGVTdWJtaXQodGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSk7XG4gICAgfSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7c2VhcmNoUXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICAgIC8vIHRoaXMucHJvcHMuaGFuZGxlU3VibWl0KHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpO1xuICB9XG5cbiAgLy8gZG8gSSBuZWVkIHRoaXMgYnV0dG9uIG5vdz8/Pz8/Pz8/Pz8/Pz8/Pz8/Pz8/Py9cbiAgLy8gaGFuZGxlU3VibWl0SW5uZXIoZXZlbnQpIHtcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIC8vIGludm9raW5nIHRoZSBvdXRlciBoYW5kbGVTdWJtaXRcbiAgLy8gICB0aGlzLnByb3BzLmhhbmRsZVN1Ym1pdCh0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KVxuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZU9mVGV4dEluU2VhcmNoQmFyfS8+XG4gICAgICB7LyogPGJ1dHRvbiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX0gb25DbGljaz17dGhpcy5oYW5kbGVDaGFuZ2V9PnNlYXJjaCBsaWJyYXJ5PC9idXR0b24+ICovfVxuICAgIDwvZGl2PlxuICAgIClcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoO1xuIl19