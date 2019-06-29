import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import { BrowserRouter } from 'react-router-dom';
import './main.css';
import TopNav from "./TopNavigation";
import SearchBar from "./SearchBar";
import PageContent_thirdPart from "./ThirdPart";
import PageContent_forthPart from "./ForthPart";
import PageContent_fifthPart from "./FifthPart";
import PageContent_mobilePart from "./MobilePart";
import PageContent_bottomPart from "./BottomPart";
import AllRestPage from "./AllResturantsPage"
// import BottomPart from "./BottomPart";

class Main extends Component {
  render() {
    return (
        <BrowserRouter>
        <div>
          <div className="content">
            <Route exact path="/" component={TopNav}/>
            <Route exact path="/" component={SearchBar}/>
            <Route exact path="/" component={PageContent_thirdPart}/>
            <Route exact path="/" component={PageContent_forthPart}/>
            <Route exact path="/" component={PageContent_fifthPart}/>
            {/* <Route path="/" component={PageContent_mobilePart}/> */}
            <Route exact path="/" component={PageContent_bottomPart}/>
            <Route path="/AllRestaurant" render={()=>{return(
                    <AllRestPage />
                  )}}
                 />
            {/* <Route path="/AllRestaurant"  component={AllRestPage}/> */}
                    
            {/* <Route path="/" component={PageContent}/> */}
          </div>
        </div>
        </BrowserRouter>
    );
  }
}
 
export default Main;