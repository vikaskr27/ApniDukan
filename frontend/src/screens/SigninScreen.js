// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { signin } from '../actions/userActions';
// import LoadingBox from '../components/LoadingBox';
// import MessageBox from '../components/MessageBox';

// export default function SigninScreen(props) {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

  // const { search } = useLocation();
  // const redirectInUrl = new URLSearchParams(search).get('redirect');
  // const redirect = redirectInUrl ? redirectInUrl : '/';

  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;

//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(signin(email, password));
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
//           <h1>Sign In</h1>
//         </div>
//         {loading && <LoadingBox></LoadingBox>}
//         {error && <MessageBox variant="danger">{error}</MessageBox>}
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
//           <label />
//           <button className="primary" type="submit">
//             Sign In
//           </button>
//         </div>
//         <div>
//           <label />
//           <div>
//             New customer?{' '}
//             <Link to={`/register?redirect=${redirect}`}>
//               Create your account
//             </Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }


import React, { useEffect,useState } from "react";
import { TextField, Switch, Button, Paper } from "@material-ui/core";
import { AiFillGithub, AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from '../actions/userActions';
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import './newSignin.css'

const useStyles = makeStyles(() => ({
    TextField:{
        margin:"10px 0"
    },
    form:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-end",
        display:"absolute",
    },
    float_container:{
        background:'linear-gradient(#5682e2, #2548f7)',
        height:'150px',
        position:"relative",
        top:"-50px",
        color:"white",
        borderRadius:"20px"
    },
    switch:{
        display:"flex",
        alignItems:"center",
        marginTop:"10px"
    },
    btn:{
        margin:"20px 0"
    },
    icons:{
        display:'flex',
        justifyContent:"center",
        gap:"40px",
        marginTop:"20px",
    }
}))




 


const NewSignin = () => {

    const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Remember me' } };

        
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
	  let navigate = useNavigate();

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
     // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;
//   const dispatch = useDispatch();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(signin(email, password));
//   };
  
  
	
	const dispatch = useDispatch();
	const userSignin = useSelector((state) => state.userSignin);
	const { Loading, error, userInfo } = userSignin;

	// useEffect(() => {
	// 	if (!error && usertoken) {
	// 		history.push("/home");
	// 	}
	// });
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

	const PostData = () => {
		dispatch(signin(email, password));
	};

	return (
        <div className="bg_image">
            
            <center>
                <Paper className={classes.form} style={{backgroundColor:"white", padding:"20px", height:"500px", maxWidth:"450px", borderRadius:"20px"}} >
                        <Paper elevation={12} className={classes.float_container}>
                            <p style={{color:"white", fontWeight:"bold", fontSize:"24px", paddingTop:"25px"}}>Sign in</p>
                            <div className={classes.icons}>
                                <AiFillFacebook />
                                <AiFillGithub />
                                <AiFillGoogleCircle />
                            </div>
                        </Paper>
                        <TextField className={classes.TextField} fullWidth id="Email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <TextField className={classes.TextField} fullWidth id="Password" label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <div className={classes.switch}>
                            <Switch {...label} color="primary" />
                            <p>Remember me</p>
                        </div>
                        <Button fullWidth variant="contained" className={classes.btn} color="primary" onClick={PostData}>Sign In</Button>
                        <p style={{margin:"20px 0", color:"grey"}}>Don't have an account? <Link to={`/register?redirect=${redirect}`} style={{cursor:"pointer", fontWeight:"bold", color:"blue", fontSize:"14px"}}> Sign up</Link></p>
                    </Paper>
            </center>
        </div>
    );
}

export default NewSignin;