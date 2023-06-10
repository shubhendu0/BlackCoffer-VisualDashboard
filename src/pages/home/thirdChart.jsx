import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import AreaChart from '../../components/areaChart';

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


const ThirdChart = () => {
  const [country, setCountry] = useState("United States of America");
  const [year, setYear] = useState("2018");


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

  const uniqueValuesSet5 = new Set();
  data.forEach(obj => {
    const value = obj["end_year"];
    if (value !== "" && obj["country"]===country) {
      uniqueValuesSet5.add(value);
    }
  })
  const yearArr = Array.from(uniqueValuesSet5);
  //console.log(yearArr)

  return (
    <Container>
      <InnerBox>
        <Heading> AREA-CHART </Heading>
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

        <FormControl sx={{ m: 0, minWidth: 150 }} size="small">
          <InputLabel id="select"> End Year </InputLabel>
          <Select
            autoWidth
            value={year}
            labelId="select"
            onChange={(e)=> setYear(e.target.value)}
          >                  
            {
              yearArr.map((item) => (
                <MenuItem value={item}> {item} </MenuItem>
              ))
            }
          </Select>
        </FormControl> 
      
        </InnerBox>
      <AreaChart data={data} country={country} year={year} />
    </Container>
  )
}

export default ThirdChart;
