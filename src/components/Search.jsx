class Search extends React.Component {
  constructor (props) {
    super(props);
    // handleSubmit comes down from App.jsx as <props.handleSubmit>
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);

    this.state = {
      searchQuery: ''
    };
  };

  // it catches every change in search bar even when you clear it it checks against an empty query
  handleChangeOfTextInSearchBar(event) {
    //WHY DO I NEED TO RUN HANDLESUBMIT IN CALLBACK????????????????????
    this.setState({searchQuery: event.target.value}, ()=> {
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
    return (
    <div>
      <input type="text" onChange={this.handleChangeOfTextInSearchBar}/>
      {/* <button value={this.state.searchQuery} onClick={this.handleChange}>search library</button> */}
    </div>
    )
  }
};

export default Search;
