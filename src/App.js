import { Route, Switch } from "react-router";
import "./App.css";
import UserPage from "./pages/User/UserPage";
import Details from "./pages/Details";
import GlobalStyle from "./styles/reset";
import Login from "./pages/Login";
import RegisterUser from "./pages/User/RegisterUser";
import GuardedRoute from "./components/GuardedRoute";
import Navbar from "./components/Structure/Navbar";
import UpdateGames from "./pages/Games/UpdateGames";
import CreateGames from "./pages/Games/CreateGames";
import CreateUserForm from "./components/CreateUserForm";
import Logout from "./pages/Logout";
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/login" component={Login}></Route>
        <GuardedRoute
          path="/registergame"
          component={CreateGames}
        ></GuardedRoute>
        <Route path="/signup" component={RegisterUser} />
        <Route path="/" exact={true} component={UserPage} />
        <GuardedRoute path="/home" component={UserPage} />
        <GuardedRoute path="/logout" component={Logout} />
        <Route path="/details/:id" component={Details} />
        <Route path="/update/:id" component={UpdateGames} />
      </Switch>
    </>
  );
}

export default App;
