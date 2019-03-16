class Search extends React.Component {
  constructor (props) {
    super(props);
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChangeOfTextInSearchBar(event) {
    this.setState({searchQuery: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.searchQuery);
    event.preventDefault();
  }
  render() {
    return (
    <div>
      <input type="text" onChange={this.handleChangeOfTextInSearchBar}/>
      <button onClick={this.handleSubmit}>search library</button>
    </div>
    )
  }
};

export default Search;