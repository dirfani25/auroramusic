import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tabs =() => { 
    return (
        <View style={styles.container}>
            <Text> Home</Text>
        </View>
    )
}

export default Tabs;

const styles = StyleSheet.create ({
    container : {
        flex : 1,
        alignItems: 'center',
        alignItems:'center',
        justifyContent:'center'
    },
})