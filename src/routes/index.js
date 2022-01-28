import Home from "components/Home";
import Login from "components/Users/Login";
import Register from "components/Users/Register";
import Users from "components/Users/Users";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/users", element: <Users /> },
  { path: "*", element: <p>page not found!</p> },
];

const links = [
  { to: "/", text: "Home" },
  { to: "/login", text: "Login" },
  { to: "/register", text: "Register" },
  { to: "/users", text: "Show Users" },
];

function Links() {
  return (
    <nav>
      {links.map((i, idx) => (
        <li key={idx}>
          <NavLink to={i.to}>{i.text}</NavLink>
        </li>
      ))}
      <Outlet />
    </nav>
  );
}

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
