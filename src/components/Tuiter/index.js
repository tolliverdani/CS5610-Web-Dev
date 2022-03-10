import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

const Tuiter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="tuiter/home" exact={true} component={HomeScreen}/>
                <Route path="tuiter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </BrowserRouter>
    )
};
export default Tuiter;
