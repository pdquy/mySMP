import React, {useContext, useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimentions';
import FontIcon from 'react-native-vector-icons/AntDesign';

import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const {login} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Image source={require('../assets/images/MySMPLogo.png')} style={styles.logo_mySMP} />
      </View>
      <View style={styles.mid_container}>
        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <FontIcon name="user" size={20} color="#1fb7b7" />
          </View>
          <TextInput
            style={styles.input}
            numberOfLines={1}
            placeholder="email@smp.udn.vn"
            placeholderTextColor="#1fb7b7"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconStyle}>
            <FontIcon name="lock" size={20} color="#1fb7b7" />
          </View>
          <TextInput
            style={styles.input}
            numberOfLines={1}
            placeholder="mật khẩu"
            placeholderTextColor="#1fb7b7"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
          />
        </View>

        <TouchableOpacity style={styles.navButton} onPress={() => login(email, password)}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bot_container}>
        <View style={{ alignItems: 'center', justifyContent: 'center', height: 80, marginTop: 5, borderTopWidth: 2, borderTopColor: '#013299' }}>
          <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
              <Text style={{ fontSize: 12, marginLeft: 5, color: '#013299' }}>
                Bản quyền thuộc về Tổ CNTT TT & TV, khoa Y-Dược, Đại học Đà Nẵng.
              </Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container: {
    flex: 4,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_mySMP: {
    width: 250,
    height: 250,
  },
  mid_container: {
    flex: 5,
    width: windowWidth,
    alignItems: 'center',

  },
  bot_container: {
    flex: 1,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50,
    width: '90%',
    height: windowHeight / 15,
    borderColor: '#013299',
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#013299',
    borderRightWidth: 2,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    color: '#1fb7b7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  navButton: {
    marginTop: 15,
    backgroundColor: '#013299',
    padding: 10,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 2,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    backgroundColor: '#2e64e5',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
