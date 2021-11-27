import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import Orders from "../Orders/Orders/Orders";
import Payment from "../Payment/Payment";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../Hooks/useAuth";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddReview from "../Reviews/AddReview/AddReview";
import UserRoute from "../../Login/UserRoute/UserRoute";
import DashboardHome from "../DashboardHome/DashboradHome";
import PersonIcon from "@mui/icons-material/Person";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PaymentIcon from "@mui/icons-material/Payment";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import StoreIcon from "@mui/icons-material/Store";

const drawerWidth = 240;

function Dashboard(props) {
  const { logout, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink to={`${url}`}>
        <Button color="inherit">Dashboard</Button>
      </NavLink>
      <List>
        <ListItem>
          <NavLink style={{ textDecoration: "none", color: "#2A0944" }} to="/">
            <Button color="inherit">
              <HomeIcon /> Home
            </Button>
          </NavLink>
        </ListItem>

        {admin && (
          <List>
            <ListItem>
              <NavLink
                to={`${url}/manageAllOrders`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <ShoppingBasketIcon />
                  Manage All Orders
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={`${url}/addProduct`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <ShoppingCartIcon /> Add Product
                </Button>
              </NavLink>
            </ListItem>

            <ListItem>
              <NavLink
                to={`${url}/makeAdmin`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <AdminPanelSettingsIcon /> Make Admin
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={`${url}/manageProducts`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <StoreIcon /> Manage Products
                </Button>
              </NavLink>
            </ListItem>
          </List>
        )}
        {!admin && (
          <List>
            <ListItem>
              <NavLink
                to={`${url}/myOrders`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <PersonIcon /> My Orders
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={`${url}/reviews`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <ReviewsIcon />
                  Reviews
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to={`${url}/payment`}
                style={{ textDecoration: "none", color: "#3B185F" }}
              >
                <Button color="inherit">
                  <PaymentIcon />
                  Payment
                </Button>
              </NavLink>
            </ListItem>
          </List>
        )}

        <ListItem>
          <Button
            style={{ color: "#3B185F" }}
            onClick={logout}
            color="inherit"
            variant="contained"
          >
            <LogoutIcon /> Logout
          </Button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#2A0944" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <UserRoute path={`${path}/myOrders`}>
            <Orders></Orders>
          </UserRoute>

          <UserRoute path={`${path}/reviews`}>
            <AddReview></AddReview>
          </UserRoute>
          <UserRoute path={`${path}/payment`}>
            <Payment></Payment>
          </UserRoute>
          {/* admin route */}
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
