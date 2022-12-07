import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import banner from "../../../../images/banner.jpg";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";

const Banner = () => {
  const history = useHistory();
  const theme = useTheme();
  const useStyles = makeStyles({
    bannerText: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    },
  });
  const { bannerText } = useStyles();
  const handleExploreBtn = () => {
    const path = "/services";
    history.push(path);
  };
  return (
    <Paper
      fluid
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          py: 10,
          px: 2,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            style={{
              textTransform: "uppercase",
              color: "#3B185F",
              textShadow: "1px 2px #A12568",
              fontFamily: "Dancing Script, cursive",
            }}
            sx={{ py: 2 }}
            className={bannerText}
          >
            ADD SOME COLOR TO YOUR LIFE
          </Typography>
          <Button
            onClick={handleExploreBtn}
            style={{ marginBottom: "30px", backgroundColor: "#3B185F" }}
            sx={{ my: 2 }}
            variant="contained"
          >
            Explore more
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Banner;
