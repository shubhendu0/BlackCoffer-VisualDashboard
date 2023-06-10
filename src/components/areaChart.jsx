import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
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

const AreaChartComponent = ({data, country, year}) => {
    const [areaData, setAreaData] = useState([]);

    useEffect(()=>{
        const result = data.filter((item) => (item.country === country && item.end_year === year))
        setAreaData(result);
    },[data, country, year])

    return (
        <Container>
            <AreaChart width={350} height={400} data={areaData} >
                <defs>
                    <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="topic" />
                <YAxis/>
                <CartesianGrid strokeDasharray="3 3" />
                <Legend/>
                <Tooltip content={<CustomTooltip />}/>                
                <Area type="monotone" dataKey="likelihood" stroke="#8884d8" fillOpacity={1} fill="url(#colorA)" />
                <Area type="monotone" dataKey="relevance" stroke="#82ca9d" fillOpacity={1} fill="url(#colorB)" />               
            </AreaChart>
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
                <p className="value"> {`Relevance: ${data.relevance}`} </p>
                <p className="value"> {`Likelihood: ${data.likelihood}`} </p>
                <p className="value"> {`Sector: ${data.sector}`} </p>
                <p className="value"> {`Source: ${data.source}`} </p>
                </div>
            );
        }     
        return null;
    };
  
export default AreaChartComponent;
