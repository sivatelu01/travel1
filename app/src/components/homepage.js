// import React from "react";
// import Hero from "./images/hero.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import{Nav,Container,Navbar,NavLink, Button} from 'react-bootstrap';
// import "./homepage.css"
// import { Link } from "react-router-dom";

// function Homepage(){
//     return(
//         <div className="background">
//             <Navbar style={{backgroundColor:"#B0E0E6"}} fixed='top'>

//                 <container>
//                     {/* <Navbar.Brand>Travel</Navbar.Brand> */}
//                     <Nav style={{marginLeft:600,fontSize:30}}>
//                         <Nav.Link href='/home'>Home</Nav.Link>&nbsp;&nbsp;
//                         <Nav.Link href='/About'>About</Nav.Link>&nbsp;&nbsp;
//                         <Nav.Link href='/Places'>Places</Nav.Link>
//                     </Nav>
//                 </container>
//             </Navbar>
            // <div className="content">
            //     <h1>TRAVEL TO EXPLORE</h1>
            //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Facerenatus, 
            //         enim ipsam magnam odit deserunt itaque? Minima earum velittenetur!
            //     </p>
            //     <br/>
            //     <Link to={'singup'}><Button className="B1">SingUp</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            //     <Link to={'login'}><Button className="B2">Login</Button></Link>
            // </div>

//             </div>

//     )
// }
// export default Homepage


import 'bootstrap/dist/css/bootstrap.min.css';
// import Nav from 'react-bootstrap/Nav';
import { Nav,Button,NavLink,NavItem } from 'react-bootstrap';
import './homepage.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
function Homepage() {

  return (
    <div className="background">
      <Nav style={{backgroundColor:"#B0E0E6"}} fixed="top">
        <Nav.Item style={{marginLeft:630}} >
          <Nav.Link style={{color:'#413839',fontSize:30}}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link style={{color:'#413839',fontSize:30}}>About</Nav.Link>
        </Nav.Item>
        {/* <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
        </Nav.Item> */}
      </Nav>
       <div className="content">
                <h1 style={{fontSize:50}}>TRAVEL TO EXPLORE</h1>
                <p style={{fontSize:20}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
                    Facerenatus,enim ipsam magnam odit deserunt itaque? Minima earum velittenetur!
                </p>
                <br/>
                <Link to={'places'}><Button className="B1">Explore</Button></Link>
        </div>
    </div>
  );
}
export default Homepage;



