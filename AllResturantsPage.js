import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import './main.css';
import TopNav from "./TopNavigation";
import PageContent_bottomPart from "./BottomPart";
import FirstPart from "./1stOfAllResturantPage";
// import BottomPart from "./BottomPart";

class AllRestPage extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <div className="content">
            <Route path="/" component={TopNav}/>
            <Route path="/" component={FirstPart}/>
            <Route path="/" component={PageContent_bottomPart}/>
            
            {/* <Route path="/" component={PageContent}/> */}
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default AllRestPage;