import React, { useContext, useState, ElementType, useEffect } from "react";
import * as firebase from "firebase";
import "./App.css";
import { Home } from "./pages/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { Login } from "./pages/Login";

const UserContext = React.createContext<firebase.User | undefined>(undefined);
export const useUserContext = () => useContext(UserContext);

const PrivateRoute = ({
  component: Component,
  ...rest
}: {
  component: ElementType;
} & RouteProps) => {
  const user = useUserContext();
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

function App() {
  const [currentUser, setCurrentuser] = useState<firebase.User>();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setCurrentuser(user);
      }
      setLoaded(true);
    });
    return () => unsubscribe();
  }, []);
  return (
    <UserContext.Provider value={currentUser}>
      {loaded && (
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute component={Home} path="/" />
            npm install @types/react-router-dom
          </Switch>
        </Router>
      )}
    </UserContext.Provider>
  );
}

export default App;
