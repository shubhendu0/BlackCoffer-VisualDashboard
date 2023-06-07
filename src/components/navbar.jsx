import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { 
    getUser,
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch]);
    
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);    
    
    return (
    <>
        <Box>
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
                    <Typography variant="h6" style={{ position: "absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}} >
                        DASHBOARD
                    </Typography>

                    <Stack direction="row" >
                        <IconButton onClick={() => dispatch(setMode())}>
                            <DarkModeIcon/> 
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
