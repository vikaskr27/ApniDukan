import { useState } from "react";
import { makeStyles, Paper, TextField, Button } from "@material-ui/core";
import {Link} from 'react-router-dom';
import '/home/utsav/Desktop/fullstack/real_frontend/src/LoginScreen/css/newSignup.css'

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
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")
    
    return(
        <div className="signup_bg_image" >
            
            <center>
                <Paper maxWidth='sm' className={classes.form} style={{backgroundColor:"white", padding:"20px", height:"600px", maxWidth:"500px", borderRadius:"20px"}} >
                        <Paper elevation={12} className={classes.float_container}>
                            <p style={{color:"white", fontWeight:"bold", fontSize:"24px", paddingTop:"25px"}}>Join us today</p>
                            <p>Enter below details to register</p>
                        </Paper>
                        <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
                            <TextField className={classes.TextField}  id="Fname" label="Fname" variant="standard" value={fname} onChange={(e) => setFname(e.target.value)}/>
                            <TextField className={classes.TextField}  id="Lname" label="Lname" variant="standard" value={lname} onChange={(e) => setLname(e.target.value)}/>
                        </div>
                        <div style={{display:"flex", gap:"50px", justifyContent:"center"}}>
                            <TextField className={classes.TextField} fullWidth id="Email" label="Email" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <TextField className={classes.TextField} fullWidth id="PhoneNumber" label="PhoneNumber" variant="standard" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                        </div>
                        <TextField className={classes.TextField} fullWidth id="Password" label="Password" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <Button fullWidth variant="contained" className={classes.btn} color="primary" >Sign In</Button>
                        <p style={{margin:"20px 0", color:"grey"}}>Don't have an account? <Link to='/login' style={{cursor:"pointer", fontWeight:"bold", color:"blue", fontSize:"14px"}}> Sign in</Link></p>
                    </Paper>
            </center>
        </div>
    )
}

export default NewSignup;