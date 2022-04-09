import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {useRoute} from '@react-navigation/native'
const Details = ({navigation}) => {
    const route=useRoute();
    navigation.setOptions({title:route.params.data})
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row",marginBottom:130}}>
      <Text style={styles.item}>Place:</Text>
      <Text style={styles.value}>{route.params.place}</Text>
      </View>
      <View style={{flexDirection:"row",marginBottom:130}}>
      <Text style={styles.item}>Gender:</Text>
      <Text style={styles.value}>{route.params.gender}</Text>
      </View>
      <View style={{flexDirection:"row"}}>
      <Text style={styles.item}>Age Group:</Text>
      <Text style={styles.value}>{route.params.age}</Text>
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3FFF6',
        justifyContent: 'center',
        padding: 80,  
    },
    item:{
        color:'#006C45' ,
        fontWeight:'900',
        fontSize:20,
        marginRight:100
    },
    value:{
        fontSize:20,
    }
})