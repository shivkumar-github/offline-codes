import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Button to increment the counter */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Button to decrement the counter */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      {/* Button to reset the counter */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

Counter();
// export default Counter;
