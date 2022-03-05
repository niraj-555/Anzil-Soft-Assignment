import React, { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(0);

  const onAdd = () => setResult(Number(input1) + Number(input2));
  const onSubtract = () => setResult(input1 - input2);
  const onMultiply = () => setResult(input1 * input2);
  const onDivide = () => setResult(input1 / input2);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "20rem",
      }}
    >
      <h1>Calculator</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "40%",
          justifyContent: "space-between",
        }}
      >
        <label>Input 1</label>
        <input
          type="number"
          name="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
        <label>Input 2</label>
        <input
          type="number"
          name="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <div>
        <h3>Result : {result}</h3>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "20%",
        }}
      >
        <button type="submit" onClick={onAdd}>
          Add
        </button>
        <button type="submit" onClick={onSubtract}>
          Subtract
        </button>
        <button type="submit" onClick={onMultiply}>
          Multiply
        </button>
        <button type="submit" onClick={onDivide}>
          Divide
        </button>
      </div>
    </div>
  );
};

export default Calculator;
