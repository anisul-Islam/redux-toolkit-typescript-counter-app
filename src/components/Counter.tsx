import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { RootState } from '../store';
import { decrement, increment, incrementBy5, reset } from './counterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counterR.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementBy5 = () => {
    dispatch(incrementBy5(5));
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleIncrementBy5}>+5</button>
      <button onClick={handleReset}>0</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
