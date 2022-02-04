import { connect } from "react-redux";

function mapStateToProp(state) {
  return state;
}

// props 가 변경되면 컴포넌트가 렌더링된다.
function State(props) {
  return (
    <>
      <hr />
      Store:
      <div style={{ border: "1px solid black", margin: "10px 0px", width: "250px", padding: "10px" }}>{JSON.stringify(props)}</div>
    </>
  );
}

export default connect(mapStateToProp, null)(State);
