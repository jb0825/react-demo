import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const linksRequireLogin = [{ to: "/users", text: "Show Users" }];

const links = [
  { to: "/login", text: "Login" },
  { to: "/register", text: "Register" },
];

function mapStateToProp(state) {
  return { token: state.users.token };
}

function Links(props) {
  let navLinks = !props.token ? links : linksRequireLogin;

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

export default connect(mapStateToProp, null)(Links);
