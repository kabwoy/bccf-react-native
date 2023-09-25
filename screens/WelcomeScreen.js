import React from 'react'
import { ImageBackground , StyleSheet, TouchableHighlight, View , Text , Image } from 'react-native'
import {} from '@expo/vector-icons'
function WelcomeScreen() {
  return (
   <ImageBackground style={styles.imageContainer} resizeMode='cover' width={100}  source={require("../assets/cross.jpg")}>
      <Text style={styles.title}>Welcome To <Text style={styles.titleSubString} >Bccf</Text></Text>
    <View style={styles.buttonContainer}>
    <TouchableHighlight>
    <View style={styles.register}>
        <Text style={styles.loginText}>Register</Text>
    </View>
    </TouchableHighlight>
    <TouchableHighlight style={styles.login} underlayColor={'#00B4AB'} onPress={()=>alert("hello")} >
    <View>
        <Text style={styles.loginText}>Login</Text>
    </View>
    </TouchableHighlight>
    </View>
   </ImageBackground>
  
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:"100%",
        padding:20
    },
    loginText:{
        fontSize:18,
        fontWeight:'900',
        color:"white"
    },
    titleSubString:{
        color:"royalblue",
        fontWeight:'900'
    },
    imageContainer:{
        flex:1,
        width:"100%",
        flexDirection:"column",
        justifyContent:"flex-end",
        alignItems:'center',
      
       
    },
    register:{
        backgroundColor:"#182C73",
        width:"100%",
        height:50,
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center"
    },

    login:{
        //backgroundColor:"dodgerblue",
        width:"100%",
        justifyContent:'center',
        alignItems:"center",
        height:50,
        marginTop:10,
        borderRadius:15,
        borderBottomWidth:4,
        borderLeftWidth:4,
        borderRightWidth:4,
        borderTopWidth:4,
        borderColor:"#00B4AB"
    },
    title:{
        fontSize:26,
        color:"white",
        fontWeight:"700"
    },

    image:{
        position:"absolute",
        top:40,
        left:70
    }
})
export default WelcomeScreen