import Home from "components/Home";
import Login from "components/Users/Login";
import Register from "components/Users/Register";
import Users from "components/Users/Users";
import { Route, Routes } from "react-router-dom";

const routes = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/users", element: <Users /> },
  { path: "*", element: <p>page not found!</p> },
];

export default function Navigate() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        {routes.map((i, idx) => (
          <Route {...i} key={idx} />
        ))}
      </Routes>
    </>
  );
}
