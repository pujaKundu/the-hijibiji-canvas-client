import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import "./Header.css";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const theme = useTheme();
  const { user, logout } = useAuth();
  const useStyles = makeStyles({
    navIcon: {
      [theme.breakpoints.up("sm")]: {
        display: "none !important",
      },
    },
    navItemContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "none !important",
      },
    },
    navLogo: {
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
  });
  const { navIcon, navItemContainer, navLogo } = useStyles();
  const [state, setState] = React.useState(false);

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#440A67",
              textAlign: "left",
            }}
            to="/"
          >
            <Button color="inherit">Home</Button>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={{
              textDecoration: "none",
              color: "#440A67",
              textAlign: "left",
            }}
            to="/services"
          >
            <Button color="inherit">Explore</Button>
          </NavLink>
        </ListItem>
      </List>
      <List>
        {user?.email ? (
          <List>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none", color: "#440A67" }}
                to="/dashboard"
              >
                <Button color="inherit">Dashboard</Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <AccountCircleIcon />
              <Typography
                style={{
                  color: "#A12568",
                  textTransform: "uppercase",
                  textShadow: "1px 0px #440A67",
                  paddingLeft: "3%",
                }}
              >
                {user.displayName}
              </Typography>
            </ListItem>
            <ListItem>
              <Button
                style={{ backgroundColor: "#440A67", color: "white" }}
                onClick={logout}
              >
                <LogoutIcon />
                Logout
              </Button>
            </ListItem>
          </List>
        ) : (
          <List>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none", color: "#440A67" }}
                to="/login"
              >
                <Button color="inherit">Login</Button>
              </NavLink>
            </ListItem>
          </List>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          style={{ backgroundColor: "transparent", color: "#440A67" }}
          position="static"
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img style={{ margin: "10px 0" }} src={logo} alt="" />
              <Typography
                style={{
                  textAlign: "left",
                  textTransform: "uppercase",
                  margin: "0 1%",
                  marginLeft: "10px",
                  color: "#A12568",
                  fontWeight: "bold",
                }}
                className={navLogo}
              >
                The HijiBiji Canvas
              </Typography>
            </Box>
            <Box
              className={navItemContainer}
              style={{ marginLeft: "auto" }}
              sx={{ display: "flex" }}
            >
              <Box>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "#440A67",
                    textAlign: "left",
                  }}
                  to="/"
                >
                  <Button color="inherit">Home</Button>
                </NavLink>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "#440A67",
                    textAlign: "left",
                  }}
                  to="/services"
                >
                  <Button color="inherit">Explore</Button>
                </NavLink>
              </Box>
              <Box>
                {user?.email ? (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <NavLink
                      style={{ textDecoration: "none", color: "#440A67" }}
                      to="/dashboard"
                    >
                      <Button color="inherit">Dashboard</Button>
                    </NavLink>
                    <AccountCircleIcon />
                    <Typography
                      style={{
                        color: "#A12568",
                        textTransform: "uppercase",
                        textShadow: "1px 0px #440A67",
                      }}
                    >
                      {user.displayName}
                    </Typography>

                    <Button
                      style={{
                        backgroundColor: "#440A67",
                        color: "white",
                        marginLeft: "5px",
                      }}
                      onClick={logout}
                    >
                      <LogoutIcon />
                      Logout
                    </Button>
                  </Box>
                ) : (
                  <NavLink
                    style={{ textDecoration: "none", color: "#440A67" }}
                    to="/login"
                  >
                    <Button color="inherit">Login</Button>
                  </NavLink>
                )}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer open={state} onClose={() => setState(false)}>
            {list()}
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Header;
