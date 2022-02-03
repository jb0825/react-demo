import { token } from "auth";
import Home from "components/Home";
import Login from "components/Users/Login";
import Register from "components/Users/Register";
import Users from "components/Users/Users";
import { useState } from "react";
import { connect } from "react-redux";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/users", element: <Users /> },
  { path: "*", element: <p>page not found!</p> },
];

const linksRequireLogin = [{ to: "/users", text: "Show Users" }];

const links = [
  { to: "/login", text: "Login" },
  { to: "/register", text: "Register" },
];

function mapStateToProp(state) {
  return { token: state.token };
}

function Links(props) {
  const token = useState(props.token);
  const navLinks = token ? linksRequireLogin : links;

  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {navLinks.map((i, idx) => (
        <li key={idx}>
          <NavLink to={i.to}>{i.text}</NavLink>
        </li>
      ))}
      <Outlet />
    </nav>
  );
}

connect(mapStateToProp, null)(Links);

export default function Navigate() {
  return (
    <>
      <Routes>
        <Route element={<Links />}>
          <Route index element={<Home />} />
          {routes.map((i, idx) => (
            <Route {...i} key={idx} />
          ))}
        </Route>
      </Routes>
    </>
  );
}
