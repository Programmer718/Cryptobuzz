import React from 'react'
import { Chart, registerables } from 'chart.js';

import { Line } from 'react-chartjs-2';

import {Col,Row,Typography } from 'antd';
import moment from 'moment';



const {Title} = Typography;

Chart.register(...registerables);

const LineChart = ({coinHistory,currentPrice,coinName}) => {
    const coinPrice = [];
    const coinTimestamp = [];
    
    
    // Looping on History for price and timestamp
    for(let i=0; i<coinHistory?.data?.history?.length; i+=1)
     {
         coinPrice.push(coinHistory.data.history[i].price)
     

     }
     for(let i=0; i<coinHistory?.data?.history?.length; i+=1)
     {
        
          coinTimestamp.reverse().push(moment.unix(coinHistory?.data?.history[i].timestamp).format('DD-MM-YYYY'));

     }

     // Defining data objects 

     const data = {
         labels:coinTimestamp,
         datasets:[
             {
                 label: 'Price in USD',
                 data:coinPrice,
                 fill:false,
                 backgroundColor: '#0071bd',
                 borderColor:'#0071bd'

             },
         ],
     };

     // defining options object
     const options = {
         scales:{
            y:{
                
                    ticks:{
                        beginAtZero:true,
                    },
                },
            },
         
     }; 
     
  return (
    <>
    
    <Row className="chart-header">
        <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
        <Col className="price-container">
            <Title level={5} className='price-change'>Change:{coinHistory?.data?.change}%</Title>
            <Title level={5} className='current-price'>Current {coinName} Price: ${currentPrice}</Title>
        </Col>
    </Row>
    <Line data={data} options={options} />
    </>
  );
};

export default LineChart