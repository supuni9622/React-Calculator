import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [expression, setExpression] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setExpression((ex) => evaluate(ex));
  };
  return (
    <div className="App">
      <style>
        {`button {
          width: 20px
        }`}
      </style>
      <div>{expression}</div>
      <form onSubmit={submit}>
        <div>
          <button type="button" onClick={() => setExpression((ex) => `${ex}+`)}>
            +
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}-`)}>
            -
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}*`)}>
            *
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}/`)}>
            /
          </button>
        </div>
        <div>
          <button type="button" onClick={() => setExpression((ex) => `${ex}.`)}>
            .
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}9`)}>
            9
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}8`)}>
            8
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}7`)}>
            7
          </button>
        </div>
        <div>
          <button type="button" onClick={() => setExpression((ex) => `${ex}6`)}>
            6
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}5`)}>
            5
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}4`)}>
            4
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}3`)}>
            3
          </button>
        </div>
        <div>
          <button type="button" onClick={() => setExpression((ex) => `${ex}2`)}>
            2
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}1`)}>
            1
          </button>
          <button type="button" onClick={() => setExpression((ex) => `${ex}0`)}>
            0
          </button>
          <button type="submit">=</button>
        </div>
        <div>
          <button
            type="button"
            style={{ width: 50 }}
            onClick={() => setExpression("")}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
