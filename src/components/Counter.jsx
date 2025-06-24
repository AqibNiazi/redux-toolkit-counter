import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  increase,
  toggleCounter,
} from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.Counter.counter);
  const show = useSelector((state) => state.Counter.showCounter);
  const incrementHandler = () => {
    dispatch(increment());
  };
  const increaseHandler = () => {
    dispatch(increase(5));
  };
  const decrementHandler = () => {
    dispatch(decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
