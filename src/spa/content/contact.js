import React from 'react';
import {CSSTransition} from "react-transition-group";

class Contact extends React.Component {
 
    render() { 
        return ( 
        <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade"
            enter={false}>
         
         <div> Iam at contact.</div>
         </CSSTransition>);
    }
}
 
export default Contact;