import useIncrement from "../UseIncrement";
function Counter2() {
  const [count, increase] = useIncrement(2);

  return (
    <div>
      <h1>Counter 2</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Increment</button>
    </div>
  );
}

export default Counter2;
