import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Result = ({navigation}) => {
  const route = useRoute();
  var bmi = route.params.data;
  bmi = bmi.toFixed(2);
  console.log('BMI is', bmi);

  function result() {
    
    if (bmi >= 18 && bmi <= 25) {
      return 'Normal';
    } else if (bmi < 18) {
      return 'Underweight';
    } else if (bmi > 25) {
      return 'Overweight';
    } else if (bmi > 30) {
      return 'Obese';
    }
  }

  let check = result();
  console.log('check', check);
  const width = Dimensions.get('window').width;

  return (
    
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor:'dodgerblue'
          // padding: 20,
        }}>
        <View>
          <Text style={{fontSize: 35, textAlign: 'center', marginBottom: 10}}>
            You are
          </Text>
          <TouchableOpacity
            style={{
              height: 60,
              width: 350,
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 30,
                color: '#fff',
                fontWeight: 900,
              }}>
              {check}
            </Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}

        {/* <View style={{alignItems:'center',justifyContent:'center',}}>
            <Text>BMI</Text>
            </View> */}

        {/* BMI Value */}
        <View style={{alignItems: 'center',height:150,width:250}}>
          <Text style={styles.bmiLabel}>BMI</Text>
          <Text style={styles.bmiValue}>{bmi}</Text>
          {/* <Text style={styles.bmiCategory}>OBESE CLASS I: 30 - 35</Text> */}
        </View>
      </View>
    
  );
};

export default Result;

const styles = StyleSheet.create({
  bmiLabel: {
    fontSize: 28,
    color: '#fff',
    // marginBottom: 10,
    fontWeight: 'bold',
  },
  bmiValue: {
    fontSize: 84,
    fontWeight: 'bold',
    color: 'white',
  },
  bmiCategory: {
    fontSize: 16,
    color: 'white',
    marginBottom: 30,
  },
});
