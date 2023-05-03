import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity,FlatList,Modal, Button} from 'react-native'
import React ,{useState}from 'react'

import BellIcon from 'react-native-vector-icons/Ionicons'


const datas=[{   
  id:1,
  image:require('../assets/calender.png'),
  content:'Schedule an appoitnment'

},
{
  id:2,
  image:require('../assets/stethoscope.png'),
  content:'Doctors available now'
},{
  id:3,
  image:require('../assets/home.png'),
  content:'Doctors available now'
}
]


const Card = ({datas}) => (
  <View style={styles.card}>
    <Image source={datas.image} style={{height:40,width:40,marginLeft:25,marginTop:10}}/>
    <Text style={{marginLeft:10,marginTop:10}}>{datas.content}</Text>
  </View>
);

const  PatientPage =()=>{
  const [modalVisible, setModalVisible] = useState(false);




  return (
    <SafeAreaView>
      <View>
       
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
         >
          
          <View style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
          <View style={styles.modalcontainer}>
            <Image source={require('../assets/tick.jpg')} style={{height:50,width:50,borderRadius:50,marginLeft:170,marginTop:50}}/>
            <Text style={{fontWeight:'bold',color:'black',marginBottom:20,marginTop:30,marginLeft:100}}>Cancellation confirmation</Text>
            <Text style={{lineHeight:20,marginLeft:20,marginRight:20}}>This is to confirm that your appointement on 5 April 2022 at 16:00 has been cancelled. A refund will be processed shortly.Kindly allow 3-5 working days to receive the payment</Text>

            <View style={{marginTop:50,marginLeft:30}}>
          <TouchableOpacity style={{backgroundColor:'#6040BF',height:30,width:300,borderRadius:8}}>
            <Text style={{textAlign:'center',marginTop:5,color:'white',fontSize:15,fontWeight:'800'}}>RETURN TO APPOINTMENTS</Text>
            </TouchableOpacity>
          </View>
          </View>
     
          </View>
         
        
          

          </Modal>
            

       
        <View>
        <View style={{ backgroundColor: '#FBFBFB', borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Image source={{ uri: "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-images.jpg" }}
            style={styles.image}>
          </Image>
          <View style={{ marginLeft: 10, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 30, color: 'black' }}> Name Surname</Text>
            <Text style={{ fontSize: 20, color: '#454545' }}> ID card number / passport</Text>

          </View>

          <View style={{ alignItems: 'center', left: 30, top: 5 }}>
            <BellIcon name='notifications-outline' size={35} color={'#454545'} />
          </View>
        </View>
        <View style={{ padding: 10 }}>
          <View style={styles.upgradecontainer}>
            <Text style={{ fontSize: 20, fontWeight: 500, left: 10, color: '#454545' }}>Free account</Text>
            <Text style={{ fontSize: 18, fontWeight: 500, right: 10 }}>UPGRADE</Text>
          </View>
        </View>

      </View>
      <View style={{ backgroundColor: '#CDD9EA', borderRadius: 10, margin: 25, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <BellIcon name='notifications-outline' size={60} />

          <Text style={{ fontSize: 18, marginLeft: 5, marginRight: 50, marginBottom: 20, lineHeight: 30 }} >Your appointement has been rescheduled to 16:05.<Text style={{ color: 'black' }}>Kindly approve or decline this change.</Text></Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ borderRadius: 5, borderWidth: 2, marginBottom: 20, borderColor: 'red', width: 160, marginLeft: 10, height: 50 }}
          onPress={()=>setModalVisible(true)}
          >

            <Text style={{ alignSelf: 'center', marginTop: 10, fontWeight: '800', color: 'red' }}>DECLINE</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{ borderRadius: 5, marginBottom: 20, width: 160, height: 50, backgroundColor: '#00e600', marginRight: 10 }}>

            <Text style={{ alignSelf: 'center', marginTop: 10, color: 'white', fontWeight: '800' }}>APPROVE</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: 'black', fontWeight: '600',marginLeft:30,fontSize:18}}>How can we help you ?</Text>
        <Text style={{marginRight:30,fontSize:18,color:'#324ab2',fontWeight:'500'}}>LEARN MORE</Text>
      </View>
<FlatList
data={datas}
horizontal renderItem={({item})=> <Card datas={item}/>}
keyExtractor={item => item.id}

/>

<Text style={{color:'black',fontSize:20}}>
  Digimed Education centre
</Text>

<View style={styles.card1}>
  <View style={{flexDirection:'row'}}>
  <Image source={require('../assets/injuction.jpg')} style={{height:80,width:80,marginLeft:20,marginTop:10,borderRadius:8}}/>
  <Text style={{color:'black',marginLeft:20,marginTop:20,lineHeight:20}}>All your symptoms Seasonal {'\n'} Allergies or COVID-19?</Text>
  </View>
 

</View>


        </View>
    
    
     





</View>

    </SafeAreaView>
 
  )
}


