import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const Config = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const user = useSelector((state) => state.user);
    const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === user.password) {
        user.password = newPassword;
    } else {
        alert("Your previous password is incorrect.")
    }
  };

  return (
    <>
      <h2>Configuration tab</h2>
      <form>
        <div>
          <p>
            To change your password you must enter your previous password and then
            your new password
          </p>
          <label>Previous password: </label>
          <input type="prevPassword" onChange={(e) => setPassword(e.target.value)}/>
          <br />
          <label>New password: </label>
          <input type="newPassword" onChange={(e) => setNewPassword(e.target.value)}/>
          <br />
          <button onClick={handleSubmit}>Update Password</button>
        </div>
      </form>

      <br/><br/><br/>

        <div>
            <button onClick={(e) => history.push("/deleteAcc")}>Delete your account</button>
        </div>
    </>
  );
};

export default Config;
