class AddMovie extends React.Component {
  constructor (props) {
    super(props);
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    this.handleSubmit = props.handleSubmit.bind(this);

    this.state = {
      searchQuery: ''
    };
  };

  handleChangeOfTextInSearchBar(event) {
    this.setState({searchQuery: event.target.value});
  }

  render() {
    return (
    <div>
      <input type="text" onChange={this.handleChangeOfTextInSearchBar}/>
      <button value={this.state.searchQuery} onClick={this.handleSubmit}>add to library</button>
    </div>
    )
  }
};

export default AddMovie;
