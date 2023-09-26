import React, { useEffect } from "react";
import { ErrorMessage, Formik, setNestedObjectValues } from "formik";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from 'yup'
import * as ImagePicker from 'expo-image-picker'
import ErrorText from "../components/ErrorText";

const loginSchema = Yup.object().shape({
  email:Yup.string().required().email(),
  password:Yup.string().min(6).required()
})

function Login() {
  const requirePermission = async() => {
    try{
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    }
    catch(e){
      console.log(e)
    }
  }
   
  useEffect(()=>{
    requirePermission()
  },[])
  return (
    <Formik validationSchema={loginSchema} initialValues={{ email: "", password: "" }} onSubmit={(values)=>console.log(values)}>
      {({handleSubmit , errors , handleChange , setFieldTouched , touched}) => (
        <>
        <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image resizeMode="contain" style={styles.image} source={require("../assets/bccf-logo.png")} />
          <Text style={styles.subText} >A Place Of Destiny</Text>
        </View>
          <Screen>
            <AppTextInput
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange('email')}
              keyboardType={"email-address"}
              placeholder={"Email"}
              label={"Email"}
            />
            <ErrorText visible={touched.email} error={errors.email} />
            <AppTextInput
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange('password')}
              obSecureText={true}
              placeholder={"Password"}
              label={"password"}
            />
             <ErrorText visible={touched.password} error={errors.password} />
            <AppButton title={'Login'} onPress={handleSubmit}  />
            {/* <AppButton title={'pick'} onPress={async ()=> await ImagePicker.launchImageLibraryAsync({mediaTypes:ImagePicker.MediaTypeOptions.Images})}  /> */}
          </Screen>
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  errorText:{
    color:"red",
    fontWeight:"500"
  },
    formContainer:{
      flex:1,
      justifyContent:"center",
    },
    logoContainer:{
      alignItems:"center",
    },
    image:{
      overflow:"hidden",
      borderRadius:8
    },
    subText:{
      marginTop:4,
      fontWeight:"600",
      fontSize:18,
      color:"orange"
    }
})
export default Login
