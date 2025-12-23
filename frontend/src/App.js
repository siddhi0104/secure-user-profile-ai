import { useState } from "react";
import { loginUser, getProfile } from "./api";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      const token = res.data.token;
      const profileRes = await getProfile(token);
      setProfile(profileRes.data);
      setError("");
    } catch (err) {
      setError("Login failed");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      {!profile ? (
        <>
          <h2>Login</h2>
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
          <button onClick={handleLogin}>Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      ) : (
        <>
          <h2>User Profile</h2>
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Aadhaar: {profile.aadhaar}</p>
        </>
      )}
    </div>
  );
}

export default App;
