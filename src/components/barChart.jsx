import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { styled, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const Container = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const BarChartComponent = ({data, country, sector, pestle, source}) => {
    const [barData, setBarData] = useState([]);

    useEffect(()=>{
        const result = data.filter((item) => (item.country === country && item.sector === sector && item.pestle === pestle && item.source === source))
        setBarData(result);
    },[data, country, sector, pestle, source])

    return (
        <Container>
            <BarChart width={450} height={350} data={barData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="topic"/>
                {/* <YAxis/> */}
                <Tooltip/>
                <Legend/>
                <Bar dataKey="intensity" fill="#8884d8"/>
                <Bar dataKey="relevance" fill="#2979ff"/>
                <Bar dataKey="likelihood" fill="#9c27b0"/>
            </BarChart>
        </Container>
    )
}
  
export default BarChartComponent;
