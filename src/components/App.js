import * as actions from "modules";
import { connect } from "react-redux";
import Navigate from "routes";
import Links from "routes/Links";
import State from "./State";
import "./Block.css";

function mapStateToProp(state) {
  return { token: state.token };
}

function mapDispatchToProp(dispatch) {
  return {
    setToken: token => dispatch(actions.setToken(token)),
    clear: () => dispatch(actions.clearStore()),
  };
}

function App(props) {
  return (
    <>
      <div id="block" />
      <>
        <h1>App.js</h1>
        <Links />
        <Navigate />
        <State />
        <button onClick={props.clear}>Clear Store</button>
        <button onClick={() => props.setToken("test")}>Set Token Test</button>
      </>
    </>
  );
}

export default connect(mapStateToProp, mapDispatchToProp)(App);
