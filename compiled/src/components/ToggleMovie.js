class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return React.createElement(
      'button',
      { onClick: this.handleClick },
      this.state.isToggleOn ? 'ON' : 'OFF'
    );
  }
}

ReactDOM.render(React.createElement(Toggle, null), document.getElementById('toggleMovieEntry'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvZ2dsZU1vdmllLmpzeCJdLCJuYW1lcyI6WyJUb2dnbGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImlzVG9nZ2xlT24iLCJoYW5kbGVDbGljayIsImJpbmQiLCJzZXRTdGF0ZSIsInJlbmRlciIsIlJlYWN0RE9NIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTixTQUFxQkMsTUFBTUMsU0FBM0IsQ0FBcUM7QUFDbkNDLGNBQVlDLEtBQVosRUFBbUI7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFDQyxZQUFZLElBQWIsRUFBYjs7QUFFQTtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBbkI7QUFDRDs7QUFFREQsZ0JBQWM7QUFDWixTQUFLRSxRQUFMLENBQWNKLFVBQVU7QUFDdEJDLGtCQUFZLENBQUNELE1BQU1DO0FBREcsS0FBVixDQUFkO0FBR0Q7O0FBRURJLFdBQVM7QUFDUCxXQUNFO0FBQUE7QUFBQSxRQUFRLFNBQVMsS0FBS0gsV0FBdEI7QUFDRyxXQUFLRixLQUFMLENBQVdDLFVBQVgsR0FBd0IsSUFBeEIsR0FBK0I7QUFEbEMsS0FERjtBQUtEO0FBckJrQzs7QUF3QnJDSyxTQUFTRCxNQUFULENBQ0Usb0JBQUMsTUFBRCxPQURGLEVBRUVFLFNBQVNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBRkYiLCJmaWxlIjoiVG9nZ2xlTW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2dnbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge2lzVG9nZ2xlT246IHRydWV9O1xuXG4gICAgLy8gVGhpcyBiaW5kaW5nIGlzIG5lY2Vzc2FyeSB0byBtYWtlIGB0aGlzYCB3b3JrIGluIHRoZSBjYWxsYmFja1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7XG4gICAgICBpc1RvZ2dsZU9uOiAhc3RhdGUuaXNUb2dnbGVPblxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAge3RoaXMuc3RhdGUuaXNUb2dnbGVPbiA/ICdPTicgOiAnT0ZGJ31cbiAgICAgIDwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8VG9nZ2xlIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlTW92aWVFbnRyeScpXG4pOyJdfQ==