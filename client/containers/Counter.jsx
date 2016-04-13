import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as counterActions from '../actions/counterActions';
import Counter from '../components/Counter.jsx';
import Button from '../components/Button.jsx';

export const App = React.createClass({
  propTypes: {
    currentCount: PropTypes.number.isRequired,
    delta: PropTypes.number.isRequired
  },

  componentDidMount() {
      this.interval = setInterval(this.props.count, 1000);
  },

  componentWillUnmount() {
      clearInterval(this.interval);
  },

  render() {
    const { currentCount, delta, decrement, increment } = this.props;
    return (
      <div>
        <h1>Counter</h1>
        <Counter count={ currentCount } delta={ delta } />
        <Button onClick={ decrement }>-</Button>
        <Button onClick={ increment }>+</Button>
      </div>
    );
  }
});

function mapStateToProps({ counter }) {
  return {
    currentCount: counter.count,
    delta: counter.delta
  };
}

export default connect(mapStateToProps, counterActions)(App);
