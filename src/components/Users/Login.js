import * as actions from "modules";
import * as config from "config";
import { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  return { onSetToken: token => dispatch(actions.setToken(token)) };
}

function Login(props) {
  const onSetToken = props.onSetToken;
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const inputs = [
    { type: "text", placeholder: "insert your email", name: "email" },
    { type: "password", placeholder: "insert your password", name: "password" },
  ];

  function handleChange(type, value) {
    let changed = loginInfo;
    changed[type] = value;
    setLoginInfo(changed);
  }

  function handleSubmit() {
    const block = document.getElementById("block");
    block.style.display = "block";

    axios
      .post(`${config.SERVER_URL}/login`, { ...loginInfo })
      .then(resp => {
        alert("Login Success!");

        onSetToken(resp.data.token);
        navigate("/");
      })
      .catch(err => {
        alert("Login Error!");
        console.error(err);

        for (let i of document.querySelectorAll("input")) i.value = "";
      })
      .finally(() => (block.style.display = "none"));
  }

  return (
    <article>
      <h1>Login.js</h1>
      <section>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {inputs.map((i, idx) => (
            <p key={idx}>
              <label>{i.name}: </label>
              <input
                {...i}
                onChange={e => handleChange(i.name, e.target.value)}
                defaultValue={loginInfo[i.name]}
              />
            </p>
          ))}
          <button type="submit">Submit</button>
        </form>
      </section>
    </article>
  );
}

export default connect(null, mapDispatchToProps)(Login);
