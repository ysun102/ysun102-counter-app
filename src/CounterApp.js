/*
 * Expressing Counter app in React JS
 */

import "./App.css";
import { useState } from "react";

export default function CounterApp() {
  let [count, setCount] = useState(0);

  function plus1() {
    // This illustrates that state variable setters
    // don't change the state variable immediately,
    // which is a common source of bugs for React JS
    // programmers that don't understand this.
    const newCount = count + 1;
    setCount(newCount);
    console.log(
      `After setCount(${newCount}), count is ${count} and newCount is ${newCount}`
    );
  }

  function plus3() {
    /*
    // the following does *not* work, and illustrates that React state variables
    // are *not* like regular JavaScript variables.
    setCount(1 + count);
    setCount(1 + count);
    setCount(1 + count);
    */

    // instead, you can do the following
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // Of course you could instead do one of the following:
    //   setCount(count + 3)
    //   setCount((prev) => prev + 3);
    // It's always "safer" to use the setCount(prev) version
  }

  function reset() {
    setCount(0);

    /*
    // Note that if const is changed to let in `const [count, ...`,
    // replacing the above code by the following will *not*
    // have an effect, since setCount is needed to trigger a re-render.
    //count = 0;
    //setCount(count);
    */
  }

  /*
   * Illustrate CSS styles can be written as JavaScript objects in JSX.
   * (But you can still use .css files in React JS if you want to!)
   */
  const styles = {
    number: {
      color: "lime",
      padding: "10px",
      // Note camelCasing of CSS properties normally written with hyphens. E.g.,
      //   background-color => backgrounColor,
      //   font-size => fontSize
      //   font-weight => fontWeight
      backgroundColor: "blue",
      fontSize: "24px",
      fontWeight: "bold",
    },
  };

  return (
    <div className="CounterApp">
      <h1>Counter App</h1>
      <span style={styles.number}>{count}</span>
      <button onClick={plus1}>+1</button>
      <button onClick={plus3}>+3</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
