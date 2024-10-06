import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import babelConfig from '../../babel.config';
import Slider from '@react-native-community/slider';

const Welcome = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [selectedGender, setSelectedGender] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BMI CALCULATOR</Text>

      {/* //Gender Selection */}
      <View style={styles.genderContainer}>
        <TouchableOpacity
          onPress={() => setSelectedGender('male')}
          style={[
            styles.genderButton,
            selectedGender === 'male' ? styles.selectedButton : null,
          ]}>
          <Image source={require('../assets/male.jpg')} style={styles.male} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedGender('female')}
          style={[
            styles.genderButton,
            selectedGender === 'female' ? styles.selectedButton : null,
          ]}>
          <Image source={require('../assets/female.jpg')} style={styles.male} />
        </TouchableOpacity>
      </View>
      {/* Height Slider */}
      <View style={{alignItems:'center'}}>
        <Text style={{color:'#fff',fontWeight:600,fontSize:18}}> HEIGHT</Text>
        <Text style={{fontSize:24,fontWeight:800,color:'#ffffaf'}}>{height}</Text>
          <Slider style={{width:'88%'}}  minimumValue={100} maximumValue={220} step={1} value={height} onValueChange={(val)=>setHeight(val)} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    padding: 20,
    justifyContent: 'space-evenly',
  },
  title: {fontSize: 30, color: '#fff', textAlign: 'center'},
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  genderButton: {
    width: 150,
    height: 150,
    backgroundColor: '#2f2f2f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  male: {
    height: 130,
    width: 130,
  },
});
