import { View, Text,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import {useSelector} from "react-redux"
import Backicon from 'react-native-vector-icons/Ionicons'
import Bagicon from 'react-native-vector-icons/Fontisto'
 

import React from 'react'



const SecondPage = ({navigation}) => {
    const cartList = useSelector((state)=>state.cart.cartList)

    return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
    <View >
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
           <TouchableOpacity onPress={()=>navigation.navigate("First")}>
            <Backicon 
             name ="arrow-back" color="#ff9eb5" size={30}/></TouchableOpacity>
            <Text style={{fontSize:24,color:"#ff85a2"}}>MyCartItems</Text>
            <Bagicon name="shopping-bag" color="#ff9eb5" size={25}/>
        </View>


        {cartList.map((item, index) => {

        return (
    
                <View style={styles.card} key={index}>
                    <View>
                        <Image style={{ height: 160, width: 160, borderRadius: 15, bottom: 15, right: 15 }} source={item.image} />
                    </View>
                  

                        <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                           
                            <View> 
                                <Text style={{color:"#ff85a2"}}>{item.price}</Text>
                            </View>
                           

                            



                        </View>
                  

                </View>
            )

        })}
        
        
    </View>
  
</ScrollView>
    </View>
  )
}

export default SecondPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F4F4F4'
    },

    card: {
        height: 200,
        width: 160,

        backgroundColor: 'white',
        marginHorizontal: 8,
        borderRadius: 10,
        marginBottom: 2,
        padding: 15,
        marginTop: 20

    }

})

