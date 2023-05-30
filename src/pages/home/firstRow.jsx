import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import PieChart from '../../components/pieChart';

const Container = styled(Box)`
    border-radius: 10px;
    margin: auto;
    padding: 0px;
    display: block;
    align-items: center;
    width: 98vw;
`;

const InnerBox = styled(Box)`
  border-radius: 10px;
  width:98vw;
  margin: 10px 0;
  padding: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
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
        <Heading> PieChart for Topics based on Sector </Heading>
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

      <PieChart data={data} variable="topic" sector={sector}/>
    </Container>
  )
}

export default FirstRow;
