import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logout, getUser } from "../redux/features/auth/authActions";
import { 
    Box, 
    Drawer, 
    IconButton,
    List, 
    ListItem,
    ListItemButton,
    Divider,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InfoIcon from '@mui/icons-material/Info';


const Sidebar = ({isDrawerOpen, setIsDrawerOpen}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        setIsDrawerOpen(isDrawerOpen);
    },[])

    useEffect(()=>{
        dispatch(getUser());
    },[dispatch])

    const logoutUser = async () => {
        dispatch(logout());
        navigate("/")
    }

    return (
        <>
            <Drawer
              anchor='left'
              variant="persistent"
              open={isDrawerOpen}
            >
                <Box 
                  p={2} 
                  width='250px' 
                  role='presentation' 
                  textAlign='center'
                >
                <IconButton  onClick={() => setIsDrawerOpen(false)}>
                    <MenuOpenIcon/> 
                </IconButton> 
                    
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/')}>
                                <ListItemIcon>
                                    <HomeIcon/>
                                </ListItemIcon>                             
                                <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="Home"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding onClick={()=>navigate("/profile")}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon/>
                                </ListItemIcon>                             
                                <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="My Profile"/>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={logoutUser}>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>                             
                                <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="Logout"/>
                            </ListItemButton>
                        </ListItem>                                                  
                    </List>
                    
                    <Divider/>

                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon/>
                                </ListItemIcon>                             
                                <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="Inbox"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => navigate('/contact')}>
                                <ListItemIcon>
                                    <MailIcon/>
                                </ListItemIcon>                             
                                <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="Contact"/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InfoIcon/>
                                </ListItemIcon>                             
                                <ListItemText primaryTypographyProps={{fontSize: '25px'}}  primary="About Us"/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    )
}

export default Sidebar
