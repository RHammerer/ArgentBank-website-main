import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./edit.css";
import Account from "../composants/Account/Account";
import Footer from "../composants/Footer";
import Header from "../composants/utils/Header";

export default function Edit() {
  const token = useSelector((store) => store.auth.token);
  const user = useSelector((store) => store.user);
  const [formData, setFormData] = useState({
    userName: user.userName,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    const user = await response.json();
    console.log(user);
    if (response.ok) {
      navigate("/user");
    }
  };

  useEffect(() => {
    if (!token) {
      return navigate("/login");
    }
  });
  return (
    <>
      <Header />
      <main>
        <h1>Edit user info</h1>
        <div className="form">
          <form className="edit-form" onSubmit={handleSubmit}>
            <label>
              User name
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
            </label>
            <label>
              First name
              <input type="text" value={user.firstName} disabled />
            </label>
            <label>
              Last name
              <input type="text" value={user.lastName} disabled />
            </label>
            <div className="div-button-form">
              <button className="button-submit" type="submit">
                Save
              </button>
              <button className="button-submit" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
        <div>
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
        </div>
      </main>
      <Footer />
    </>
  );
}
