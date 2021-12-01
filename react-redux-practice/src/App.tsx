import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/actions";
import "./app.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      Counter <br /> <span>{counter}</span>
      <div>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
