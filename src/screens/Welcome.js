import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Slider from '@react-native-community/slider';

const Welcome = ({navigation}) => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [age,setAge]=useState(24)
  const [selectedGender, setSelectedGender] = useState(null);

  function result(){
    // bmi=weight(in kg)/height*height(in metres)
    const bmi = weight / (height / 100) ** 2;
    return bmi;
  }
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
          <Image source={require('../assets/male.jpg')} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedGender('female')}
          style={[
            styles.genderButton,
            selectedGender === 'female' ? styles.selectedButton : null,
          ]}>
          <Image source={require('../assets/female.jpg')} style={styles.logo} />
        </TouchableOpacity>
      </View>
      {/* Height Slider */}
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#fff', fontWeight: 600, fontSize: 18}}>
          {' '}
          HEIGHT
        </Text>
        <Text style={{fontSize: 24, fontWeight: 800, color: '#ffffaf'}}>
          {height}
        </Text>
        <Slider
          style={{width: '88%'}}
          minimumValue={100}
          maximumValue={220}
          step={1}
          value={height}
          onValueChange={val => setHeight(val)}
        />
      </View>
      {/* Weight and Age Selection */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        {/* Weight */}
        <View
          style={{
            width: 160,
            height: 150,
            backgroundColor: '#2f2f2f',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth:2,
            borderColor:'dodgerblue'
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 700}}>
            WEIGHT
          </Text>
          <Text style={{color: '#fff', fontSize: 30, fontWeight: 900}}>
            {weight} KG
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => setWeight(weight - 1)}>
              <Text style={{fontSize: 40,fontWeight:900,color:'dodgerblue'}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => setWeight(weight + 1)}>
              <Text style={{fontSize: 40,fontWeight:900,color:'dodgerblue'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Age */}
        <View
          style={{
            width: 160,
            height: 150,
            backgroundColor: '#2f2f2f',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth:2,
            borderColor:'dodgerblue'
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 700}}>
            AGE
          </Text>
          <Text style={{color: '#fff', fontSize: 30, fontWeight: 900}}>
            {age}
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => setAge(age - 1)}>
              <Text style={{fontSize: 40,fontWeight:900,color:'dodgerblue'}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => setAge(age + 1)}>
              <Text style={{fontSize: 40,fontWeight:900,color:'dodgerblue'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Calculate Button */}
      <TouchableOpacity onPress={()=>{
        const res=result();
        navigation.navigate('Result',{data:res});
      }}  style={{backgroundColor:'#e94560',alignItems:'center',height:45,justifyContent:'center'}}>
        <Text style={{color:'#fff',fontSize:24,fontWeight:800}}>CALCULATE</Text>
      </TouchableOpacity>
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
  logo: {
    height: 130,
    width: 130,
  },
  buttons: {
    flexDirection: 'row',
  },
  controlButton: {
   marginLeft:10,
   marginRight:10
  },
});
