class Search extends React.Component {
  constructor (props) {
    super(props);
    this.handleChangeOfTextInSearchBar = this.handleChangeOfTextInSearchBar.bind(this);
    // handleSubmit coming down from App.jsx as <props.handleSubmit>
    // this.handleSubmit = props.handleSubmit.bind(this);//when I was passing down the
    this.handleSubmit = this.handleSubmitInner.bind(this); // I am bounding my inner

    this.state = {
      searchQuery: ''
    };
  };

  handleChangeOfTextInSearchBar(event) {
    this.setState({searchQuery: event.target.value}, ()=> {
      console.log('state of Search', this.state.searchQuery)
    });
  }

  handleSubmitInner(event) {
    event.preventDefault();
    // invoking the outer handleSubmit
    this.props.handleSubmit(this.state.searchQuery)
  }

  render() {
    return (
    <div>
      <input type="text" onChange={this.handleChangeOfTextInSearchBar}/>
      <button value={this.state.searchQuery} onClick={this.handleSubmit}>search library</button>
    </div>
    )
  }
};

export default Search;
