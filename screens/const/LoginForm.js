import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView,Alert } from 'react-native'
import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import auth from '@react-native-firebase/auth'

const LoginForm = ({ navigation }) => {


    const LoginFormSchema = yup.object().shape({
        email: yup.string().email().required('An email is required'),
        password: yup.string().required().matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{4,10})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character").min(8, 'Your password has to have at least 8 characters')
    })
    // // const  onSubmit = (data) => {
    //     console.log("data", data)
       
    //     if(data.password != "123456") {
    //       setError('password', {
    //         message: 'password is mismatch',
    //       })
    //   } else {
    //     clearErrors('password')
    //     props.history.push('index') 
        
    //   }
    //   }

    async function signIn(data){

        try{
        const {password,email} = data
        const user = await auth().signInWithEmailAndPassword(email,password)
        
        if(user){
           navigation.navigate('First')
        }
    }
    catch(error){
       error.name,
       error.message
    }

    }




    return (
        <SafeAreaView>
            <Formik    
                initialValues={{ email: '', password: '' }}
                // onSubmit={(values) => console.log(values)}
                // onSubmit={(values)=>{
                //     signIn(values)
                //     // navigation.navigate('First') 
                // }}
               validationSchema={LoginFormSchema}
                //validateOnMount={true}

                onSubmit={(values)=>{
                  signIn(values)
                }}
                

                
            >

              



                    
                    { (props)=>
                        <View>


                            <TextInput style={styles.emailtxt}
                                placeholder='Phone number,username or email'
                                placeholderTextColor='lightgrey'
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType='emailAddress'
                                autoFocus={true}
                                onChangeText={props.handleChange('email')}
                                //onBlur={handleBlur('email')}
                                value={props.values.email}
                            />
                            
                            <View style={{alignItems:'flex-end'}}>

                            </View>

                         

                            <TextInput style={styles.passwordtxt}
                                placeholder='Password'
                                placeholderTextColor='lightgrey'
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                autoFocus={true}
                                onChangeText={props.handleChange('password')}
                               // onBlur={handleBlur('password')}
                                value={props.values.password}

                            />



                            <View style={{ alignItems: 'flex-end' }}>
                                <Text style={styles.forgotbtn}>Forgot Password ?</Text>
                            </View>



                            <TouchableOpacity onPress={props.handleSubmit}



                                disabled={!props.isValid}
                                style={styles.loginbtn(props.isValid)} 
                                >
                                <Text>LOGIN</Text>
                            </TouchableOpacity>



                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <Text>Don't have an account ? </Text>
                                <Text style={{ color: "#ff9eb5" }}> signUp</Text>
                            </View>

                        </View>
}
                    
               

            </Formik>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    loginbtn: isValid => ({
        height: 50,
        width: 380,
        backgroundColor: isValid ? '#ff9eb5' : 'lightgrey',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,

    }),



    emailtxt: {

        borderWidth: 2,
        marginTop: 50,
        borderColor: "#ff9eb5",
        height: 50,
        width: 380,
        marginBottom: 10,
        borderRadius: 8
    },
    passwordtxt: {
        borderWidth: 2,
        borderColor: "#ff9eb5",
        height: 50,
        width: 380,
        marginBottom: 10,
        borderRadius: 8


    },

    forgotbtn: {
        color: "#ff9eb5",
        marginBottom: 30
    }

})

export default LoginForm
// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";


// const schema = yup.object().shape({
//     firstName: yup.string().matches(/[A-Za-z]/, 'First Name includes only letters').required('Enter First Name'),
//     lastName: yup.string().required('Enter Last Name'),
//     email: yup.string().email('Enter Valid Email').required('Enter Email'),
//     age: yup.number('Must Be a Number').integer().positive().required('Enter Age'),
//     password: yup.string().matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{4,10})/,
//         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
//     ).min(4, 'Minimum 4 chars required').max(10, 'only 10 chars allowed').required(),
//     confirm: yup.string().oneOf([yup.ref("password"), null]),
// });

// const Validation = () => {

//     const { register, handleSubmit, reset, setFocus, setValue, getValues, getFieldState, formState: { errors, isValid, isDirty } } = useForm({
//         resolver: yupResolver(schema),
//         mode: 'onChange'
//     });

//     React.useEffect(() => {
//         setFocus("lastName");
//     }, [setFocus]);


//     return (
//         <div className='formf'>
//             <h2>Form Validation</h2>

//             <form onSubmit={handleSubmit((data) => {
//                 console.log(data);
//                 // alert(JSON.stringify(data));
//                 alert(JSON.stringify(getValues()));
//                 console.log(getFieldState('firstName'));
//                 reset();
//             })}>

//                 <input {...register("firstName")} placeholder='First Name' />
//                 <p>{errors.firstName?.message}</p>
//                 <input {...register("lastName")} placeholder='Last Name' />
//                 <p>{errors.lastName?.message}</p>
//                 <input {...register("email")} placeholder='Email' />
//                 <p>{errors.email?.message}</p>
//                 <input {...register("age")} placeholder='Age' />
//                 <p>{errors.age?.message}</p>
//                 <input {...register("password")} type="password" placeholder='Password' />
//                 <p>{errors.password?.message}</p>
//                 <input {...register("confirm")} type="password" placeholder='Confirm Password' />
//                 <p>{errors.confirm?.message}</p>
//                 <button type="submit" onClick={() => setValue("firstName", "Rthy")} disabled={isDirty && !isValid}>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Validation