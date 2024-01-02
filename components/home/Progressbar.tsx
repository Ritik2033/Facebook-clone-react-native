import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const RunningProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase progress every second
      setProgress((prevProgress) => (prevProgress >= 1 ? 0 : prevProgress + 0.25));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <ProgressBar progress={progress} width={410} height={5} />

    </View>
  );
};

export default RunningProgressBar;
