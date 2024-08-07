import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import io from 'socket.io-client';
import { PieChart } from '@mui/x-charts/PieChart';
import { CircularProgress } from '@mui/material';

function Home() {


  const [steps, setSteps] = useState(0);
  const [calories, setCalories] = useState(0);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const socket = io();

    socket.on('data', (data) => {
      const parsedData = parseInt(data, 10);
      setSteps(parsedData);
      setCalories(parsedData * 0.033);
    });

    function generateRandomValue() {
      return Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    }



    const heartRateInterval = setInterval(() => {
      updateBeatsPerMinute();
    }, 5000);

    function generateRandomValue1() {
      return Math.floor(Math.random() * (82 - 70)) + 70;
    }

    const updateBP = () => {
      var bpElement = document.getElementById("bp");
      bpElement.textContent = generateRandomValue1();
    }



    const updateChartData = () => {
      setChartData((prevData) => {
        const newData = [...prevData, { name: new Date().toLocaleTimeString(), heartRate: generateRandomValue(), calories }];
        return newData.slice(-7); // Keep only the most recent 7 data points
      });
    };

    const chartDataInterval = setInterval(updateChartData, 2000);

    // Initial update
    updateChartData();

    return () => {
      clearInterval(heartRateInterval);

      clearInterval(chartDataInterval);
      socket.disconnect();
    };
  }, [calories]);


  //APIS for communication

  //Sending Step Count for Health Status APIS

  const sendStep = () => {
    fetch("http://127.0.0.1:3000/sendStep", {
      method: "POST",
      body: { steps },
      credentials: "include", // Include this line if you need to send cookies with the request
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        toast.success(response["message"]);
        setTableCompletely(response);
      })
      .catch((err) => {
        toast.error("Error Sending Step count Data");
        console.log(err);
      });
  };


  //Sending HeartBeat for Health Status
  const sendHeartBeats = () => {
    fetch("http://127.0.0.1:5000/sendHeartBeats", {
      method: "POST",
      body: { heartRate },
      credentials: "include", // Include this line if you need to send cookies with the request
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        toast.success(response["message"]);
        setTableCompletely(response);
      })
      .catch((err) => {
        toast.error("Error Sending Heart Beat Data");
        console.log(err);
      });
  };

  return (
    <main className='main-container' style={{ backgroundImage: "url('/images/grad1.png')", backgroundSize: "cover", backgroundColor: "white" }}>
      <div className='main-title'>
        <h3 style={{color:"black"}}><i className="fa-solid fa-list" style={{ color: "#2862FF" }}></i> &nbsp;Dashboard </h3>


      </div>
      <h7 style={{ color: "darkgrey" }}>Track your coding progress.</h7>
      <div className='main-cards' >
        <div className='card bg-gray-500 bg-opacity-25 ' style={{
          background: 'rgba(255, 255, 255, 0.55)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}>
          <div className='card-inner ' >
            <h5 style={{ color: 'grey' }}> <img src="./images/leetcode.png" style={{ width: "18px", height: "20px" }} />&nbsp;Leetcode </h5>
          </div>
          {/* <h1 id='beatsPerMinuteElement'></h1> */}
         <PieChart
  series={[
    {
      data: [
        { value: 4000, label: 'Hard' },
        { value: 300, label: 'Medium' },
        { value: 300, label: 'Easy' },
      ],
      innerRadius: 30,
      outerRadius: 100,
      paddingAngle: 5,
      cornerRadius: 5,
  

    }
  ]}
/>
        
          <h7>Total Active Days:</h7>
        </div>
        <div className='card' style={{
          background: 'rgb(153 160 233 / 55%)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}>
          <div className='card-inner'  >
            <h5 style={{ color: 'grey' }}> <img src='./images/geeks.png' style={{width:"31px", height:"21px"}}/> &nbsp;Geeks for Geeks</h5>
          </div>
          {/* <h1 id='bp'>{bloodPressure}</h1> */}
          <h1 id='bp'>efe</h1>


          <CircularProgress variant="determinate" value={50} >
  2 / 3
</CircularProgress>
          <h5>mm Hg</h5>
        </div>
      
        <div className='card' style={{
          background: 'rgb(253, 223, 142)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.18)'
        }}>
          <div className='card-inner'>
            <h5 style={{ color: 'white' }}><img src='./images/codeforces.png' style={{width:"25px", height:"25px"}}/> &nbsp;Codeforces</h5>
          </div>
          <h1>{calories.toFixed(2)}</h1>
          <h7>kilo joules</h7>
        </div>
      </div>
      <br />
      <h3> <i className="fa-solid fa-chart-line" style={{ color: "#2862FF" }}></i> &nbsp;Your Health Data Chart </h3>
      <h7 style={{ color: "darkgrey" }}>Real Time Health data plotted in a graph for deep analysis.</h7>
      <div className='charts'>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='heartRate' fill='#8884d8' />
            <Bar dataKey='bloodPressure' fill='#82ca9d' />
            <Bar dataKey='calories' fill='#ffc658' />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type='monotone' dataKey='heartRate' stroke='#8884d8' activeDot={{ r: 8 }} />
            <Line type='monotone' dataKey='bloodPressure' stroke='#82ca9d' />
            <Line type='monotone' dataKey='calories' stroke='#ffc658' />
          </LineChart>
        </ResponsiveContainer>

        <div className='healthStatus my-2'>
          <h3><i className="fa-solid fa-hand-holding-droplet" style={{ color: "#2862FF" }}></i>&nbsp; Check your Health Status</h3>
          <h7 style={{ color: "darkgrey" }}>Analayse your Health Status in with respect to your real time data.</h7>
          <a href='http://127.0.0.1:3000/'>      <button type="button" className="btn my-3 mx-6" style={{ backgroundColor: "#2862FF", borderRadius: "20px", color: "white" }}>Check Health</button></a>

        </div>
        <div className='heartStatus'>
          <h3><i className="fa-solid fa-hand-holding-heart" style={{ color: "#2862FF" }}></i> &nbsp; Check your Heart Status</h3>
          <h7 style={{ color: "darkgrey" }}>Predict your Heart Conditions with our trained AI ML Models.</h7>
          <a href='http://127.0.0.1:5000/'>          <button type="button" className="btn my-3 mx-6" style={{ backgroundColor: "#2862FF", borderRadius: "20px", color: "white" }}>Check Heart Conditions</button></a>

        </div>

      </div>
    </main>
  );
}

export default Home;