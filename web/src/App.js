import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./components/SignIn";
import CreateUser from "./components/UserManagement/CreateUser";
import EditUser from "./components/UserManagement/EditUser";
import UserList from "./components/UserManagement/UserList";
import HeaderTest from "./components/HeaderTest";
import Test from "./components/Test";
import UseRefTest from "./components/UseRefTest";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route
            exact
            path="/user-management/create-user"
            component={CreateUser}
          />
          <Route exact path="/user-management" component={UserList} />
          <Route
            exact
            path="/user-management/edit-user/:_id"
            component={EditUser}
          />
          <Route exact path="/header" component={HeaderTest} />
          <Route exact path="/test" component={Test} />
          <Route exact path="/useRefTest" component={UseRefTest} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
