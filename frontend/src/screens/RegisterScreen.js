// import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

// export default function RegisterScreen(props) {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const { search } = useLocation();
//   const redirectInUrl = new URLSearchParams(search).get('redirect');
//   const redirect = redirectInUrl ? redirectInUrl : '/';

//   const userRegister = useSelector((state) => state.userRegister);
//   const { userInfo, loading, error } = userRegister;

//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Password and confirm password are not match');
//     } else {
//       dispatch(register(name, email, password));
//     }
//   };
//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);
//   return (
//     <div>
//       <form className="form" onSubmit={submitHandler}>
//         <div>
//           <h1>Create Account</h1>
//         </div>
//         {loading && <LoadingBox></LoadingBox>}
//         {error && <MessageBox variant="danger">{error}</MessageBox>}
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Enter name"
//             required
//             onChange={(e) => setName(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter email"
//             required
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter password"
//             required
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             placeholder="Enter confirm password"
//             required
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           ></input>
//         </div>
//         <div>
//           <label />
//           <button className="primary" type="submit">
//             Register
//           </button>
//         </div>
//         <div>
//           <label />
//           <div>
//             Already have an account?{' '}
//             <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
import { useState,useEffect } from "react";
import { makeStyles, Paper, TextField, Button } from "@material-ui/core";
import {Link, useNavigate} from 'react-router-dom';
import './newSignup.css'

const useStyles = makeStyles(() => ({
    TextField:{
        margin:"15px 0"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        display:"absolute",
    },
    float_container:{
        background:'linear-gradient(#5682e2, #2548f7)',
        height:'120px',
        position:"relative",
        top:"-50px",
        color:"white",
        borderRadius:"20px"
    },
    btn:{
        margin:"20px 0"
    },
}));

const NewSignup = () => {


    const classes = useStyles();

    const [fname, setFname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
  
      dispatch(register(fname, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

    return(
        <div className="signup_bg_image" >
            
            <center>
                <Paper maxWidth='sm' className={classes.form} style={{backgroundColor:"white", padding:"20px", height:"600px",width:"400px", borderRadius:"20px"}} >
                        <Paper elevation={12} className={classes.float_container}>
                            <p style={{color:"white", fontWeight:"bold", fontSize:"24px", paddingTop:"25px"}}>Join us today</p>
                            <p>Enter below details to register</p>
                        </Paper>
                        <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
                            <TextField className={classes.TextField} fullWidth id="Fname" label="Name" variant="standard" value={fname} onChange={(e) => setFname(e.target.value)}/>
                            {/* <TextField className={classes.TextField}  id="Lname" label="Fname" variant="standard" value={fname} onChange={(e) => setFname(e.target.value)}/> */}
                        </div>
                        <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
                            <TextField className={classes.TextField} fullWidth id="Email" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {/* <TextField className={classes.TextField} fullWidth id="PhoneNumber" label="PhoneNumber" variant="standard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/> */}
                        </div>
                        <TextField className={classes.TextField} fullWidth id="Password" label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button fullWidth variant="contained" className={classes.btn} color="primary" onClick={(e) => submitHandler(e)}>Sign Up</Button>
                        <p style={{margin:"20px 0", color:"grey"}}>Don't have an account? <Link to='/signin' style={{cursor:"pointer", fontWeight:"bold", color:"blue", fontSize:"14px"}}> Sign in</Link></p>
                    </Paper>
            </center>
        </div>
    )
}

export default NewSignup;