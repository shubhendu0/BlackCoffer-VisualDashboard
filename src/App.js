import './App.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { themeSettings } from './redux/features/theme/themePalette';
import { useMemo, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from './components/navbar';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import Home from './pages/home/home';
import Contact from './pages/contact';
import axios from 'axios';
import { 
  getLoginStatus, 
  getUser 
} from './redux/features/auth/authActions';
import ProtectedRoute from './components/protected';
import Profile from './pages/profile';

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn} = useSelector((state) => state.auth);
  const mode = useSelector((state) => state.theme.mode);
  const curr_mode = JSON.parse(localStorage.getItem("currentMode"));
  const theme = useMemo(() => createTheme(themeSettings(curr_mode)), [mode]);

  useEffect(()=>{
    dispatch(getLoginStatus());
    if (isLoggedIn === null) {
      dispatch(getUser());
    } 
  }, [dispatch, isLoggedIn, user])

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer 
          position='top-right'
          autoClose={2000}
          newestOnTop
          pauseOnHover
          closeOnClick
          theme="dark"
          limit={2}
        />
        <ThemeProvider theme={theme}>
        <CssBaseline/> 
          {
            isLoggedIn 
            ?
            <Navbar/>
            :
            null
          }
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<Signup/>} /> 
              <Route path="/contact" element={<Contact/>}/>  
              <Route element={<ProtectedRoute/>}>     
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
              </Route>
            </Routes>
          </GoogleOAuthProvider>   
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;