const styles = StyleSheet.create({
 
  image: {

    height: 70,
    width: 70,
    borderRadius: 8,
    top: 10,
    marginLeft: 15
  },
  upgradecontainer: {
    backgroundColor: '#A5E3E0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    height: 40,
    borderRadius: 3,
    marginBottom: 20,

  },
  card:{
    height:110,
     width:100,
    margin:20,
     backgroundColor:'white',
     elevation:5,
    borderRadius:5
    
  
   

  },
item: {
  backgroundColor: '#f9c2ff',
  padding: 20,
  marginVertical: 8,
  marginHorizontal: 16,
},
title: {
  fontSize: 32,
},
modalcontainer:{
  height:350,
  width:380,
  borderRadius:50,
 margin:20,
  backgroundColor:'white',
  
 borderRadius:5,



},
card1:{
  height:120,
  width:380,
  marginLeft:20,
  marginTop:20,

  backgroundColor:'white',

 borderRadius:5

}


})

export default PatientPage


// return (
//   <View>
//       <View>
//           <Modal animationType="slide"
//               transparent={true}
//               visible={modalVisible}>
//               <View style={{ backgroundColor: 'black', height: '100%', width: '100%', opacity: 0.7, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
//                   {/* <Text>BookingModalScreen</Text> */}
//                   <View style={styles.card}>
//                       <View style={styles.bar}></View>
//                       <Image style={styles.tick} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1TDiqcTHeWPmgsvxN8xyY_JWDPSdPaSvuQ&usqp=CAU' }} />
//                       <Text style={styles.txt}>Booking confirmed..!</Text>
//                       <View>
//                           <TouchableOpacity onPress={() => navigation.navigate('DoctorsList')} style={styles.bluebtn}>
//                               <Text style={styles.textbtn}>RETURN TO HOME</Text>
//                           </TouchableOpacity>
//                       </View>
//                   </View>

//               </View>
//           </Modal>
//       </View>

//       <View style={{ backgroundColor: 'white' }}>
//           <View style={{ marginHorizontal: 20 }}>
//               {/* <Text>bookingAppPage</Text> */}
//               {/* <View>
//   <TouchableOpacity>
//       <Icons name = "left" size = {20} />
//       <Text>Back</Text>
//   </TouchableOpacity>
// </View> */}
//               <View style={styles.topSection}>
//                   <TouchableOpacity onPress={() => { navigation.goBack(); }}>
//                       <Image style={styles.backIcon} source={{ uri: 'https://cdn.pixabay.com/photo/2016/09/05/10/50/app-1646213_960_720.png' }} />
//                   </TouchableOpacity>
//                   <Text style={{ fontWeight: 900, fontSize: 20, color: '#b800e6' }}>Book Your Appoiment</Text>
//                   <TouchableOpacity>
//                       <Image style={styles.backIcon} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAABoaGjg4OCqqqrm5uatra0nJyfY2Nh6enpcXFycnJz19fW7u7uLi4uQkJBjY2NTU1PGxsY3Nze0tLRvb29KSkomJiYLCwsZGRkdHR1tbW3Z2dnma09bAAABWElEQVR4nO3dCW7CMBBAUbeUJRD2nfb+5yyNcoNqOmj63g2+LJIg2Z7WAAAAAAAAAAAAAOAXFtvuPU+3XQT39bu3bLs+NPCa3fd0jUzcZ9cN9nGBh+y20SGssMtOG3VhhcfstNExrHCenTaahxUus9NGy7DCVXbaaBVW2N+y2wa3wBfiOjtusI4LbO2UXfd0igxsbXpO7jtPYwOHyEmeP8gDAAAAAAAAAACoZTH7yDOLPlDS2uyevHPvPosNzN6Z+OMcGbjJrhts4gIn2W2jSVjhayxh5CJestNGl7DC+idK6q9h/d9h/Wdp22a3DQLfh//gm+b5XfpI7nsEf5e2+v8tAAAAAAAAAAAAiil+j/D0M3nnXvRd0OXv8y5/J3v9e/Xrz0aoP9+i/omS+nNm6s8Kqj/vqf7Mrta/wrNmHjtarvrsvJY///AruA8AAAAAAAAAAACA4r4Bj9MjQ5qVjE4AAAAASUVORK5CYII=' }} />
//                   </TouchableOpacity>
//               </View>
//               {/* <View style = {{width : '100%', height : '100%'}}> */}
//               <ScrollView>
//                   <ScrollContent />
//               </ScrollView>
//               <View style={{ marginTop: 15 }}>
//                   <TouchableOpacity style={styles.bluebtn1} onPress={() => setModalVisible(true)}>
//                       <Text style={styles.textbtn1}>AUTHORISE PAYMENT</Text>
//                   </TouchableOpacity>
//               </View>
//               <View>
//                   <Text></Text>
//                   <Text></Text>
//               </View>
//               {/* </ View> */}
//           </View>
//       </View>
//   </View>
// );
// }




