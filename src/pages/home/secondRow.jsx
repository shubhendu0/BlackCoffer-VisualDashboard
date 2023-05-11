import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import BarChart from '../../components/barChart';

const Container = styled(Box)`
    /* border: 1px solid #d3cede; 
    background: #d3cede; */
    border-radius: 10px;
    margin: auto;
    padding: 0px;
    display: flex;
    justify-contents: center;
    align-items: center;
    flex-direction: row;
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
        <BarChart data={data} country={country}/>
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
    </Container>
  )
}

export default SecondRow;
