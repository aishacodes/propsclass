import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <section className="border w-2/4 mx-auto my-16">
      <h3 className="text-5xl text-center">Counter</h3>
      <p className="text-center text-5xl my-11">{count}</p>
      <div className="flex items-center justify-center gap-8">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count - 1)}>decrease</button>
      </div>
    </section>
  );
};

export default Counter;
