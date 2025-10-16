import React, { useState } from "react";

// useState
function Count() {
  const [count, setCounter] = useState(0); // takes initial parameter i.e. rendered as count=0
  function decrease() {
    setCounter((prev) => prev - 1);
  }
  function increase() {
    setCounter((prev) => prev + 1); // prev is just a local variable (parameter) for setCounter function
  }
  return (
    <>
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
    </>
  );
}

// useState function version
function Class_Component() {
  const [count2, setCounter] = useState(() => {
    console.log("getting very little");
    return 0;
  }); // this zero value is get into count2

  function decrease1() {
    setCounter((prev) => prev - 1);
  }
  function increase1() {
    setCounter((prev) => prev + 1);
  }

  return (
    <>
      <button onClick={decrease1}>-</button>
      <span>{count2}</span>
      <button onClick={increase1}>+</button>
    </>
  );
}

export default Count;
export { Class_Component };
