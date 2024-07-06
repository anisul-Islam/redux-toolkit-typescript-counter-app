import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../../features/counter/counterSlice';
import { useState } from 'react';

const Counter = () => {
  const { count } = useSelector((state: RootState) => state.counterR);

  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  const dispatch: AppDispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = (incrementAmount: number) => {
    dispatch(incrementByAmount(incrementAmount));
  };

  const handleIncrementChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIncrementAmount(Number(event.target.value));
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div>
        <input
          type="number"
          value={incrementAmount}
          onChange={handleIncrementChange}
        />
        <button onClick={() => handleIncrementByAmount(incrementAmount)}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
