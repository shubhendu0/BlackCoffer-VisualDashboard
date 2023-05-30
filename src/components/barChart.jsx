import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { styled, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const Container = styled(Box)`
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 98vw;
`;

const BarChartComponent = ({data, country}) => {
    const [barData, setBarData] = useState([]);

    useEffect(()=>{
        const result = data.filter((item) => (item.country === country && item.sector != ""))
        setBarData(result);
    },[data, country])

    return (
        <Container>
            <BarChart width={500} height={500} data={barData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="sector"/>
                <YAxis/>
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
