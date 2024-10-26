import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const WorkoutSummary = ({ route }) => {
  const { videoUri } = route.params;
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch('http://localhost:5000/analyze', {
          method: 'POST',
          body: JSON.stringify({ videoUri }),
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setSummary(data);
      } catch (error) {
        console.error('Error fetching workout summary:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [videoUri]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Workout Summary:</Text>
      <Text>Exercises: {summary.exercises.join(', ')}</Text>
      <Text>Reps: {summary.reps.join(', ')}</Text>
      <Text>Calories Burned: {summary.calories}</Text>
    </View>
  );
};

export default WorkoutSummary;
