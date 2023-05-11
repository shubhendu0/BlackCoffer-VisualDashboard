import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { styled, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const Container = styled(Box)`
    /* border: 1px solid #d3cede; */
    border-radius: 10px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 70vw;
    height: 90vh;
`;

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN); 
    return (
        <text
            x={x}
            y={y}
            fill="white"
            fontSize="14px"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%` }
        </text>
    )
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div
                className="custom-tooltip"
                style={{
                    color:"#ffff",
                    backgroundColor: "#d3cede",
                    padding: "5px",
                    border: "1px solid #cccc"
                }}
            >
                <label>{`${payload[0].name}`}</label>
            </div>
        );
    }
    return null;
};


const PieChartComponent = ({data, variable, sector}) => {
    const [pieData, setPieData] = useState([]);
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#3f50b5', '#f44336', '#d500f9'];

    useEffect(()=>{
        const countByKey = (data, variable, sector) => {
            //console.log(data, variable, sector)
            const counts = {};
            for (const item of data) {
                if(item[variable] != "" && item.sector === sector){
                    const value = item[variable];
                    counts[value] = (counts[value] || 0) + 1;
                }             
            }
            //console.log(counts)
            const result = Object.keys(counts).map((value) => ({
                [variable]: value,
                count: counts[value],
            }))
            //console.log(result)
            setPieData(result);
        }         
        countByKey(data, variable, sector);
    },[data, sector])

    return (
        <Container>
            <PieChart width={590} height={590}>
                <Pie
                    data={pieData}
                    dataKey="count"
                    nameKey="topic"
                    cx="50%"
                    cy="50%"
                    outerRadius={240}
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {
                        pieData.length > 0
                        ?
                        pieData.map((entry, index) => (
                            <>
                                <Cell 
                                    key={`cell-${index}`} 
                                    fill={COLORS[index % COLORS.length]}
                                />
                            </>
                        ))
                        :
                        null
                     }
                </Pie>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend/>
            </PieChart>
        </Container>
    )
}
  
export default PieChartComponent;
