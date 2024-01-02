import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function Store() {
  const store = [
    {
      id: 1,
      imageUrl: 'https://static.pexels.com/photos/63764/pexels-photo-63764.jpeg',
      price:'₹ 1850050. Car'
    },
    {
      id: 2,
      imageUrl: 'https://th.bing.com/th/id/OIP.-8C_Bt2pE1TWzmaP-DF9sgHaEK?rs=1&pid=ImgDetMain',
      price:'₹ 50050. Bick'
    },
    {
      id: 3,
      imageUrl: 'https://th.bing.com/th/id/OIP.diLb2HxOLNGcpjkV7-JbBAHaFj?rs=1&pid=ImgDetMain',
      price:'₹ 10050. Mobile'
    },
    {
      id: 4,
      imageUrl: 'https://th.bing.com/th/id/R.0aa9e65e523f34d59db062c37611f2a6?rik=pQUkRuzaulwPhg&riu=http%3a%2f%2fimage26.stylesimo.com%2fo_img%2f2017%2f08%2f09%2f231420-10380357%2fwomen-s-elegant-solid-evening-pleated-chiffon-dress.jpg&ehk=QynjssnOzvA%2fXl9QTSY03RoGcE0DYfVmVYTUABtPA7o%3d&risl=&pid=ImgRaw&r=0',
      price:'₹ 10050. Loyal girlfriend'
    },
    {
      id: 5,
      imageUrl: 'https://cdn1.bambinifashion.com/img/p/1/8/3/9/8/2/183982--product.jpg',
      price:'₹ 1500. T-Shirt'
    },
    {
      id: 6,
      imageUrl: 'https://th.bing.com/th/id/OIP.FuuUK7gal4PbfpdAalgDtwHaJ-?rs=1&pid=ImgDetMain',
      price:'₹ 1000. Watche'
    },
    {
      id: 7,
      imageUrl: 'https://www.carblogindia.com/wp-content/uploads/2017/05/2017-tvs-scooty-110-POWERFUL-PINK.jpg',
      price:'₹ 25000. Scooty'
    },
    {
      id: 8,
      imageUrl: 'https://i0.wp.com/www.extrachai.com/wp-content/uploads/2018/03/fascino.jpg?w=670&ssl=1',
      price:'₹ 48000. Scooter'
    },
    {
      id: 9,
      imageUrl: 'https://image26.stylesimo.com/o_img/2017/08/09/231420-10380349/women-s-elegant-solid-evening-pleated-chiffon-dress.jpg',
      price:'₹ 1500. Dress'
    },
    {
      id: 10,
      imageUrl: 'https://th.bing.com/th/id/OIP.fDz0I-aiG3lQCO0bCGGFMwHaJ-?w=1200&h=1616&rs=1&pid=ImgDetMain',
      price:'₹ 900. T-Shirt'
    },
    {
      id: 11,
      imageUrl: 'https://wallpaperaccess.com/full/1433068.jpg',
      price:'₹ 67000. Bick'
    },
    {
      id: 12,
      imageUrl: 'https://freepngimg.com/thumb/dress/31614-8-dress-picture.png',
      price:'₹ 1900. Dress'
    },
    {
      id: 13,
      imageUrl: 'https://th.bing.com/th/id/R.253593ed780f11373723109b80feac44?rik=a7KnhjnhhjDF8Q&riu=http%3a%2f%2fww1.prweb.com%2fprfiles%2f2012%2f10%2f31%2f10079702%2femily_qtrbnd_5.jpg&ehk=TKW64JUxLcMUzj9%2fTLQLsU%2ftMvpWU%2b7dNs%2bjmzG7e8c%3d&risl=&pid=ImgRaw&r=0',
      price:'₹ 600. Ring'
    },
    {
      id: 14,
      imageUrl: 'https://clipart.info/images/ccovers/1503496394Iphone-Mobile-Png-Image.png',
      price:'₹ 900. Mobile'
    },
    {
      id: 15,
      imageUrl: 'https://wallpaperaccess.com/full/3046105.jpg',
      price:'₹ 200. watches'
    },
    {
      id: 16,
      imageUrl: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=road-car-vehicle-170811.jpg&fm=jpg',
      price:'₹ 5000000. Car'
    }
  ]
  return (
    <View>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Marketplace</Text>
        </View>
        <View style={styles.icons}>

          <TouchableOpacity style={styles.itemslogo}

            onPress={() => {
              //Linking.openURL('https://reactnative.dev/');
            }}
          >
            <Image source={require('../clone/images/person.png')} style={{ width: 25, height: 25 }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemslogo}

            onPress={() => {
              //Linking.openURL('https://reactnative.dev/');
            }}
          >
            <Image source={require('../clone/images/glass.png')} style={{ width: 50, height: 50 }} />
          </TouchableOpacity>

        </View>

      </View>
      <ScrollView>

      <View style={styles.menu}>
        <TouchableOpacity style={styles.buttons}>
          <Icon name='sell' size={30}/>
          <Text style={styles.text}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
            <Icon name='list' size={30}/>
            <Text style={styles.text}>Categories</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:8, paddingVertical:4}}>
            <View>
              <Text style={{color:"black",fontSize:20, fontWeight:"700"}}>Today's pick</Text>
            </View>
            <View style={{flexDirection:"row"}}>
             <Icon name='location-on' size={30} color="#1877f2"/>
             <Text style={{color:"#1877f2",fontSize:18}}>Sindewahi</Text>
            </View>
          </View>


        <View style={styles.container}>
          
          {store.map((item) => (
            <View key={item.id} style={{marginBottom: 10,}}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text style={{fontSize:18, color:"black", fontWeight:"bold"}}>{item.price}</Text>
            </View>
          ))}


        </View>
        <View style={styles.footer}>
          <ActivityIndicator animating={true} color={"#BDBDBD"} size={'large'} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    //padding: 16,
    paddingHorizontal:8
  },
  image: {
    //flex: 1,
    //flexDirection: 'row',
    //flexWrap: 'wrap',
    //justifyContent: 'space-between',
    padding: 16,
    width: 190,
    height: 190,
    resizeMode: 'cover',
    
  },
  footer: {

    marginTop: 20,
  },
  header: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black"
  },
  itemslogo: {
    width: 40,
    height: 40,
    //borderRadius: 40 / 2,
    //backgroundColor: "#D5DBDB",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 4

  },
  icons:{
    flexDirection:"row",
    gap:10,
  },
  menu:{
    flexDirection: "row",
    gap:10,
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#BDBDBD"
  },

  buttons:{
    flexDirection:"row",
    backgroundColor:"#BDBDBD",
    width:"48%",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:20,
    marginBottom:10
  },
  text:{
    fontSize:18,
    color:"black",
    fontWeight:"bold"
  },
})