import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/features/auth/authActions";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, isSuccess } = useSelector((state) => state.auth )
  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, isSuccess])

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const boxStyle = {
    minWidth: "100vw",
    minHeight:"100vh",
    background: "url(https://g.foolcdn.com/editorial/images/505008/getty-stock-market-chart.jpg) center/55% repeat-x #000",
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
  const paperStyle = {
    padding :"20px",
    height:'460px',
    width:'320px',  
  }
    const avatarStyle={
      backgroundColor:'#1bbd7e'
    }
    const btnstyle={
      margin:'15px 0'
    }

    const handleSignup = async(e) => {
        e.preventDefault();
        if (!name || !email || !password || !password2) {
            toast.error("All fields are required");
        }
        if (password.length < 6) {
            toast.error("Password must be up to 6 characters");
        }
        if (password !== password2) {
            toast.error("Passwords do not match");
        }     
        const userData = {
            name,
            email,
            password,
        }
        await dispatch(register(userData));
    }


    return(
        <Grid style={boxStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Typography variant="h5" paddingBottom="10px">
                  Sign Up
                </Typography>

                <TextField 
                  label='Name' 
                  placeholder='Enter username'
                  onChange={(e) => setName(e.target.value)} 
                  value={name}  
                  required
                />
                <TextField 
                  label='Email' 
                  placeholder='Enter username'
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}  
                  required
                />
                <TextField 
                  label='Password' 
                  placeholder='Enter password' 
                  type='password' 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}                   
                  onPaste={(e) => {
                    e.preventDefault();
                    toast.error("Cannot paste into input field");
                    return false;
                  }}
                  required
                />
                <TextField 
                  label='Confirm Password'
                  placeholder='Confirm password' 
                  type='password' 
                  onChange={(e) => setPassword2(e.target.value)} 
                  onPaste={(e) => {
                    e.preventDefault();
                    toast.error("Cannot paste into input field");
                    return false;
                  }}
                  value={password2} 
                  required
                />
                <Button 
                  type='submit'
                  color='primary' 
                  variant="contained" 
                  style={btnstyle} 
                  fullWidth
                  onClick={handleSignup}
                > 
                    Register
                </Button>
                <Typography > Already have an account ?
                    <Link  onClick={()=>navigate("/login")}> Sign In </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Signup
