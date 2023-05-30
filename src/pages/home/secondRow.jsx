import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import BarChart from '../../components/barChart';

const Container = styled(Box)`
    border-radius: 10px;
    margin: auto;
    padding: 0px;
    display: block;
    width: 98vw;
`;

const InnerBox = styled(Box)`
  border-radius: 10px;
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


const SecondRow = () => {
  const countries = ["United States of America", "Lebanon", "Nigeria",
  "Mexico", "South Africa", "India", "Saudi Arabia", "Ukraine", "Azerbaijan",
  "Colombia", "Niger", "Libya", "Brazil", "China", "South Sudan"
  ]
  
  const [country, setCountry] = useState("India");

  const data = useSelector(state => state.data.data);

  return (
    <Container>
      <InnerBox>
        <Heading> Intensity-Relevance-Likelihood </Heading>
      </InnerBox>

      <InnerBox>
      <FormControl sx={{ m: 0, minWidth: 150 }} size="medium">
        <InputLabel id="select"> Countries </InputLabel>
        <Select
          autoWidth
          value={country}
          labelId="select"
          onChange={(e)=> setCountry(e.target.value)}
        >                  
          <MenuItem value={0}> 
            <em>All</em> 
          </MenuItem>
          {
            countries.map((item) => (
              <MenuItem value={item}> {item} </MenuItem>
            ))
          }
        </Select>
      </FormControl> 
      </InnerBox>
      <BarChart data={data} country={country}/>
    </Container>
  )
}

export default SecondRow;
