import React, { useContext, useState, useEffect } from 'react';
import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimentions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = ({ navigation, route }) => {
  const [modalInfoVisible, setModalInfoVisible] = useState(false)
  const [modalCloseVisible, setModalCloseVisible] = useState(false)

  const { user, logout } = useContext(AuthContext);
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
            <Text style={styles.title}>{userData ? userData.name || 'Họ và tên' : 'Họ và tên'}</Text>
            <Text style={styles.sub_title}>{userData ? userData.position || 'Chức vụ' : 'Chức vụ'}</Text>
          </View>
          <View style={styles.information_acount_area_right}>
            <Image
              style={styles.avatar_user}
              source={{ uri: userData ? userData.avatar || 'https://firebasestorage.googleapis.com/v0/b/mysmp-bac7f.appspot.com/o/avatar%2Favatar_user.png?alt=media&token=74492353-13ed-44b3-b305-45b39f8a4630' : 'https://firebasestorage.googleapis.com/v0/b/mysmp-bac7f.appspot.com/o/avatar%2Favatar_user.png?alt=media&token=74492353-13ed-44b3-b305-45b39f8a4630' }} />
          </View>
        </View>
        <View style={styles.mid_container}>
          <View style={styles.userInfoSection}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalInfoVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>THÔNG TIN TÀI KHOẢN</Text>
                  <Image
                    style={styles.avatar_user}
                    source={{ uri: userData ? userData.avatar || 'https://firebasestorage.googleapis.com/v0/b/mysmp-bac7f.appspot.com/o/avatar%2Favatar_user.png?alt=media&token=74492353-13ed-44b3-b305-45b39f8a4630' : 'https://firebasestorage.googleapis.com/v0/b/mysmp-bac7f.appspot.com/o/avatar%2Favatar_user.png?alt=media&token=74492353-13ed-44b3-b305-45b39f8a4630' }} />
                  <View style={styles.infoText}>
                    <Text style={styles.modalInfoText}>{userData ? userData.name || 'Họ và tên' : 'Họ và tên'}</Text>
                    <Text style={styles.modalInfoText}>{userData ? userData.position || 'Chức vụ' : 'Chức vụ'}</Text>
                    <Text style={styles.modalInfoText}>{userData ? userData.email || 'Email' : 'Email'}</Text>
                  </View>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalInfoVisible(!modalInfoVisible)}>
                    <Text style={styles.textStyle}>Đóng</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalInfoVisible(true)}>
              <View style={styles.row}>
                <Icon name="information-outline" color="#1FB7B7" size={25} />
                <Text style={{ color: "#1FB7B7", marginLeft: 20, fontSize: 20 }}>Thông tin tài khoản</Text>
              </View>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalCloseVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>ĐĂNG XUẤT KHỎI mySMP</Text>
                  <Image source={require('../assets/images/alarm.png')} style={styles.avatar_user} />
                  <View style={styles.infoText}>
                    <Text style={styles.modalInfoText}>BẠN VẪN MUỐN THOÁT?</Text>
                  </View>
                  <View style={styles.row}>
                    <Pressable
                      style={[styles.button, styles.buttonYes]}
                      onPress={() => logout()}>
                      <Text style={styles.textStyle}>Có</Text>
                    </Pressable>
                    <Pressable
                      style={[styles.button, styles.buttonNo]}
                      onPress={() => setModalCloseVisible(!modalCloseVisible)}>
                      <Text style={styles.textStyle}>Không</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalCloseVisible(true)}>
              <View style={styles.row}>
                <Icon name="location-exit" color="#1FB7B7" size={25} />
                <Text style={{ color: "#1FB7B7", marginLeft: 20, fontSize: 20 }}>Đăng xuất</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bot_container}>
          <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, marginTop: 20, borderTopWidth: 2, borderTopColor: '#013299' }}>
            <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15, }}>
              <View style={{ flexDirection: 'column', alignItems: 'center', }}>
                <Text style={{ fontSize: 12, marginLeft: 5, color: '#013299' }}>
                  Bản quyền thuộc về Tổ CNTT TT & TV, khoa Y-Dược, Đại học Đà Nẵng.
                </Text>
                <Text style={{ fontSize: 12, marginLeft: 5, color: '#013299' }}>
                  Phụ trách: KS. Phạm Đình Quý
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>


  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container: {
    width: windowWidth - 20,
    height: (windowHeight - 200) / 5,
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
    height: windowHeight / 2,
    marginTop: 10,
  },
  userInfoSection: {
    marginBottom: 25,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonYes: {
    backgroundColor: '#013299',
    marginHorizontal: 10,
  },
  buttonNo: {
    backgroundColor: '#1FB7B7',
    marginHorizontal: 10,
  },
  buttonClose: {
    backgroundColor: '#1fb7b7',
  },
  textStyle: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 22,
    color: '#1FB7B7',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalInfoText: {
    color: '#1FB7B7',
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    alignItems: 'center',
    margin: 10,
  },
  bot_container: {
    height: 80,
    textAlign: 'center',
    alignItems: 'center',
  },
});
