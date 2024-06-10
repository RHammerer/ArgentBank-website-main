import { getInfoUser } from "../../redux/reducers/userReducer";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./header.css";

export default function Header() {
  const user = useSelector((store) => store.user);

  const getUser = async () => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    dispatch(getInfoUser(data.body));
  };

  return (
    <header>
      <nav className="nav-logged">
        <a>
          <img
            src="https://cdn.discordapp.com/attachments/1191365037126844467/1233019477432733697/image.png?ex=662b925f&is=662a40df&hm=23d3a82331d8b5a3624c0adb5d08b2f4c07b1066618c096b840c66bf9015f935&"
            alt="Logo Argent Bank"
          />
        </a>
        <ul className="ul-logged-user">
          <li>
            <p>{user.userName}</p>
          </li>
          <li>
            <a>Paramètres ?</a>
          </li>
          <li>
            <NavLink to="/">Déconnexion</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
