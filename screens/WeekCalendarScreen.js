import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Linking, Alert, Button, ActivityIndicator } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimentions';
import { WebView } from 'react-native-webview';

const ActivityIndicatorElement = () => {
  return (
    <View style={styles.activityIndicatorStyle}>
      <ActivityIndicator color="#1FB7B7" size="large" />
    </View>
  );
};
const WeekCalendarScreen = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container} >
      <ScrollView>
        <View style={styles.sub_container}>
          <WebView
            source={{ uri: 'http://daotao.smp.udn.vn/Default5.aspx?page=lichct' }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onLoadStart={() => setVisible(true)}
            onLoad={() => setVisible(false)}
          />
          {visible ? <ActivityIndicatorElement /> : null}
        </View>

      </ScrollView>
    </View>


  );
};

export default WeekCalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sub_container: {
    width: windowWidth - 20,
    height: windowHeight - 175,
    backgroundColor: '#1FB7B7',
    marginBottom: 10,
    flexDirection: 'row',
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

