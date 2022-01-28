import * as actions from "modules";
import { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

function mapStateToProps(state) {
  return { token: state.token };
}

function mapDispatchToProps(dispatch) {
  return { onSetToken: (token) => dispatch(actions.setToken(token)) };
}

function Login(props) {
  console.log(props);

  const [loginInfo, setLoginInfo] = useState({});
  const inputs = [
    { type: "text", placeholder: "insert your email", label: "email" },
    { type: "password", placeholder: "insert your password", label: "password" },
  ];

  function handleChange(type, value) {
    let changed = loginInfo;
    changed[type] = value;
    setLoginInfo(changed);
  }

  function handleSubmit() {
    console.log(loginInfo);

    axios
      .post("https://reqres.in/api/login", { ...loginInfo })
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <h1>Login.js</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {inputs.map((i, idx) => (
          <p key={idx}>
            <label>{i.label}: </label>
            <input {...i} onChange={(e) => handleChange(i.label, e.target.value)} />
          </p>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
