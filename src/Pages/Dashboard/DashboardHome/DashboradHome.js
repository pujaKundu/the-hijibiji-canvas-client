import React from "react";
import { Container, Typography, Box } from "@mui/material";
import dash from "../../../images/dashBg.jpg";
const DashboradHome = () => {
  return (
    <Container
      style={{
        backgroundImage: `url(${dash})`,
        backgroundSize: "cover",
        height: "100vh",
        marginTop: "-4%",
      }}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box>
        <Typography
          variant="h4"
          style={{ color: "#1F1D36", backgroundColor: "white", padding: "2%" }}
        >
          Please choose an acion to perform
        </Typography>
      </Box>
    </Container>
  );
};

export default DashboradHome;
