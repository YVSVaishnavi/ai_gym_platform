import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const WorkoutRecorder = () => {
  const [videoUri, setVideoUri] = useState(null);

  const recordVideo = () => {
    launchCamera({ mediaType: 'video', videoQuality: 'high' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled video picker');
      } else if (response.error) {
        console.error('VideoPicker Error: ', response.error);
      } else {
        setVideoUri(response.uri);
        // Redirect to summary screen or handle video submission
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Record Your Workout</Text>
      <Button title="Record Video" onPress={recordVideo} />
    </View>
  );
};

export default WorkoutRecorder;
