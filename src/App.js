import '../src/vendors/bootstrap/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap.min.css';
import '../src/vendors/fontawesome/css/all.min.css';
import '../src/App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import HomeScreen from "./components/Tuiter/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import ProfileScreen from "./components/Tuiter/ProfileScreen";
import EditProfileScreen from "./components/Tuiter/ProfileScreen/EditProfileScreen";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index elelment={<Labs/>}/>
                    <Route path="/">
                        <Route path="labs"
                               element={<Labs/>}/>
                        <Route path="hello"
                               element={<HelloWorld/>}/>
                        <Route path="tuiter"
                               element={<Tuiter/>}>
                            <Route index
                                   element={<HomeScreen/>}/>
                            <Route path="home"
                                   element={<HomeScreen/>}/>
                            <Route path="explore"
                                   element={<ExploreScreen/>}/>
                            <Route path="profile"
                                   element={<ProfileScreen/>}/>
                            <Route path="edit-profile"
                                   element={<EditProfileScreen/>}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;

