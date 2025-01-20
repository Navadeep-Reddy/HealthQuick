import React, { useState, useEffect } from 'react';
import PercentageChart from './PercentageChart';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import { motion } from 'framer-motion';

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
          Actual: userMacros.totalProteins,
          Ideal: recomMacros.RecommendedProteins,
          amt: recomMacros.RecommendedProteins,
        },
        {
          name: 'Carbs',
          Actual: userMacros.totalCarbs,
          Ideal: recomMacros.RecommendedCarbs,
          amt: recomMacros.RecommendedCarbs,
        },
        {
          name: 'Fats',
          Actual: userMacros.totalFats,
          Ideal: recomMacros.RecommendedFats,
          amt: recomMacros.RecommendedFats,
        },
      ];
      setChartData(updatedChartData);
    }
  }, [userMacros, recomMacros]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-[80%] mx-auto h-[100vh]"
    >
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl text-center font-medium text-DGreen"
      >
        Macro Nutrient Analysis
      </motion.h1>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <PercentageChart data={chartData} />
      </motion.div>

      {/* Verdict */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full flex flex-col mx-10"
      >
        <h1 className="text-3xl font-semibold text-DGreen">Verdict</h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-TBlack text-xl">
            {verdict ? verdict : recomMacros ? 'Processing Verdict...' : 'Loading...'}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default MarcoAnal;
