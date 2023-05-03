import { View, Text, TouchableOpacity, StyleSheet,TextInput,Image} from 'react-native'
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { useState } from 'react'
import LoginForm from './const/LoginForm'

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            {/* <Text onPress={()=>navigation.navigate('First')}>SHOP APP</Text> */}
            <View style={styles.logoContainer}>
                <Image 
                style={{height:100,width:100,borderRadius:50}}
                source={require('../assets/Icon_img.jpg')}/>
            </View>
            <LoginForm navigation ={navigation}/>

          
        </View>

    )
            }


const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12

    },
    logoContainer:{
        alignItems:'center',
        marginTop:60
    }

})
  




// const styles = StyleSheet.create({
//     loginbtn: {   
//         height: 50,
//         width: 400,
//         backgroundColor: "#ff9eb5",
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//    emailtxt: {
    
//         borderWidth:2,
//         borderColor:"#ff9eb5",
//         height:50,
//         width:400,
//         marginBottom:10,
//         borderRadius:8
//     },
//     passwordtxt:{
//         borderWidth:2,
//         borderColor:"#ff9eb5",
//         height:50,
//         width:400,
//         marginBottom:10,
//         borderRadius:8


//     }
// })

export default Login



