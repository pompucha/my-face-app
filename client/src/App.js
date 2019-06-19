import React from "react";
import Home from "./components/Home";
import MyHumans from "./components/MyHumans"
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import { Container, } from "semantic-ui-react";
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <>
  <Navbar />
  <FetchUser>
    <Container>
      <Switch>
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/my-humans" component={MyHumans} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
  </>
)
 
export default App;
