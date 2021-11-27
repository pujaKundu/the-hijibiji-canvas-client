import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Home/Homepage/Homepage";
import NotFound from "./Pages/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Services from "./Pages/Home/Homepage/Services/Services";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import Orders from "./Pages/Dashboard/Orders/Orders/Orders";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail/ServiceDetail";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ExploreServices from "./Pages/ExploreServices/ExploreServices/ExploreServices";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/explore">
              <ExploreServices></ExploreServices>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/serviceDetail/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
