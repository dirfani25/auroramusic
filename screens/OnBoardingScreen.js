import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LinearGradient from 'react-native-linear-gradient';
import { Platform, StatusBar } from 'react-native';

StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(55,64,115,0)");
  StatusBar.setTranslucent(true);
}

const OnboardingScreen = ({navigation}) => { 
    
    return (    
       
        <Onboarding 
        
            pages={[
                
                {
                    backgroundColor: '#1C2E82',
                    image: <Image style={{width:350, height:350}} source={require('../Assets/images/Onboard1.png')} />,
                    title:'MUSIC',
                    subtitle:'Different music genre',
                   
                },
                {
                    backgroundColor: '#1C2E82', 
                    image: <Image style={{width:350, height:350}} source={require('../Assets/images/onboard2.png')} />,
                    title:'SONGS',
                    subtitle:'SONGS In More than 10 Languages'
                },
                {
                    backgroundColor: '#1C2E82', 
                    image: <Image style={{width:350, height:350}} source={require('../Assets/images/onboard3.png')} />,
                    title:'ARTIST',
                    subtitle:'Artists from Different music genre',
            }
            ]}  
            
        />
        
    );
};
export default OnboardingScreen;

const styles = StyleSheet.create ({
    container : {
        flex : 0,
        alignItems: 'center',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:'60%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    }
    
})