import React, { useState } from 'react';
import { StyleSheet, Alert, Text, SafeAreaView, View } from 'react-native';
import { Button, RoundedInput } from 'react-native-internet-friends-button';

export default function App() {
  const [text, textChanged] = useState(''); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 10}}>
        <RoundedInput placeholder='yo' onChangeText={textChanged} onSubmitEditing={() => Alert.alert('yeet')}/>

        <Text>{text}</Text>
      </View>

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
