import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import apiService from '../../services/api';

export default function Request() {
  const [userData, setUserData] = useState(null);
  const [visibleRequests, setVisibleRequests] = useState(3);
  const [showAll, setShowAll] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiService.fetchData('users?delay=3');
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSeeAll = () => {
    setShowAll(!showAll);
    if (showAll) {
      setVisibleRequests(3); // Set the number of visible requests back to the initial value
    } else {
      setVisibleRequests(userData?.data.length || 0);
    }
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Friend request (6)</Text>
        <TouchableOpacity onPress={handleSeeAll}>
        <Text style={styles.s_title}>{showAll ? 'See Less' : 'See All'}</Text>
        </TouchableOpacity>
      </View>
        <View style={{borderBottomColor:"#BDBDBD", borderBottomWidth:1}}>
      {userData &&
        userData.data.slice(0, visibleRequests).map((item) => (
          <View style={styles.contain} key={item.id}>
            <View>
              <Image source={{ uri: item.avatar }} style={styles.image} />
            </View>
            <View>
              <View style={styles.name}>
                <View>
                  <Text style={styles.request_name}>
                    {item.first_name} {item.last_name}
                  </Text>
                </View>
                <View>
                  <Text style={styles.mutual}>{item.id}w</Text>
                </View>
              </View>
              <View style={[styles.flexrow]}>
                <Image
                  source={require('../../images/profilee.jpg')}
                  style={styles.mutual_image}
                />
                <Text style={styles.mutual}>{item.id} mutual friends</Text>
              </View>
              <View style={[styles.flexrow]}>
                <TouchableOpacity style={[styles.button]}>
                  <Text style={[styles.text, styles.b_confirm]}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.b_delete]}>
                  <Text style={[styles.text]}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        </View>

        <View>
          <View>
             <Text style={styles.title}>People you may know </Text>
          </View>

          <View >
      {userData &&
        userData.data.map((item) => (
          <View style={styles.contain} key={item.id}>
            <View>
              <Image source={{ uri: item.avatar }} style={styles.image} />
            </View>
            <View>
              <View style={styles.name}>
                <View>
                  <Text style={styles.request_name}>
                    {item.first_name} {item.last_name}
                  </Text>
                </View>
                
              </View>
              <View style={[styles.flexrow]}>
                <Image
                  source={require('../../images/profilee.jpg')}
                  style={styles.mutual_image}
                />
                <Text style={styles.mutual}>{item.id} mutual friends</Text>
              </View>
              <View style={[styles.flexrow]}>
                <TouchableOpacity style={ styles.add_buttons}>
                  <Text style={[styles.text, styles.b_confirm]}>Add Friend </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.add_buttons, styles.b_delete]}>
                  <Text style={[styles.text]}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black',
  },
  s_title: {
    color: '#0866FF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  mutual_image: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
  },
  button: {
    backgroundColor: '#0866FF',
    paddingHorizontal: 45,
    paddingVertical: 7,
    borderRadius: 5,
    marginVertical: 5,
  },
  contain: {
    flexDirection: 'row',
    gap: 10,
    
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  flexrow: {
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
  },
  request_name: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  mutual: {
    fontSize: 16,
    fontWeight: '500',
    color: '#616161',
  },
  b_confirm: {
    color: '#ffffff',
  },
  b_delete: {
    backgroundColor: '#BDBDBD',
    
  },
  add_buttons:{
    backgroundColor: '#0866FF',
    paddingHorizontal: 35,
    paddingVertical: 7,
    borderRadius: 5,
    marginVertical: 5,
  }
});
