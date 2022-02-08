import State from "./State";
import "./Block.css";
import * as actions from "modules";
import { useDispatch } from "react-redux";
import Links from "routes/Links";
import Navigate from "routes";
import { useNavigate } from "react-router-dom";

export default function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div id="block" />
      <>
        <h1>App.js</h1>
        <Links />
        <Navigate />
        <State />
        <button onClick={() => dispatch(actions.clearStore())}>Clear Store</button>
        <button onClick={() => dispatch(actions.setToken("test"))}>Set Token Test</button>
      </>
    </>
  );
}
