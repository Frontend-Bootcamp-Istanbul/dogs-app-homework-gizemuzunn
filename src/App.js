import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Header } from "./components";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    { routes.map(route => {return <Route key={route.path} path={route.path} 
                      exact={route.exact} component={route.component} />})}
                </Switch>
            </div>
        );
    }
}

export default App;
