import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import { withRouter } from "react-router";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { withSuspense } from "./hoc/withSuspense";

const DialoguesContainer = React.lazy(() =>
  import("./components/Dialogues/DialoguesContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile/:userId?"
            render={withSuspense(ProfileContainer)}
          />
          <Route path="/dialogues" render={withSuspense(DialoguesContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
