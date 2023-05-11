import React from 'react';
import { useSelector } from 'react-redux';
import { 
    Grid, 
    Card,
    TextField, 
    CardContent,
    CardMedia, 
    Typography 
} from '@mui/material';


const Profile = () => {
    const { user } = useSelector((state) => state.auth)

    return (
        <>
            <Grid 
            sx={{ m: 2 }}>
                <Card 
                style={{ 
                    maxWidth: 450, 
                    padding: "20px 5px", 
                    margin: "70px auto",
                    boxShadow: "0px 1px 5px 0px",
                    borderColor: 'grey.500',
                    borderRadius: '15px'           
                }}
                >
                <CardContent>
                    <Typography 
                    gutterBottom 
                    variant="h4">
                        My Profile
                    </Typography> 

                    <form>
                    <Grid container spacing={1}>
                        <Grid xs={12}  item>
                                <CardMedia
                                    component="img"
                                    width="400"
                                    height="250"
                                    image={user.photo}
                                    alt="image"
                                />
                        </Grid>
                        <Grid xs={12}item>
                            <TextField 
                            placeholder="Name" 
                            label="Name" 
                            variant="outlined" 
                            value={user.name}
                            fullWidth 
                            required />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                            type="email" 
                            placeholder="Email" 
                            variant="outlined" 
                            value={user.email}
                            disabled
                            fullWidth 
                            required />
                        </Grid>
                    </Grid>
                    </form>
                </CardContent>
                </Card>
            </Grid>
        </>
    )
}

export default Profile;