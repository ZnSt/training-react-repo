export const ControlsCounter = ({ increment, decrement }) => {
  return (
    <div>
      <button type="button" onClick={increment}>
        Увеличить на 1
      </button>
      <button type="button" onClick={decrement}>
        Уменьшить на 1
      </button>
    </div>
  );
};
