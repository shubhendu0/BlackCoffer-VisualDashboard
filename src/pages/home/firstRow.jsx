import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import PieChart from '../../components/pieChart';

const Container = styled(Box)`
    /* border: 1px solid #d3cede; 
    background: #1a237e;*/
    border-radius: 10px;
    margin: auto;
    padding: 0px;
    display: flex;
    align-items: center;
    /* flex-direction: row; */
    width: 100vw;
    height: 100vh;
`;

const InnerBox = styled(Box)`
  /* border: 1px solid #d3cede;
  background: #d3cede; */
  border-radius: 10px;
  margin: auto;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* width: 50vw; 
  height: 580px;*/
`; 

const Heading = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;

const FirstRow = () => {
  const sectorArr = ["Energy", "Environment", "Government", "Aerospace & defence",
    "Manufacturing", "Retail", "Financial services", "Support services", "Information Technology",
    "Healthcare", "Security", "Transport", "Tourism & hospitality", "Water","Automotive", "Construction",
    "Media & entertainment", "Food & agriculture"
  ]

  const [sector, setSector] = useState("Environment");
  const data = useSelector(state => state.data.data);

  return (
    <Container>
      <InnerBox>
        <Heading> Topics </Heading>
        <PieChart data={data} variable="topic" sector={sector}/>
      </InnerBox>

      <InnerBox>
      <FormControl sx={{ m: 0, minWidth: 150 }} size="medium">
        <InputLabel id="select"> Sector </InputLabel>
        <Select
          autoWidth
          value={sector}
          labelId="select"
          onChange={(e)=> setSector(e.target.value)}
        >                  
          <MenuItem value={0}> 
            <em>All</em> 
          </MenuItem>
          {
            sectorArr.map((item) => (
              <MenuItem value={item}> {item} </MenuItem>
            ))
          }
        </Select>
      </FormControl> 
      </InnerBox>
    </Container>
  )
}

export default FirstRow;
