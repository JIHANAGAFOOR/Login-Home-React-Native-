import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import RadioGroup from 'react-native-radio-buttons-group';
import {Picker} from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
const Home = ({navigation , route}) => {
  navigation.setOptions({title:route.params.data})
  const [place,setPlace]=useState(" ")
  const [age, setAge] = useState();
  const [Radiovalue, setRadioValue] = useState(' ');
  const navigationData=useNavigation();
  const submit=()=>{
    //------------navigate to Details screen with data----------------
    navigationData.navigate("Details",{
      place: place,
      gender:Radiovalue,
      age:age,
      data:route.params.data,
    })
  }
  return (
    <View style={styles.container}>
    <Text style={styles.place}>Place</Text>
    <View style={{padding:20}}>
    <TextInput  
       style={styles.input}  
               placeholder="Enter Your Place" 
                value={place} 
                onChangeText={(text)=>setPlace(text)}
                />  
             </View>
             <View style={{padding:20,}}>
             <Picker
             style={styles.picker}
             selectedValue={age}
             onValueChange={(itemValue, itemIndex) =>
               setAge(itemValue)
             }>
             <Picker.Item label="Age Group" value="" />
             <Picker.Item label="0-18" value="0-18" />
             <Picker.Item label="18-25" value="18-25" />
             <Picker.Item label="25-40" value="25-40" />
             <Picker.Item label="40-55" value="40-55" />
             <Picker.Item label="55+" value="55+" />
           
           </Picker>
             </View>
            
           <Text style={styles.place}>Gender</Text>
           <View style={{padding:20}}>
           <RadioButton.Group onValueChange={newValue => setRadioValue(newValue)} value={Radiovalue} >
           <View  >
             <Text>Male</Text>
             <RadioButton value="Male" style={{uncheckedColor:"#444",size:50}}  />
           </View>
           <View style={{marginLeft:80,marginTop:-53}}>
             <Text>Female</Text>
             <RadioButton value="Female" />
           </View>
            <View style={{marginLeft:180,marginTop:-55}}>
             <Text>Others</Text>
             <RadioButton value="Others" />
           </View>
           <View style={{marginLeft:270,marginTop:-55}}>
           <Text>Undeclared</Text>
           <RadioButton value="Undeclared" />
         </View>
         </RadioButton.Group>
          </View>
           <TouchableOpacity
           style={styles.loginScreenButton}
           >
           <Text style={styles.loginText} onPress={submit}>Submit</Text>
  </TouchableOpacity>
    </View>
  )
}

   export default Home

   const styles = StyleSheet.create({
    container:{
      flex: 1,
    backgroundColor: '#F3FFF6',
    justifyContent: 'center',
    },
    input:{
      backgroundColor:'white',
      padding: 15,
      borderWidth:2,
      
    },
    place:{
      color: '#006C45',
      margin: 10,
      fontWeight:'900',
    },
    picker:{
        width:'100%',
        height:50,
        borderWidth:2,
        borderColor:"black",
        fontWeight:'900',
        color:'#006C45' ,
        marginTop:10,
        marginBottom:10,
        backgroundColor:'white',
        borderColor: "black",
    },
    radio:{
      width:200,
    },
    loginScreenButton:{
      padding:20,
      backgroundColor:'#006C45',
      borderRadius:30,
      width:200,
      marginTop:50,
      marginLeft:100,
      
    },
    loginText:{
      color:'#fff',
      textAlign:'center',
      fontWeight:"900"
  }
})
