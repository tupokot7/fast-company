import React from "react";
import Users from "./layouts/users";
import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Login from "./layouts/login";
import Main from "./layouts/main";

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/users/:userId?" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/" exact component={Main} />
                <Route to="/" />
            </Switch>
        </div>
    );
}

export default App;
