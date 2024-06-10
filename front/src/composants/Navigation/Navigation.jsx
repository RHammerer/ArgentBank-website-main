import { NavLink } from "react-router-dom";
import "./navigation.css";
import Login from "../../pages/Login.jsx";
import Logo from "../../images/argentBankLogo.png";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              Home
              <a href="" src={Logo} alt Logo Argent Bank />
            </NavLink>
          </li>
          <li>
            <NavLink to="/Login"> Sign in</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
