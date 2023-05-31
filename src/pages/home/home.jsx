import React, { useEffect } from 'react';
import { Grid, Box, styled } from '@mui/material';
import FirstRow from './firstRow';
import SecondRow from './secondRow';
import { getAllData } from '../../redux/features/data/dataActions';
import { useDispatch } from 'react-redux';

const InnerBox = styled(Box)`
  border-radius: 10px;
  width:100vw;
  margin: 30px 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`; 


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
                display="table-row"
                >
                    <InnerBox>
                        <FirstRow/>
                    </InnerBox>
                    <InnerBox>
                        <SecondRow/>
                    </InnerBox>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;
