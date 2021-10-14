import React from "react";
import { Route, Redirect } from "react-router-dom";

const withLayout = (WrappedComponent) => {
  return ({ component: Component, isPrivate, ...rest }) => {
    const content = (
      <Route
        {...rest}
        render={(routeProps) => (
          <WrappedComponent>
            <Component {...routeProps} />
          </WrappedComponent>
        )}
      />
    );

    //protect routePrivate
    if (isPrivate) {
      return content;
    }
    return <Redirect to="/" />;
  };
};

export default withLayout;
