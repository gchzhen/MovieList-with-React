class MovieListEntryToggle extends Component {
    constructor(props) {
        super(props);
        this.addActiveClass = this.addActiveClass.bind(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01vdmllTGlzdEVudHJ5VG9nZ2xlLmpzeCJdLCJuYW1lcyI6WyJNb3ZpZUxpc3RFbnRyeVRvZ2dsZSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJhZGRBY3RpdmVDbGFzcyIsImJpbmQiLCJzdGF0ZSIsImFjdGl2ZSIsInRvZ2dsZUNsYXNzIiwiY3VycmVudFN0YXRlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJ0ZXh0IiwiVGVzdCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsb0JBQU4sU0FBbUNDLFNBQW5DLENBQTZDO0FBQ3pDQyxnQkFBWUMsS0FBWixFQUFtQjtBQUNmLGNBQU1BLEtBQU47QUFDQSxhQUFLQyxjQUFMLEdBQXFCLEtBQUtBLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBQXJCO0FBQ0EsYUFBS0MsS0FBTCxHQUFhO0FBQ1RDLG9CQUFRO0FBREMsU0FBYjtBQUdIO0FBQ0RDLGtCQUFjO0FBQ1YsY0FBTUMsZUFBZSxLQUFLSCxLQUFMLENBQVdDLE1BQWhDO0FBQ0EsYUFBS0csUUFBTCxDQUFjLEVBQUVILFFBQVEsQ0FBQ0UsWUFBWCxFQUFkO0FBQ0g7O0FBRURFLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQTtBQUNJLDJCQUFXLEtBQUtMLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixnQkFBcEIsR0FBc0MsSUFEckQ7QUFFSSx5QkFBUyxLQUFLQztBQUZsQjtBQUlJO0FBQUE7QUFBQTtBQUFJLHFCQUFLTCxLQUFMLENBQVdTO0FBQWY7QUFKSixTQURKO0FBUUw7QUF0QjBDOztBQXlCN0MsTUFBTUMsSUFBTixTQUFtQlosU0FBbkIsQ0FBNkI7QUFDekJVLGFBQVM7QUFDTCxlQUNJO0FBQUE7QUFBQTtBQUNJLGdDQUFDLFdBQUQsSUFBYSxNQUFNLEdBQW5CLEdBREo7QUFFSSxnQ0FBQyxXQUFELElBQWEsTUFBTSxHQUFuQjtBQUZKLFNBREo7QUFNSDtBQVJ3QjtBQVU3QixlQUFlWCxvQkFBZiIsImZpbGUiOiJNb3ZpZUxpc3RFbnRyeVRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmllTGlzdEVudHJ5VG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuYWRkQWN0aXZlQ2xhc3M9IHRoaXMuYWRkQWN0aXZlQ2xhc3MuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHRvZ2dsZUNsYXNzKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlLmFjdGl2ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZTogIWN1cnJlbnRTdGF0ZSB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYWN0aXZlID8gJ3lvdXJfY2xhc3NOYW1lJzogbnVsbH0gXG4gICAgICAgICAgICAgICAgb25jbGljaz17dGhpcy50b2dnbGVDbGFzc30gXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMudGV4dH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICB9XG59XG5cbmNsYXNzIFRlc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPE15Q29tcG9uZW50IHRleHQ9eycxJ30gLz5cbiAgICAgICAgICAgICAgICA8TXlDb21wb25lbnQgdGV4dD17JzInfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0RW50cnlUb2dnbGU7Il19