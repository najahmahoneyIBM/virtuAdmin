import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyEmployees from "./screens/MyEmployees/MyEmployees";
import SingleEmployee from "./screens/SingleEmployee/SingleEmployee";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateEmployee from "./screens/SingleEmployee/CreateEmployee";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App">
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route
          path="/myemployees"
          component={({ history }) => (
            <MyEmployees search={search} history={history} />
          )}
        />
        <Route path="/employee/:id" component={SingleEmployee} />
        <Route path="/createemployee" component={CreateEmployee} />;
        <Route path="/profile" component={ProfileScreen} />
      </main>
    </Router>
  );
}

export default App;
