import { View, Text, Image, SafeAreaView, TextInput, StyleSheet, Dimensions, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import Widget from 'react-native-vector-icons/MaterialIcons'
import SortIcon from 'react-native-vector-icons/MaterialIcons'
import ShopIcon from 'react-native-vector-icons/FontAwesome'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector,useDispatch } from 'react-redux'
import Backicon from 'react-native-vector-icons/Ionicons'
import { add_to_cart } from '../redux_tool_kit/cartSlice'






const data = [{
    id: 1,
    image: require('../assets/product_3.jpg'),
    price:"$1200"
},
{
    id: 2,
    image: require('../assets/product_5.jpg'),
    price:"$1000"
},
{
    id: 3,
    image: require('../assets/product_6.jpg'),
    price:"$800"
},
{
    id: 4,
    image: require('../assets/product_3.jpg'),
    price:"$1100"
},
{
    id: 5,
    image: require('../assets/product_5.jpg'),
    price:"$2000"
},
{
    id: 6,
    image: require('../assets/product_6.jpg'),
    price:"$1700"
},
{
    id: 7,
    image: require('../assets/product_3.jpg'),
    price:"$1800"
},
{
    id: 8,
    image: require('../assets/product_5.jpg'),
    price:"$1600"
},



];

const FirstPage = ({navigation}) => {
    const cartList = useSelector((state)=>state.cart.cartList)
    const dispatch=useDispatch()
   
   
   
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Backicon onPress={()=>navigation.navigate("Login")}
                    
                    name="arrow-back" size={25} color="#ff9eb5" />
                <Text style={{ color: "#ff85a2", top: 2, fontSize: 20 }}>Welcome zara !</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Second")} >
                                                <ShopIcon 
                                                    name="shopping-cart" size={20} color={"#ff85a2"} />
                </TouchableOpacity>
                <Image
                    style={{ height: 30, width: 30, top: -3 }}
                    source={require('./../assets/profile-pic.jpg')} />
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TextInput style={styles.searchcontainer}></TextInput>
                <View style={{ marginLeft: 20, backgroundColor: '#ff9eb5', borderRadius: 10, height: 45, width: 40, alignItems: 'center', justifyContent: 'center' }} >
                    <SortIcon name="sort" size={25} color="white" />
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                 <ImageBackground
                    style={{ height: Dimensions.get('screen').height / 5, width: Dimensions.get('screen').width / 1.1, borderRadius: 30, overflow: 'hidden' }}
                    source={require('../assets/backgroundimg.jpg')}>
                     <Text style={{ color: 'white', marginLeft: 30, marginTop: 30, fontSize: 20, fontWeight: 600 }}>Big Sale</Text> 
                    <Text style={{ color: 'white', fontWeight: 600, fontSize: 30, marginLeft: 40 }}>50%</Text>
                    <Text style={{ color: 'white', fontWeight: 500, fontSize: 20, marginLeft: 30 }}>Discount</Text>
                </ImageBackground> 
            </View>
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }} >

                        {data.map((item, index) => {
                            const ind =cartList.findIndex(
                                (data)=>data.id === item.id
                            )
    
                        return (
                    
                                <View style={styles.card} key={index}>
                                    <View>
                                        <Image style={{ height: 160, width: 160, borderRadius: 15, bottom: 15, right: 15 }} source={item.image} />
                                    </View>
                                  

                                        <View style={{ flexDirection:'row',justifyContent:'space-between'}}>
                                           
                                            <View> 
                                                <Text style={{color:"#ff85a2"}}>{item.price}</Text>
                                            </View>
                                            <TouchableOpacity onPress={()=>dispatch(add_to_cart(item))} >
                                                <ShopIcon 
                                                    name="shopping-cart" size={20} color={ind<0 ? "grey" : "#ff9eb5"} />
                                            </TouchableOpacity>

                                            



                                        </View>
                                  

                                </View>
                            )

                        })}
                        
                        
                    </View>
                  
                </ScrollView>
            </View>



        </SafeAreaView>
    );
};

export default FirstPage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F4F4F4'
    },
    searchcontainer: {
        height: 45,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        backgroundColor: 'white',
        color: 'black',
        width: 320
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

