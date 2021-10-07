import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./screens/Login";
import Register from "./screens/Register";

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken,
} from "./services/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  // const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    // history.push("/");
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    // history.push("/");
  };

  // const handleLogout = () => {
  //   setCurrentUser(null);
  //   localStorage.removeItem("authToken");
  //   removeToken();
  // };

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/register">
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path="/login">
            <Login handleLogin={handleLogin} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
