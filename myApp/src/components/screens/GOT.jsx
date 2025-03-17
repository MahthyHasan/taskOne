
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCharacters } from '../../store/characterSlice';
import ButtonN from '../atoms/ButtonN';

const GOT = ({ navigation }) => {
  const dispatch = useDispatch();
  const { characters, status } = useSelector((state) => state.character);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % characters.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + characters.length) % characters.length);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.iconDiv}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require("../../../assets/icons/settings.png")} style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

     
      <Text style={styles.text}>Game of Thrones Characters</Text>

     
      <View style={styles.characterContainer}>
        {status === 'loading' ? (
          <ActivityIndicator size="large" color="#FFD482" />
        ) : (
          characters.length > 0 && (
            <>
            <Text style={styles.fullNameText}>{characters[currentIndex].fullName}</Text>
            <Image
              source={{ uri: characters[currentIndex].imageUrl }}
              style={styles.characterImage}
              resizeMode="contain"
            />
            <Text style={styles.detailText}> Title : {characters[currentIndex].title}</Text>
            <Text style={styles.detailText}> Family : {characters[currentIndex].family}</Text>
            </>
          )
        )}
      </View>

   
      <View style={styles.navButtonDiv}>
        <ButtonN title="Prev" onPress={handlePrev} />
        <ButtonN title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

export default GOT;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3D3D3D",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 24,
    textAlign: "center",
    marginTop: 20,
  },
  settingsIcon: {
    width: 50,
    height: 50,
    marginTop: 37,
  },
  iconDiv: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    marginRight: 29,
  },
  characterContainer: {
    alignSelf: "center",
    height: 600,
    width: 400,
    borderWidth: 5,
    borderColor: "#FFD482",
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: 300,
    height: 500,
  },
  fullNameText:{
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  detailText:{
    color: "#FFD482",
    fontSize: 15,
    textAlign: "center",
    marginTop: 1,
  },
  navButtonDiv: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
