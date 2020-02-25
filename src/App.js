import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";

/* 
  Here component = component we want to the route to render path = will
  be a string that equal the path itself from current place of all routes.
  here '/' the base URL. exact is the true or the false property. by default
  equal to true. it renders the exact path
*/

/* 
  To use the Switch component, we wrap the Route component within it. 
  Now what it does is, the moment that the Route inside of it finds a match, in the path, it doesn't render anything else other than that Route.
  Switch is usefull as it gives more control to our code.
  It allows us to kind of follow a pattern where we know, that as long as one Route matches, then that's the only thing we are gonna render.
  And that's useful, we we dont want to accidentally render multiple components.
*/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
