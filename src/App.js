import React, { Component } from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider, connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { addLocaleData, injectIntl } from "react-intl";
import { updateIntl, IntlProvider } from "react-intl-redux";
import en from "react-intl/locale-data/en";
import store from "./store";
import Header from "../src/components/header";
import Footer from "../src/components/footer";

import Layouts from "./layouts/Default";
import "./scss/app.scss";

import LoginPage from "./components/login";

addLocaleData([...en]);
class Public extends Component {
  render() {
    const { auth, component: Component, ...rest } = this.props;
    const isAuth = auth.user;
    return (
      <Route
        {...rest}
        render={props =>
          !isAuth ? <Component {...props} /> : <Redirect to={"/"} />
        }
      />
    );
  }
}

@connect(stores => ({ ...stores }))
@injectIntl
class Localization extends Component {
  componentWillMount() {
    const { formatMessage } = this.props.intl;
    window.formatMessage = formatMessage;
  }

  render() {
    const { auth } = this.props;
    const routes = [
      {
        path: "/",
        exact: true,
        component: rest => <LoginPage {...rest} {...this.props} />
      },
      {
        path: "/login",
        exact: true,
        component: rest => <LoginPage {...rest} {...this.props} />
      }
    ];

    return (
      auth && (
        <Router>
          <div>
            <Switch>
              <Route
                path={"/"}
                render={props => (
                  <Layouts {...props} {...this.props}>
                    <ToastContainer />
                    <Switch>
                      {routes.map((route, index) => {
                        return (
                          <Public
                            {...this.props}
                            key={index}
                            exact={route.exact}
                            path={route.path}
                            component={route.component}
                          />
                        );
                      })}
                    </Switch>
                  </Layouts>
                )}
              />
            </Switch>
          </div>
        </Router>
      )
    );
  }
}

class App extends Component {
  componentWillMount() {
    store.dispatch(
      updateIntl({
        locale: "en"
      })
    );
    // if (storage.has("user")) {
    //   try {
    //     const user = storage.get("user");
    //     store.dispatch(setUser(user));
    //   } catch (e) { }
    // }
  }

  render() {
    return (
      <Provider store={store}>
        <IntlProvider>
          <Localization />
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
