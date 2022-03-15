import React, { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": process.env.REACT_APP_PROJECT_ID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      // username | password => chatengin -> give messages
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      // work out -> logged in (store user login and reload)
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      console.log("set done");

      window.location.reload();
    } catch (err) {
      // error -> try with new username ...
      setError("Oops... Incorrect username or password");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Applciation</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          {error !== "" && <h2 className="error">{error}</h2>}
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
