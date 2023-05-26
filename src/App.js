import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const operations = {
    "/": function (x, y) {
      return x / y;
    },
    "*": function (x, y) {
      return x * y;
    },
    "+": function (x, y) {
      return x + y;
    },
    "-": function (x, y) {
      return x - y;
    },
  };

  function back() {
    let text = input.split("");
    console.log(text);
    if (text[text.length - 1] === " ") {
      text.pop();
      text.pop();
    }
    text.pop();
    console.log(text);

    setInput(text.join(""));
  }

  function clearCalc() {
    setInput("");
  }

  function insert(val) {
    if (
      val !== "." &&
      isNaN(val) &&
      input.length > 3 &&
      isNaN(input[input.length - 2])
    ) {
      setInput(input.slice(0, input.length - 3));
    } else {
      setInput(input + val);
    }
  }

  function isInt(val) {
    return val % 1 === 0;
  }

  function equals() {
    let operators = ["/", "*", "+", "-"];

    if (!operators.some((e) => input.includes(e))) return;

    let text = input.split(" ");

    console.log("text:", text);

    operators.forEach((operator) => {
      while (text.includes(operator)) {
        let operatorIndex = text.findIndex((e) => e === operator);
        console.log("Operator Index:", operatorIndex);

        let leftIndex = operatorIndex - 1;
        let rightIndex = operatorIndex + 1;

        let evaluate = operations[operator](
          Number(text[leftIndex]),
          Number(text[rightIndex])
        );
        console.log("Evaluate:", evaluate);

        text.splice(leftIndex, 3, evaluate);
      }
    });
    // console.log(text);
    text = Number(text[0]);
    setInput(isInt(text) ? text : text.toFixed(4));
    return text;
  }

  // function handleKeypress(e) {
  //   switch (e.key) {
  //     case "/":
  //       insert(" / ");
  //       break;
  //     case "*":
  //       insert(" * ");
  //       break;
  //     case "+":
  //       insert(" + ");
  //       break;
  //     case "-":
  //       insert(" - ");
  //       break;
  //     case ".":
  //       insert(e.key);
  //       break;
  //     case "Enter":
  //       equals();
  //       break;
  //     case "Backspace":
  //       back();
  //       break;
  //     case "Delete":
  //       clearCalc();
  //       break;
  //     case "0":
  //       insert(e.key);
  //       break;
  //     case "1":
  //       insert(e.key);
  //       break;
  //     case "2":
  //       insert(e.key);
  //       break;
  //     case "3":
  //       insert(e.key);
  //       break;
  //     case "4":
  //       insert(e.key);
  //       break;
  //     case "5":
  //       insert(e.key);
  //       break;
  //     case "6":
  //       insert(e.key);
  //       break;
  //     case "7":
  //       insert(e.key);
  //       break;
  //     case "8":
  //       insert(e.key);
  //       break;
  //     case "9":
  //       insert(e.key);
  //       break;

  //     default:
  //       break;
  //   }

  //   console.log(e.key);
  // }

  return (
    <div>
      <div className="main">
        <div className="calculator">
          <form name="form">
            <input
              className="textView"
              name="textView"
              readOnly
              // onKeyUp={handleKeypress}
              value={input}
            />
          </form>
          <br />
          <table>
            <tbody>
              {/* Row 1 */}
              <tr>
                <td colSpan="2"></td>
                <td>
                  <input
                    type="button"
                    value="C"
                    className="backBtn btn"
                    onClick={back}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="AC"
                    className="clearBtn btn"
                    onClick={clearCalc}
                  />
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value={1}
                    className="btn"
                    onClick={() => insert(1)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value={2}
                    className="btn"
                    onClick={() => insert(2)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value={3}
                    className="btn"
                    onClick={() => insert(3)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value=" / "
                    className="btn"
                    onClick={() => insert(" / ")}
                  />
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="4"
                    className="btn"
                    onClick={() => insert(4)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="5"
                    className="btn"
                    onClick={() => insert(5)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="6"
                    className="btn"
                    onClick={() => insert(6)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="&#215;"
                    className="btn"
                    onClick={() => insert(" * ")}
                  />
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="7"
                    className="btn"
                    onClick={() => insert(7)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="8"
                    className="btn"
                    onClick={() => insert(8)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="9"
                    className="btn"
                    onClick={() => insert(9)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="-"
                    className="btn"
                    onClick={() => insert(" - ")}
                  />
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td>
                  <input
                    type="button"
                    value="."
                    className="btn"
                    onClick={() => insert(" . ")}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="0"
                    className="btn"
                    onClick={() => insert(0)}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="="
                    className="btn"
                    onClick={equals}
                  />
                </td>
                <td>
                  <input
                    type="button"
                    value="+"
                    className="btn"
                    onClick={() => insert(" + ")}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
