class MovieListEntryToggle extends Component {
    constructor(props) {
        super(props);
        this.toggleClass = this.toggleClass.bind(this);
        this.state = {
            active: false
        };
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    }

    render() {
        return React.createElement(
            'div',
            {
                className: this.state.active ? 'your_className' : null,
                onclick: this.toggleClass
            },
            React.createElement(
                'p',
                null,
                this.props.text
            )
        );
    }
}

class Test extends Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(MyComponent, { text: '1' }),
            React.createElement(MyComponent, { text: '2' })
        );
    }
}
export default MovieListEntryToggle;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5VG9nZ2xlLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeVRvZ2dsZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ0b2dnbGVDbGFzcyIsImJpbmQiLCJzdGF0ZSIsImFjdGl2ZSIsImN1cnJlbnRTdGF0ZSIsInNldFN0YXRlIiwicmVuZGVyIiwidGV4dCIsIlRlc3QiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLG9CQUFOLFNBQW1DQyxTQUFuQyxDQUE2QztBQUN6Q0MsZ0JBQVlDLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS0MsV0FBTCxHQUFrQixLQUFLQSxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUFsQjtBQUNBLGFBQUtDLEtBQUwsR0FBYTtBQUNUQyxvQkFBUTtBQURDLFNBQWI7QUFHSDtBQUNESCxrQkFBYztBQUNWLGNBQU1JLGVBQWUsS0FBS0YsS0FBTCxDQUFXQyxNQUFoQztBQUNBLGFBQUtFLFFBQUwsQ0FBYyxFQUFFRixRQUFRLENBQUNDLFlBQVgsRUFBZDtBQUNIOztBQUVERSxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSSwyQkFBVyxLQUFLSixLQUFMLENBQVdDLE1BQVgsR0FBb0IsZ0JBQXBCLEdBQXNDLElBRHJEO0FBRUkseUJBQVMsS0FBS0g7QUFGbEI7QUFJSTtBQUFBO0FBQUE7QUFBSSxxQkFBS0QsS0FBTCxDQUFXUTtBQUFmO0FBSkosU0FESjtBQVFMO0FBdEIwQzs7QUF5QjdDLE1BQU1DLElBQU4sU0FBbUJYLFNBQW5CLENBQTZCO0FBQ3pCUyxhQUFTO0FBQ0wsZUFDSTtBQUFBO0FBQUE7QUFDSSxnQ0FBQyxXQUFELElBQWEsTUFBTSxHQUFuQixHQURKO0FBRUksZ0NBQUMsV0FBRCxJQUFhLE1BQU0sR0FBbkI7QUFGSixTQURKO0FBTUg7QUFSd0I7QUFVN0IsZUFBZVYsb0JBQWYiLCJmaWxlIjoiTW92aWVMaXN0RW50cnlUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNb3ZpZUxpc3RFbnRyeVRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnRvZ2dsZUNsYXNzPSB0aGlzLnRvZ2dsZUNsYXNzLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH1cbiAgICB0b2dnbGVDbGFzcygpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5zdGF0ZS5hY3RpdmU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6ICFjdXJyZW50U3RhdGUgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmFjdGl2ZSA/ICd5b3VyX2NsYXNzTmFtZSc6IG51bGx9IFxuICAgICAgICAgICAgICAgIG9uY2xpY2s9e3RoaXMudG9nZ2xlQ2xhc3N9IFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnRleHR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgfVxufVxuXG5jbGFzcyBUZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxNeUNvbXBvbmVudCB0ZXh0PXsnMSd9IC8+XG4gICAgICAgICAgICAgICAgPE15Q29tcG9uZW50IHRleHQ9eycyJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdEVudHJ5VG9nZ2xlOyJdfQ==