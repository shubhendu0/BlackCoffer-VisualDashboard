import React, { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import FirstChart from './firstChart';
import SecondChart from './secondChart';
import { getAllData } from '../../redux/features/data/dataActions';
import { useDispatch } from 'react-redux';

const InnerBox = styled(Box)`
  border-radius: 10px;
  width:96vw;
  margin: 60px 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`; 

const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getAllData());
    },[])

    return (
        <>           
            <InnerBox>
                <FirstChart/>
                <SecondChart/>
            </InnerBox>                
        </>
    )
}

export default Home;
