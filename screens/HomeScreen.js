import React, {useContext, useState, useEffect} from 'react';
import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimentions';

import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = ({ navigation, route }) => {
  const {user} = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    await firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if (documentSnapshot.exists) {
          setUserData(documentSnapshot.data());
        }
      })
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View style={styles.container} >
      <ScrollView>
        <View style={styles.top_container}>
          <Image source={require('../assets/images/menu-bg.jpeg')} style={styles.imageBackground} />
          <View style={styles.information_acount_area_left}>
            <Text style={styles.text_welcome}>Xin chào:</Text>
            <Text style={styles.title}>{userData ? userData.name || 'Họ và tên' : 'Họ và tên'}</Text>
            <Text style={styles.sub_title}>{userData ? userData.position || 'Chức vụ' : 'Chức vụ'}</Text>
          </View>
          <View style={styles.information_acount_area_right}>
          <Image 
              style={styles.avatar_user}
              source={{ uri: userData ? userData.avatar || 'https://firebasestorage.googleapis.com/v0/b/mysmp-bac7f.appspot.com/o/avatar%2Favatar_user.png?alt=media&token=74492353-13ed-44b3-b305-45b39f8a4630' : 'https://firebasestorage.googleapis.com/v0/b/mysmp-bac7f.appspot.com/o/avatar%2Favatar_user.png?alt=media&token=74492353-13ed-44b3-b305-45b39f8a4630'}}  />
          </View>
        </View>
        <View style={styles.mid_container}>
          <TouchableOpacity onPress={() => navigation.navigate('WeekCalendar')}>
            <View style={styles.gridStyle}>
              <Image style={styles.gridImage} source={require('../assets/images/calendar_icon.png')} />
              <Text style={styles.gridText}>LỊCH CÔNG TÁC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ClassroomManagement')}>
            <View style={styles.gridStyle}>
              <Image style={styles.gridImage} source={require('../assets/images/class_icon.png')} />
              <Text style={styles.gridText}>QUẢN LÝ PHÒNG HỌC</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom_container}>
          <TouchableOpacity onPress={() => navigation.navigate('LibraryPort')}>
            <View style={styles.gridStyle2}>
              <Image style={styles.gridImage2} source={require('../assets/images/library_icon.png')} />
              <Text style={styles.gridText2}>CỔNG THƯ VIỆN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ElearningPort')}>
            <View style={styles.gridStyle2}>
              <Image style={styles.gridImage2} source={require('../assets/images/elearning_icon.png')} />
              <Text style={styles.gridText2}>CỔNG E-LEARNING</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom_container}>
          <TouchableOpacity onPress={() => navigation.navigate('TeacherPort')}>
            <View style={styles.gridStyle2}>
              <Image style={styles.gridImage2} source={require('../assets/images/teacherport_icon.png')} />
              <Text style={styles.gridText2}>CỔNG GIẢNG VIÊN</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('StudentPort')}>
            <View style={styles.gridStyle2}>
              <Image style={styles.gridImage2} source={require('../assets/images/studentport_icon.png')} />
              <Text style={styles.gridText2}>CỔNG SINH VIÊN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>


  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container: {
    width: windowWidth - 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  imageBackground: {
    width: windowWidth - 20,
    margin: 10,
    position: 'absolute',
    resizeMode: 'contain',
    opacity: 0.3,
  },
  information_acount_area_left: {
    flex: 3,
    height: '90%',
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  text_welcome: {
    fontSize: 25,
    fontWeight: 500,
    color: '#000066'
  },
  title: {
    fontSize: 25,
    fontWeight: 900,
    color: '#013299'
  },
  sub_title: {
    fontSize: 15,
    color: '#013299'
  },
  information_acount_area_right: {
    flex: 1,
    height: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar_user: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  mid_container: {
    width: windowWidth - 20,
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: "FFFFFF",
  },
  gridStyle: {
    width: (windowWidth - 20),
    height: 150,
    borderWidth: 3,
    borderColor: '#013299',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridImage: {
    width: 100,
    height: 100,
  },
  gridText: {
    color: '#013299',
    fontSize: 20,
    fontWeight: 900,
  },
  bottom_container: {
    width: windowWidth - 20,
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: "FFFFFF",
    flexDirection: 'row',
  },
  gridStyle2: {
    width: (windowWidth /2) -30,
    height: 150,
    borderWidth: 3,
    borderColor: '#013299',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridImage2: {
    width: 100,
    height: 100,
  },
  gridText2: {
    color: '#013299',
    fontSize: 15,
    fontWeight: 900,
  },
});
