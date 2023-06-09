import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import FirstChart from './firstChart';
import SecondChart from './secondChart';
import ThirdChart from './thirdChart';
import { getAllData } from '../../redux/features/data/dataActions';
import { useDispatch } from 'react-redux';

const Container = styled(Box)`
  ${'' /* border: 2px solid #d1c4e9;
  border-radius: 10px; */}
  width: 99vw;
  margin-top: 65px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`; 

const InnerBox = styled(Box)`
  margin-bottom: 20px;
  align-items: center;
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
            <InnerBox>
              <ThirdChart/>
            </InnerBox>
          </Container>                          
        </>
    )
}

export default Home;
