import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Index.css";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const character = useSelector((state) => state.character);
  const history = useHistory();

  const handleClick = () => {
    history.push("/config");
  };

  return (
    <div className="profile-container">
      <h1>Welcome back {user.username}!</h1>
      <p>
        Your registered email is: <b>{user.email}</b>
      </p>
      <p>
        Your current password is: <b>{user.password}</b>
      </p>
      {!character && <p>You still don't have a character in your profile.</p>}
      {character && <img className="char-image" src={character.image} alt={character.name} />}
      {character && <p>Your character is {character.name}</p>}
      {character && <p>Location is {character.location.name}</p>}
      <br />
      <p>
        If you would like to change your current password or delete your account{" "}
        <button onClick={handleClick}>Click here</button>
      </p>
    </div>
  );
};

export default Profile;
