import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

const PrivateRouteForNormalUsers = ({component: Component, auth, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      auth.user.email === "m.m.zavie@gmail.com" ? (
        <Component {...props} />
      ) : (
        <div className="container reserve-container-visible text-center">
          <p>به این صفحه دسترسی ندارید.</p>
        </div>
      )
    }
  />
);

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(PrivateRouteForNormalUsers);
