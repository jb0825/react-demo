import { useSelector } from "react-redux";

export default function State() {
  const state = useSelector(state => state);

  return (
    <>
      <hr />
      Store:
      <div
        style={{ border: "1px solid black", margin: "10px 0px", width: "250px", padding: "10px" }}
      >
        {JSON.stringify(state)}
      </div>
    </>
  );
}
