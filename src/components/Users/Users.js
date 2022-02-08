import * as config from "config";
import axios from "axios";
import "./Users.css";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function mapStateToProp(state) {
  return { token: state.users.token };
}

function Users(props) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  let [page, setPage] = useState(0);

  useEffect(() => {
    if (!props.token) {
      alert("login is required!");
      navigate("/");
    } else {
      axios
        .get(`${config.SERVER_URL}/users`)
        .then(resp => {
          const data = resp.data;
          setUsers(data.data);
          setPage(data.total_pages);
          setPageActive("a:first-child");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  function handleClickPage(page) {
    axios
      .get(`${config.SERVER_URL}/users?page=${page}`)
      .then(resp => {
        const data = resp.data;

        setUsers(data.data);
        setPage(data.total_pages);
        setPageActive(`a:nth-child(${page})`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function setPageActive(selector) {
    document.querySelector("#pagination #active")?.removeAttribute("id");
    document.querySelector(`#pagination ${selector}`).id = "active";
  }

  function pagination() {
    const result = [];

    for (let i = 1; i <= page; i++) {
      result.push(
        <a
          href="none"
          key={i}
          onClick={e => {
            e.preventDefault();
            handleClickPage(i);
          }}
        >
          {i}
        </a>
      );
    }
    return result;
  }

  return (
    <article>
      <h1>Users.js</h1>
      <div id="user-data">
        {users?.map(i => (
          <div key={i.id}>
            <img src={i.avatar} alt="" />
            <p>
              <strong>
                {i.first_name} {i.last_name}
              </strong>
            </p>
            <p>{i.email}</p>
          </div>
        ))}
      </div>
      <div id="pagination">{pagination()}</div>
    </article>
  );
}

export default connect(mapStateToProp, null)(Users);
