import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Index from "./components/Labs";
import {BrowserRouter, Route} from "react-router-dom";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/hello" exact={true} component={HelloWorld}/>
                <Route path={["/", "/labs"]} exact={true} component={Index}/>
                <Route path="/tuiter/home" component={HomeScreen}/>
                <Route path="/tuiter/explore" component={ExploreScreen}/>
            </div>
        </BrowserRouter>
    );
}
export default App;

