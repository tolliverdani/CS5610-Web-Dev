import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min.css';
import '../src/vendors/fontawesome/css/all.min.css';
import '../src/App.css';

import {BrowserRouter, Route} from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Index from "./components/Labs";
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

