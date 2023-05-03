import FirstPage from "./screens/FirstPage";
import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SecondPage from "./screens/SecondPage";
import Login from "./screens/Login";
import PinPage from "./screens/const/PinPage";
import PatientPage from "./screens/PatientPage";

// const Stack=createNativeStackNavigator();

// const NavigationPage=()=>{
    
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="First" component={FirstPage} options={{headerShown:false}}/>
//                 <Stack.Screen name="Second" component={SecondPage} options={{headerShown:false}}/>
              
//             </Stack.Navigator>

//         </NavigationContainer>
//     );
// };
// export default NavigationPage

const Stack = createNativeStackNavigator();

const NavigationPage=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
            
             
                <Stack.Screen name="Login" component={ Login } options={{headerShown:false}}/>
                <Stack.Screen name="First" component={FirstPage} options={{headerShown:false}}/>
                <Stack.Screen name="Second" component={SecondPage} options={{headerShown:false}}/>
              
                

            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default NavigationPage

{/* <Stack.Screen name="PatientPage" component={PatientPage} options={{headerShown:false}}/> */}
{/* <Stack.Screen name="PinPage" component={PinPage} options={{headerShown:false}}/> */}