import React, { useState } from 'react'
import { styled, Box, Typography, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';
import BarChart from '../../components/barChart';

const Container = styled(Box)`
    display: block;
    align-items: center;
    max-width: 600px;
`;

const InnerBox = styled(Box)`
  margin: 10px 0;
  align-items: center;
`; 

const Heading = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
`;


const SecondChart = () => {
  const [country, setCountry] = useState("India");
  const [sector, setSector] = useState("Energy");
  const [pestle, setPestle] = useState("Industries");
  const [source, setSource] = useState("News");

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

  const uniqueValuesSet3 = new Set();
  data.forEach(obj => {
    const value = obj["pestle"];
    if (value !== "" && obj["country"]===country && obj["sector"]===sector) {
      uniqueValuesSet3.add(value);
    }
  })
  const pestleArr = Array.from(uniqueValuesSet3);
  //console.log(topicArr)

  const uniqueValuesSet4 = new Set();
  data.forEach(obj => {
    const value = obj["source"];
    if (value !== "" && obj["country"]===country && obj["sector"]===sector && obj["pestle"]===pestle) {
      uniqueValuesSet4.add(value);
    }
  })
  const sourceArr = Array.from(uniqueValuesSet4);
  //console.log(sourceArr)


  return (
    <Container>
      <InnerBox>
        <Heading> Intensity-Relevance-Likelihood </Heading>
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

        <FormControl sx={{ m: 0, minWidth: 150 }} size="small">
          <InputLabel id="select"> Pestle </InputLabel>
          <Select
            autoWidth
            value={pestle}
            labelId="select"
            onChange={(e)=> setPestle(e.target.value)}
          >                  
            {
              pestleArr.map((item) => (
                <MenuItem value={item}> {item} </MenuItem>
              ))
            }
          </Select>
        </FormControl> 

        <FormControl sx={{ m: 0, minWidth: 150 }} size="small">
          <InputLabel id="select"> Source </InputLabel>
          <Select
            autoWidth
            value={source}
            labelId="select"
            onChange={(e)=> setSource(e.target.value)}
          >                  
            {
              sourceArr.map((item) => (
                <MenuItem value={item}> {item} </MenuItem>
              ))
            }
          </Select>
        </FormControl> 
      
        </InnerBox>
      <BarChart data={data} country={country} sector={sector} pestle={pestle} source={source}/>
    </Container>
  )
}

export default SecondChart;
