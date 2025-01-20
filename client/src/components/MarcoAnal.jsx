import React, { useState, useEffect } from 'react';
import PercentageChart from './PercentageChart';
import axios from 'axios';
import { useUser } from '../context/UserContext';

const MarcoAnal = () => {
  const { userDetails } = useUser();

  const [userMacros, setUserMacros] = useState(null);
  const [recomMacros, setRecomMacros] = useState(null);
  const [verdict, setVerdict] = useState(null);

  const [chartData, setChartData] = useState([
    { name: 'Proteins', Actual: 0, Ideal: 0, amt: 0 },
    { name: 'Carbs', Actual: 0, Ideal: 0, amt: 0 },
    { name: 'Fats', Actual: 0, Ideal: 0, amt: 0 },
  ]);

  // Function to fetch user macros
  const getUserMacros = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/health/api/v1/macros/${userDetails.id}`);
      setUserMacros(response.data);
      console.log('User Macros:', response.data);
    } catch (error) {
      console.error('Error fetching macros:', error);
    }
  };

  // Function to fetch recommended macros
  const getRecommendedMacros = async (macros) => {
    try {
      const response = await axios.post('http://localhost:3000/health/api/v1/recommendedMacros', macros);
      setRecomMacros(response.data);
      console.log('Recommended Macros:', response.data);
    } catch (error) {
      console.error('Error fetching recommended macros:', error);
    }
  };

  // Function to fetch verdict
  const getVerdict = async (macros) => {
    try {
      const response = await axios.post('http://localhost:3000/health/api/v1/verdict', macros);
      setVerdict(response.data);
      console.log('Verdict:', response.data);
    } catch (error) {
      console.error('Error fetching verdict:', error);
    }
  };

  // Fetch user macros when the component mounts or when `userDetails` changes
  useEffect(() => {
    if (userDetails?.id && !userMacros) {
      getUserMacros();
    }
  }, [userDetails, userMacros]);

  // Fetch recommended macros when user macros are available
  useEffect(() => {
    if (userMacros && !recomMacros) {
      getRecommendedMacros(userMacros);
    }
  }, [userMacros, recomMacros]);

  // Fetch verdict when recommended macros are available
  useEffect(() => {
    if (userMacros && !verdict) {
      getVerdict(userMacros);
    }
  }, [recomMacros, verdict]);

  useEffect(() => {
    if (userMacros && recomMacros) {
      const updatedChartData = [
        {
          name: 'Proteins',
          Actual: userMacros.totalProteins, // 'total' prefix for Actual
          Ideal: recomMacros.RecommendedProteins, // 'Recommended' prefix for Ideal
          amt: recomMacros.RecommendedProteins, // Use Ideal value for additional metrics
        },
        {
          name: 'Carbs',
          Actual: userMacros.totalCarbs, // 'total' prefix for Actual
          Ideal: recomMacros.RecommendedCarbs, // 'Recommended' prefix for Ideal
          amt: recomMacros.RecommendedCarbs,
        },
        {
          name: 'Fats',
          Actual: userMacros.totalFats, // 'total' prefix for Actual
          Ideal: recomMacros.RecommendedFats, // 'Recommended' prefix for Ideal
          amt: recomMacros.RecommendedFats,
        },
      ];
      setChartData(updatedChartData);
    }
  }, [userMacros, recomMacros]);

  return (
    <div className='w-[80%] mx-auto h-[100vh] '>
      <h1 className='text-5xl text-center font-medium text-DGreen'>Macro Nutrient Analysis</h1>
      <PercentageChart data={chartData} />
      <div className='w-full flex flex-col mx-10'>
        <h1 className='text-3xl font-semibold text-DGreen'>Verdict</h1>
        <div>
          <p className='text-TBlack text-xl'>
            {verdict ? verdict : recomMacros ? 'Processing Verdict...' : 'Loading...'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarcoAnal;
