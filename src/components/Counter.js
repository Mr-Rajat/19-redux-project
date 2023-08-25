// videoNo 274 important
// import { Component } from 'react';
import { counterActions } from './store';
import { useSelector, useDispatch, connect } from 'react-redux';
// connect is used to use redux in class based components. can also be used in fxn comp. 
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // state.counter in this counter is the key from reducer in the store configure
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  // we need to pass a fxn which will received the state managed by redux, then we return the part of the state we want to extract. when we used useSelector react redux automatically sets the subscription for this 

  const incrementHandler = () => {
    // dispatch({ type: 'increment' });
    dispatch(counterActions.increment());
  }

  const increaseHandler = () => {
    // dispatch({ type: 'increase', payload: 5 });
    dispatch(counterActions.increase(5));

  }

  const decrementHandler = () => {
    // dispatch({ type: 'decrement' });
    dispatch(counterActions.decrement());

  }

  const toggleCounterHandler = () => { 
    // dispatch({ type: 'toggle' })
    dispatch(counterActions.toggleCounter());

   };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={increaseHandler} >Increase by 5</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// // class based redux component
// class Counter extends Component {

//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)} >Increment</button>
//           <button onClick={this.decrementHandler.bind(this)} >Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// // class based : connect return new fxn then we pass our component . It is HOF
// const mapStateToProps = state => {
//   return {
//     counter: state.counter,
//   }
// }; //state from store

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),

//   }

// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
// connect() accepts 2 arguments, 1 is mapStateToProp fx which connect state ,and other is dispatch fxn


