class AddMovie extends React.Component {
  constructor (props) {
    super(props);
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    this.handleSubmit = props.handleSubmit.bind(this);

    this.state = {
      searchQuery: ''
    };
  };

  // 1) this fn sets searchQuery prop in the local state
  handleChangeOfTextInSearchBar(event) {
    this.setState({searchQuery: event.target.value});

  }

  // 2) below you run App's handleSubmit fn with value of searchQuery from local
  // state set inside event.target.value of the button click event!!!!!!!!!!!
  // the whole event is being passed further; you can access value through e.target.value
  render() {
    return (
    <div>
      <input type="text" onChange={this.handleChangeOfTextInSearchBar}/>
      <button value={this.state.searchQuery} onClick={this.handleSubmit}>add to library</button>
      {/* <button value='galina' onClick={this.handleSubmit}>add to library</button> */}
    </div>
    )
  }
};

export default AddMovie;
