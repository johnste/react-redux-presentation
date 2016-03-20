import React from 'react';
import { connect } from 'react-redux';

import { count, increment, decrement } from '../actions/counterActions';
import Counter from '../components/Counter.jsx';
import Button from '../components/Button.jsx';

export const App = React.createClass({
  componentDidMount() {
      this.interval = setInterval(() => {
        this.props.dispatch(count());
      }, 1000);
  },

  componentWillUnmount() {
      clearInterval(this.interval);
  },

  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <Counter { ...this.props }/>
        <Button onClick={ dispatch.bind(this, decrement()) }>-</Button>
        <Button onClick={ dispatch.bind(this, increment()) }>+</Button>
      </div>
    );
  }
});

function mapStateToProps({ counter }) {
  return {
    count: counter.count,
    delta: counter.delta
  };
}

export default connect(mapStateToProps)(App);
