import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';


const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Welcome')
        }, 2000);
    },[])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
      }}>
      <View style={styles.containter}>
        <Text style={{fontSize:90,fontWeight:700}}>BMIC</Text>
        <Text style={{color:'white',fontSize:30,fontWeight:900}}>Your BMI Calculator</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  containter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'dodgerblue'},
});
