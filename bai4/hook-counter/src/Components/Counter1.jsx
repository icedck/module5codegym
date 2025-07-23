import useIncrement from "../UseIncrement";
function Counter1() {
  const [count, increase] = useIncrement(1);

  return (
    <div>
      <h1>Counter 1</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Counter1;
