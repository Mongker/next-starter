import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from 'core/actions';
import { AppState } from 'core/interfaces';

const Counter: React.FC = () => {
  const count = useSelector((state: AppState): number => state.count);
  const dispatch = useDispatch();

  const onIncrement = (): void => {
    dispatch(increment());
  };

  const onDecrement = (): void => {
    dispatch(decrement());
  };

  const onReset = (): void => {
    dispatch(reset());
  };

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
      {/* @ts-ignore */}
      <style jsx global>{`
        div {
          padding: 0 0 20px 0;
        }
      `}</style>
    </div>
  );
};

export default Counter;
