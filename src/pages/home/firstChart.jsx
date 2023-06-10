import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import PieChart from '../../components/pieChart';

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid #d1c4e9;
  border-radius: 10px;
  padding:10px;
  height: 600px;
  width: 400px;
`;

const InnerBox = styled(Box)`
  margin: 10px 0;
  ${'' /* max-width: 420px;
  max-height: 400px; */}
`; 

const Heading = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;

const FirstChart = () => {
  const [country, setCountry] = useState("United States of America");
  const [sector, setSector] = useState("Financial services");
  const data = useSelector(state => state.data.data);
 
  const uniqueValuesSet1 = new Set();
  data.forEach(obj => {
    const value = obj["country"];
    if (value !== "") {
      uniqueValuesSet1.add(value);
    }
  })
  const countryArr = Array.from(uniqueValuesSet1);
  //console.log(countryArr);

  const uniqueValuesSet2 = new Set();
  data.forEach(obj => {
    const value = obj["sector"];
    if (value !== "" && obj["country"]===country) {
      uniqueValuesSet2.add(value);
    }
  })
  const sectorArr = Array.from(uniqueValuesSet2);
  //console.log(sectorArr)

  return (
    <Container>
      <InnerBox>
        <Heading> PIE-CHART </Heading>
      </InnerBox>

      <InnerBox>
        <FormControl sx={{ m: 0, minWidth: 150 }} size="small">
          <InputLabel id="select"> Countries </InputLabel>
          <Select
            autoWidth
            value={country}
            labelId="select"
            onChange={(e)=> setCountry(e.target.value)}
          >                  
            {
              countryArr.map((item) => (
                <MenuItem value={item}> {item} </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <FormControl sx={{ m: 0, minWidth: 100 }} size="small">
          <InputLabel id="select"> Sector </InputLabel>
          <Select
            autoWidth
            value={sector}
            labelId="select"
            onChange={(e)=> setSector(e.target.value)}
          >                  
            {
              sectorArr.map((item) => (
                <MenuItem value={item}> {item} </MenuItem>
              ))
            }
          </Select>
        </FormControl> 
      </InnerBox>

      <PieChart data={data} variable="topic" country={country} sector={sector}/>
    </Container>
  )
}

export default FirstChart;
