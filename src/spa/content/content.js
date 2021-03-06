import React from 'react';
import {Switch, Route} from "react-router-dom";
import Home from '../content/home';
import About from '../content/about';
import Contact from '../content/contact';


 class Content extends React.Component {
   
    render() { 
        return ( 
        <Switch>
             <Route exact path="/" component={Home}></Route>
             <Route path="/about" component={About}></Route>
             <Route path="/contact" component={Contact}></Route>
            </Switch>
             );
    }
}
 
export default Content;