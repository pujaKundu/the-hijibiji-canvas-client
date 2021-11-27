import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import loginBg from "../../../images/login.jpg";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const location = useLocation();
  const history = useHistory();

  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();
  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLogin = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        container
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 3 }} variant="h5" gutterBottom>
            Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLogin}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                label="Your Email"
                name="email"
                onChange={handleOnChange}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-password-input"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">New User? Please Register</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress color="secondary" />}
          {user?.email && <Alert severity="success">Login Successful</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ width: "100%", marginTop: "1%" }}
            src={loginBg}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
