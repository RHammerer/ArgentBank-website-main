import { NavLink } from "react-router-dom";
import "./navigation.css";
import Login from "../../pages/Login.jsx";
import Logo from "../../images/argentBankLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/reducers/auth.slice.js";
import { logoutUser } from "../../redux/reducers/userReducer.js";

export default function Navigation() {
  const token = useSelector((store) => store.auth.token);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src="../src/images/argentbanklogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          {!token && <NavLink to="/login"> Sign in</NavLink>}
          {token && (
            <NavLink className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {user.userName}
            </NavLink>
          )}
          {token && (
            <NavLink
              onClick={() => {
                dispatch(logout());
                dispatch(logoutUser());
              }}
              className="main-nav-item"
              to="/login"
            >
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}
