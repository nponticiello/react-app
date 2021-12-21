import React from 'react'
import Blog from "./BlogComponent";
import Home from "./HomeComponent";
import Blog2 from "./Blog2Component";
import Blog3 from "./Blog3Component";
import {Switch,Route, Redirect, withRouter} from "react-router-dom";

function Main(){
    return(
        <React.Fragment>

            <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/blog' component={Blog}/>
                <Route path='/blog2' component={Blog2}/>
                <Route path='/blog3' component={Blog3}/>
                <Redirect to='/home'/>
            </Switch>



        </React.Fragment>

    )
}
export default withRouter(Main);
