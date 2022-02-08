import * as config from "config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Register() {
  const token = useSelector(state => state.user.token);
  const navigate = useNavigate();
  const [registerInfo, setRegisterInfo] = useState({
    email: "eve.holt@reqres.in",
    password: "pistol",
  });
  const inputs = [
    { type: "text", placeholder: "insert your email", name: "email" },
    { type: "password", placeholder: "insert your password", name: "password" },
  ];

  useEffect(() => {
    if (token) {
      alert("aleady login");
      navigate("/");
    }
  });

  function handleChange(type, value) {
    const changed = registerInfo;
    changed[type] = value;
    setRegisterInfo(changed);
  }

  function handleSubmit() {
    const block = document.getElementById("block");
    block.style.display = "block";

    axios
      .post(`${config.SERVER_URL}/register`, { ...registerInfo })
      .then(resp => {
        alert("Register Success!");
        navigate("/");
      })
      .catch(err => {
        alert("Register Error!");
        console.error(err);

        for (let i of document.querySelectorAll("input")) i.value = "";
      })
      .finally(() => (block.style.display = "none"));
  }

  return (
    <article>
      <h1>Register.js</h1>
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
                defaultValue={registerInfo[i.name]}
              />
            </p>
          ))}
          <button type="submit">Submit</button>
        </form>
      </section>
    </article>
  );
}
