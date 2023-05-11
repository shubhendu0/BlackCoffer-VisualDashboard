import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import FirstRow from './firstRow';
import SecondRow from './secondRow';
import { getAllData } from '../../redux/features/data/dataActions';
import { useDispatch } from 'react-redux';


const Home = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllData());
    },[])

    return (
        <>
            <Grid container >        
                <Grid container
                marginTop="70px"
                display="table-column">
                    <FirstRow/>
                    <SecondRow/>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;