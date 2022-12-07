import { Alert, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState();
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    const url = "https://hijibiji-data.onrender.com/users/admin";
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Make admin
      </Typography>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "60%" }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button
          style={{
            backgroundColor: "#1F1D36",
            color: "white",
            padding: "8px",
            margin: "15px 0",
            border: "none",
            borderRadius: "5px",
            fontSize: "15px",
            cursor: "pointer",
            width: "60%",
          }}
          type="submit"
          variant="contained"
        >
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Made Admin Successfully</Alert>}
    </Container>
  );
};

export default MakeAdmin;
