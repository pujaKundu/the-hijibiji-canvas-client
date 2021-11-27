import { Paper, Grid, Typography, Box } from "@mui/material";
import React from "react";
import pay from "../../../images/pay.jpg";
import "./Footer.css";
import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import logo from "../../../images/logo.png";

const Footer = () => {
  return (
    <Paper
      style={{ backgroundColor: "#1F1D36", color: "white", paddingTop: "2%" }}
    >
      <img src={logo} alt="" />
      <Typography variant="h5" sx={{ fontFamily: "Dancing Script, cursive" }}>
        The HijiBiji Canvas
      </Typography>
      <Box sx={{ p: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Typography>
              <RoomIcon /> Savar,Dhaka,Bangladesh
            </Typography>
            <Typography>
              <EmailIcon /> info@hjbjcanvas.com
            </Typography>
            <Typography>
              <LocalPhoneIcon /> +880 12345678
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={pay} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Footer;
