import { TextInput } from 'react-native-paper';
import { useState} from 'react'
import axios from 'axios';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';
 const Login = ({navigation}) => {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const login=()=>{
    //------------to check whether textinput is empty or not ----------------
    if (!username.trim()) {
      alert('Please Enter Name');
      return;
    }
    if (!password.trim()) {
      alert('Please Enter Email');
      return;
    }
    //-----------api fetch by axios ------------------------------------------
    axios.get("https://testlogin.free.beeceptor.com/login").then((response)=>{
      if(response.data.status){
        navigation.navigate("Home",{
          data:username,
        })
      }
    })
  }
  return (
    <View style={styles.container}>
    <TextInput style={styles.input}
      mode="outlined"
      label="Username"
      placeholder="Enter your Username"
      onChangeText={newText => setUsername(newText)}
      theme={{ colors: { primary: '#006C45',underlineColor:'transparent',}}}

    />
     <TextInput style={styles.input}
      mode="outlined"
      label="Password"
      secureTextEntry={true}
      onChangeText={newText => setPassword(newText)}
      placeholder="Enter your Password"
      theme={{ colors: { primary: '#006C45',underlineColor:'transparent',}}}
    />
  
   <TouchableOpacity style={styles.loginScreenButton}>
        <Text style={styles.loginText} onPress={login}>Login</Text>
   </TouchableOpacity>
 </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FFF6',
    justifyContent: 'center',
    padding: 30,
  },
  input:{
    borderColor: "#006C45",
    margin:20
  },

  loginScreenButton:{
    padding:20,
    backgroundColor:'#006C45',
    borderRadius:30,
    width:200,
    marginTop:50,
    marginLeft:55,
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    fontWeight:"900",
}
})