import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../database/lowdb";
import { logout } from "../../redux/userSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { updateUserPassword } from "../../database/lowdb";

const Config = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === user.password) {
      if (password === newPassword) {
        alert("You can not choose the same password as the previous one.");
      } else {
        // user.password = newPassword;
        updateUserPassword(user.id, newPassword);
        alert("Your password has been updated successfully.")  
        history.push("/profile");
      }
    } else {
      alert("Your previous password is incorrect.");
    }
  };

  const handleDeleteAccount = () => {
    // grab userId from redux
    const userId = user.id;
    // call lowDbs deleteUser
    const deletionSuccessful = deleteUser(userId);
    console.log(deletionSuccessful);
    // if deleteUser === true > call redux logout function
    if (deletionSuccessful) {
      dispatch(logout());
    }
  };

  return (
    <>
      <h2>Configuration tab</h2>
      <form>
        <div>
          <p>
            To change your password you must enter your previous password and
            then your new password
          </p>
          <label>Previous password: </label>
          <input
            type="prevPassword"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>New password: </label>
          <input
            type="newPassword"
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <button onClick={handleSubmit}>Update Password</button>
        </div>
      </form>

      <br />
      <br />
      <br />

      <div>
        <button onClick={handleDeleteAccount}>Delete your account</button>
      </div>
    </>
  );
};

export default Config;
