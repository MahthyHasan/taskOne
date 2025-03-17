import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react'
import Voice from '@react-native-voice/voice'

const VoicePage = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isRecording, setIsrecording] = useState("");

  Voice.onSpeechStart = () => setIsrecording(true);
  Voice.onSpeechEnd = () => setIsrecording(false);
  Voice.onSpeechError = err => setError(err);
  Voice.onSpeechResults = (result) => setResult(result.value[0]);

  const startRecording =async () => {
    try {
      await Voice.start('en-US');
    } catch (err) {
      setError(err)            
    }
  }

  const stopRecording =async () => {
    try {
      Voice.stop();
    } catch (error) {
      setError(error);      
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isRecording ? 'Voice is Recording' : 'Start Recording'}</Text>
      <Text>{result}</Text>
      <Text>{error}</Text>
      <View style={styles.micButtonDiv}>
         <TouchableOpacity onPress={isRecording ? stopRecording : startRecording}>
            <Image source={require("../../../assets/icons/mic2.png")} style={styles.micButton} />
         </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('GOT')}>
            <Text style={styles.gobackText}>Go Back</Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}

export default VoicePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3D3D3D",
      },
      text: {
        color: "#FFFFFF",
        fontSize: 24,
        textAlign: "center",
        marginTop: 29,
      },
      micButtonDiv: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 500,
      },
      micButton: {
        height: 100,
        width: 100,

      },
      gobackText: {
        textAlign: "center",
        fontSize: 30,
        color: "#FFD482",
        marginTop: 130,
      }
})