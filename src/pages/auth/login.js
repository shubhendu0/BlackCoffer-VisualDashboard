import React, { useState, useEffect } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from "react-redux";
import { login, loginWithGoogle } from "../../redux/features/auth/authActions";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from 'react-router-dom';


const Login=()=>{

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, isSuccess } = useSelector((state) => state.auth )

  useEffect(() => {
    if (isSuccess && isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn, isSuccess])

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const boxStyle = {
      margin:"0px",
      padding :"0px",
      minWidth: "101vw",
      minHeight:"101vh",
      backgroundColor : "#3f50b5",
//       background: "url(https://g.foolcdn.com/editorial/images/505008/getty-stock-market-chart.jpg) center/55% repeat-x #000",
//       backgroundSize: "fill",
//       backgroundRepeat: "repeat"
      alignItems: "center"
    }
    const paperStyle = {
      padding :"40px",
      maxHeight:'450px',
      maxWidth:'300px', 
      margin:"30px auto",
    }
    const avatarStyle={
      backgroundColor:'#1bbd7e'
    }
    const btnstyle={
      margin:'20px 0'
    }

    const handleLogin = async (e) => {
      e.preventDefault();  
      if (!email || !password) {
        return toast.error("All fields are required");
      } 
      const userData = {
        email,
        password
      } 
      dispatch(login(userData));
    }

    const googleLogin = async (credentialResponse) => {
      console.log(credentialResponse);
      dispatch(
        loginWithGoogle({ userToken: credentialResponse.credential })
      )
    }

    return(
        <Grid style={boxStyle}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <GoogleLogin
                      padding="10px"
                      onSuccess={googleLogin}
                      onError={() => {
                        toast.error("Login Failed");
                      }}
                    />
                    <h2>Sign In</h2>
                </Grid>
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
                  onChange={(e) => setPassword(e.target.value)} 
                  value={password} 
                  required
                />

                <Button 
                  type='submit' 
                  color='primary' 
                  variant="contained" 
                  style={btnstyle} 
                  fullWidth
                  onClick={handleLogin}
                > 
                  Sign in
                </Button>

                <Typography > Don't have an account?
                  <Link onClick={()=>navigate("/signup")}> Sign Up </Link>
                </Typography>

            </Paper>
        </Grid>
    )
}

export default Login
