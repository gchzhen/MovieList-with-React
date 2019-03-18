class MovieListEntryToggle extends Component {
    constructor(props) {
        super(props);
        this.addActiveClass= this.addActiveClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render() {
        return (
            <div 
                className={this.state.active ? 'your_className': null} 
                onclick={this.toggleClass} 
            >
                <p>{this.props.text}</p>
            </div>
        )
  }
}

class Test extends Component {
    render() {
        return (
            <div>
                <MyComponent text={'1'} />
                <MyComponent text={'2'} />
            </div>
        );
    }
}
export default MovieListEntryToggle;