import React from 'react'


const withCounter = (Counter) => {
  class WithCounter extends React.Component {
    state = {
      count: 0
    };

    incrementCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
      const { count } = this.state;

      return (
        <Counter count={count} incrementCount={this.incrementCount} />
      )
    }
  }

  return WithCounter;
}

export default withCounter;
