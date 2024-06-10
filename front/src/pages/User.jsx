import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./user.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInfoUser } from "../redux/reducers/userReducer";
import Account from "../composants/Account/Account.jsx";
import Footer from "../composants/Footer.jsx";

export default function User() {
  const token = useSelector((store) => store.auth.token);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }

    const getUser = async () => {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);
      dispatch(getInfoUser(data.body));
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav">
          <img
            className="main-nav-logo-image"
            src="../src/images/argentbanklogo.png"
            alt="Argent Bank Logo"
          />
        </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          <a className="main-nav-item" href="./user.html">
            <i className="fa fa-user-circle"></i>
            {user.userName}
          </a>
          <a className="main-nav-item" href="./index.html">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </nav>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}
          </h1>

          <Link className="edit-name-button" to="/edit">
            Edit Name
          </Link>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account-section">
          <h2 className="sr-only">Accounts</h2>
          <Account
            titre="Argent Bank Checking (x8349)"
            montant="$2,082.79"
            description="Available Balance"
          />
          <Account
            titre="Argent Bank Savings (x6712)"
            montant="$10,928.42"
            description="Available Balance"
          />
          <Account
            titre="Argent Bank Credit Card (x8349)"
            montant="$184.30"
            description="Current Balance"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
