import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

type Props = { initial?: number };
const FormReducer = ({ initial = 0 }: Props) => {
  const [state, dispatch] = useReducer(reducer, { count: initial });
  return (
    <>
      <h1>Calculatrice</h1>

      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <span aria-label="count">Le total est de {state.count}</span>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
};
export default FormReducer;
