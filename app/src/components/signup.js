// import React, { useState } from "react";
// import './LoginSignup.css';
// import user_icon from './Assets/person.png';
// import password_icon from './Assets/lock.png';
// import email_icon from './Assets/mail.png';

// const LoginSignup = () => {
//     const [action, setAction] = useState("Sign Up");
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSignUp = () => {
//         if (action === "Sign Up" && name && email && password) {
//             console.log("Sign Up Data:");
//             console.log("Name: " + name);
//             console.log("Email: " + email);
//             console.log("Password: " + password);
//             alert("Sign Up Successful!");
//         } else {
//             alert("Please fill in all fields to sign up.");
//         }
//     };

//     const handleLogin = () => {
//         if (action === "Login" && email && password) {
//             console.log("Login Data:");
//             console.log("Email: " + email);
//             console.log("Password: " + password);
//             alert("Login Successful!");
//         } else {
//             alert("Please fill in all fields to log in.");
//         }
//     };

//     return (
//         <div className="container">
//             <div className="header">
//                 <div className="text">{action}</div>
//                 <div className="underline"></div>
//             </div>
//             <div className="inputs">
//                 {action === "Login" ? <div></div> : <div className="input">
//                     <img src={user_icon} alt="" />
//                     <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
//                 </div>}
//                 <div className="input">
//                     <img src={email_icon} alt="" />
//                     <input type="email" placeholder="Email Id" onChange={(e) => setEmail(e.target.value)} />
//                 </div>
//                 <div className="input">
//                     <img src={password_icon} alt="" />
//                     <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//                 </div>
//             </div>
//             {action === "Sign Up" ? <div></div> : <div className="forgot_password">Lost Password? <span>Click Here!</span></div>}

//             <div className="submit_container">
//                 <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up"); handleSignUp(); }}>Sign Up</div>
//                 <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login"); handleLogin(); }}>Login</div>
//             </div>
//         </div>
//     );
// }

// export default LoginSignup;

// import React, { useState } from "react";

// // import { Route } from "react-router-dom";

// function SignupForm() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value }); 
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., make an API request to register the user)
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// }

// export default SignupForm; 



import { useState } from 'react'
import axios from 'axios'
// import './signup.css'
function Signup(){
    const[data,setData]=useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })
    // const register=(e)=>{
    //     e.preventDefault()
    //     axios.post('http://localhost:5000/addregister1',{data})
    //     .then((res)=>alert(res.data.msg))
    // }
    return(
        <div>
             <h1 style={{color:'#006aff', alignContent:'center', marginLeft:'900px'}}>SIGN UP</h1>
            <form className='signup' >
                <label>first name:</label>
                <input type="text" placeholder="enter your first name" value={data.firstname} onChange={(e)=>{setData({...data,firstname:e.target.value})}}></input><br/><br/>
                <label>last name:</label>
                <input type="text" placeholder="enter your last name" value={data.lastname} onChange={(e)=>{setData({...data,lastname:e.target.value})}}></input><br/><br/>
                <label>email :</label>
                <input type="email" placeholder="enter your email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}></input>
                <br/><br/>
                <label>password:</label>
                <input type="password" value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}></input>
                <br/><br/>
                <button id='but'>sign up</button>
            </form>
        </div>
    )
}
export default Signup

