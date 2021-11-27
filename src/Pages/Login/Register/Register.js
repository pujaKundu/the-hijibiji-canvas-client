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
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  //const history = useHistory();
  const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(loginData);
  };
  const handleRegister = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name);
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
            Create new account
          </Typography>
          {!isLoading && (
            <form onSubmit={handleRegister}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                label="Your Name"
                name="name"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnBlur}
                variant="outlined"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-password-input"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="outlined-password-input"
                label="Confirm Password"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
              />
              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <Typography>Already have an account?</Typography>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress color="secondary" />}
          {user?.email && (
            <Alert severity="success">Registration Successful</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={loginBg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
