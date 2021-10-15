import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { adminRoutes, clientRoutes } from "routes";
import AdminLayout from "layouts/AdminLayout";
import ClientLayout from "layouts/ClientLayout";
import PageNotFound from "containers/shared/page-not-found/PageNotFound";
import { useDispatch } from "react-redux";
import { actUploadUserLogin } from "containers/shared/Auth/module/actions";

function App() {
  const userLogin = JSON.parse(localStorage.getItem("fiverrUser"));
  const dispatch = useDispatch();
  if(!!userLogin){
    dispatch(actUploadUserLogin(userLogin));
  }
  const renderLayout = (routes, Layout) => {
    return routes.map((route, idx) => {
      const { path, component, exact, isPrivate } = route;
      return (
        <Layout
          key={component}
          path={path}
          exact={exact}
          component={component}
          isPrivate={isPrivate}
        />
      );
    });
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          {renderLayout(clientRoutes, ClientLayout)}
          {renderLayout(adminRoutes, AdminLayout)}
          {/* những component k dùng chung layout */}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
