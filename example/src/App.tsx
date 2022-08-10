import * as React from 'react';

import { StyleSheet, Alert, SafeAreaView } from 'react-native';
import { Button } from 'react-native-internet-friends-button';

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        <Button 
          style={{flex: 1, padding: 20, justifyContent: 'flex-end'}}
          text='Submit' 
          showShadow={false}
          width={'100%'}
          onPressButton={() => {
            return new Promise((resolve):void => {
              setTimeout(() => {
                Alert.alert('it works!')
                resolve('yet'); 
              }, 1000)
            })
          }}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
