import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Clicky Game!
        </div>
        <div className="card-body">
          <p className="card-text">Score: {this.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Pokemon Image
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
