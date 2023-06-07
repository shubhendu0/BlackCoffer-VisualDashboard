import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import FirstChart from './firstChart';
import SecondChart from './secondChart';
import { getAllData } from '../../redux/features/data/dataActions';
import { useDispatch } from 'react-redux';

const Container = styled(Box)`
  border-radius: 10px;
  width: 97vw;
  margin-top: 65px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`; 

const InnerBox = styled(Box)`
  margin-bottom: 20px;
  align-items: center;
  height: 550px
`; 

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllData());
    },[])

    return (
        <>
          <Container>
            <InnerBox>
              <FirstChart/>
            </InnerBox>
            <InnerBox>
              <SecondChart/>
            </InnerBox>
          </Container>                          
        </>
    )
}

export default Home;
