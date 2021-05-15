import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./admin-2.css";
import "./App.css";
import Animation_Utilities from "./components/Animation_Utilities";
import Border_Utilities from "./components/Border_Utilities";
import Color_Utilities from "./components/Color_Utilities";
import Dashboard from "./components/Dashboard";
import Other_Utilites from "./components/Other_Utilities";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Users from "./components/Users";
import User_Create from "./components/User_Create";
import User_Edit from "./components/User_Edit";
import Logout from "./Logout_modal";
function App() {
  return (
    <>
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div className="container-fluid">
                <Switch>
                  <Route
                    path="/components/Dashboard"
                    component={Dashboard}
                    exact={true}
                  ></Route>
                  <Route
                    path="/components/Users"
                    component={Users}
                    exact={true}
                  ></Route>
                  <Route
                    path="/components/User_Create"
                    component={User_Create}
                    exact={true}
                  ></Route>
                  <Route
                    path="/components/User_Edit/:id"
                    component={User_Edit}
                  ></Route>
                  <Route
                    path="/utilities/colors"
                    component={Color_Utilities}
                  ></Route>
                  <Route
                    path="/utilities/borders"
                    component={Border_Utilities}
                  ></Route>
                  <Route
                    path="/utilities/animations"
                    component={Animation_Utilities}
                  ></Route>
                  <Route
                    path="/utilities/others"
                    component={Other_Utilites}
                  ></Route>
                </Switch>
              </div>
            </div>
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; Be We Website 2021</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
        <Logout></Logout>
      </Router>
    </>
  );
}

export default App;
