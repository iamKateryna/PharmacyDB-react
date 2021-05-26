import logo from './logo.svg';
import './App.css';
import "./component/Title";
import Title from "./component/Title";
import AddInfoQueries from "./component/AddInfoQueries";
import GetInfoQueries from "./component/GetInfoQueries";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
    return (
        <div>
            <Router>
                <Title/>
                <Switch>
                    <Route exact path={"/add_info"} component={AddInfoQueries}/>
                    <Route exact path={"/get_info"} component={GetInfoQueries}/>
                </Switch>
            </Router>
        </div>

    );
}

export default App;
