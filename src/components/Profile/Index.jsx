import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  

  const handleClick = () => {
    history.push("/config");
  }


  return (
    <>
      <p>Profile component</p>
      <h1>Welcome back {user.username}!</h1>
      <p>
        Your registered email is: <b>{user.email}</b>
      </p>
      <p>
        Your current password is: <b>{user.password}</b>
      </p>
      <br />
      <p>
        If you would like to change your current password or delete your account{" "}
        <button onClick={handleClick}>Click here</button>
      </p>
    </>
  );
};

export default Profile;
