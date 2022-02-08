import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const linksRequireLogin = [{ to: "/users", text: "Show Users" }];

const links = [
  { to: "/login", text: "Login" },
  { to: "/register", text: "Register" },
];

export default function Links() {
  const token = useSelector(state => state.user.token);
  let navLinks = !token ? links : linksRequireLogin;

  return (
    <nav>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {navLinks?.map((i, idx) => (
        <li key={idx}>
          <NavLink to={i.to}>{i.text}</NavLink>
        </li>
      ))}
    </nav>
  );
}
