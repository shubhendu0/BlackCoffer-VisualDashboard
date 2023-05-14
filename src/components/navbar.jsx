import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
    getUser,
    logout 
} from "../redux/features/auth/authActions";
import { setMode } from '../redux/features/theme/themeSlice';
import {
    Box,
    AppBar,
    Toolbar,
    Stack,
    Typography,
    IconButton,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);

    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);    
    const userName = useSelector((state) => state.auth.user.name) || ""

    const getFirstLetters = (str) => {
        const firstLetters = str
          .split(' ')
          .map(word => word.charAt(0))
          .join('.');     
        return firstLetters;
    }

    const logoutUser = async () => {
        dispatch(logout());
        navigate("/")
    }
    
    return (
    <>
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position='fixed'>
                <Toolbar style={{ justifyContent : "space-between"}}>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr : 1 }}
                      onClick={() => setIsDrawerOpen(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h5" style={{ position: "absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}} >
                        DASHBOARD
                    </Typography>

                    <Stack direction="row" >
                        <IconButton onClick={() => dispatch(setMode())}>
                            <DarkModeIcon/> 
                        </IconButton>

                        <IconButton>
                            <PersonIcon/> 
                            <Typography fontSize="12" >
                                {getFirstLetters(userName)} 
                            </Typography>
                        </IconButton>
                                                                    
                        <IconButton  onClick={logoutUser}>
                            <LogoutIcon/>
                        </IconButton>       
                                
                    </Stack>                   
                </Toolbar>
            </AppBar>
            <Sidebar
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
            />
        </Box>
    </>
    )
}

export default Navbar;
