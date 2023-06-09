import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { styled, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const Container = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* border: 2px solid #d1c4e9;
    border-radius: 10px; */}
    width: 350px;
    height: 400px;
`;

const BarChartComponent = ({data, country, sector, pestle, source}) => {
    const [barData, setBarData] = useState([]);

    useEffect(()=>{
        const result = data.filter((item) => (item.country === country && item.sector === sector && item.pestle === pestle && item.source === source))
        setBarData(result);
    },[data, country, sector, pestle, source])

    return (
        <Container>
            <BarChart width={350} height={400} data={barData}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="topic"/>
                <YAxis/>
                <Tooltip content={<CustomTooltip />}/>
                <Legend/>
                <Bar dataKey="intensity" fill="#8884d8"/>
                <Bar dataKey="relevance" fill="#2979ff"/>
                <Bar dataKey="likelihood" fill="#9c27b0"/>
            </BarChart>
        </Container>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      // You can access the data values from the payload
        const data = payload[0].payload;         
        return (
            <div className="custom-tooltip">
            {/* <p className="label"> {`Topic: ${label}`} </p> */}
            <p className="value"> {`Intensity: ${data.intensity}`} </p>
            <p className="value"> {`Relevance: ${data.relevance}`} </p>
            <p className="value"> {`Likelihood: ${data.likelihood}`} </p>
            <p className="value"> {`Start-year: ${data.start_year}`} </p>
            <p className="value"> {`End-year: ${data.end_year}`} </p>
            </div>
        );
    }     
    return null;
};
  
export default BarChartComponent;
