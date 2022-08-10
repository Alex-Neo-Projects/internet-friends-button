# internet-friends-button
A simple button for react native that doesn't have the double click problem

![Simulator Screen Recording - iPhone 13 - 2022-07-28 at 14 20 22](https://user-images.githubusercontent.com/7016669/181639632-dbf2f443-426c-4477-b8b3-4f833369c45d.gif)

Works for react native + expo projects!

## Installation

```sh
npm install react-native-internet-friends-button
```

## Usage

```js
import { Button } from "internet-friends-button";

// ...
  return (
    <View style={styles.container}>
      <Button 
        text='Submit' 
        onPressButton={() => {
          return new Promise((resolve):void => {
            setTimeout(() => {
              Alert.alert('fuk')
              resolve('yet'); 
            }, 1000)
          })
        }}
      />
    </View>
```

## Button props
```js
  text: string, // Button text
  textColor?: string, 
  buttonColor?: string,
  onPressButton: Function, // Pass in a function to run when the button is clicked
  showShadow?: boolean, // Button shadow (try setting to false to see the difference)
  style?: any // Inline style
```

## Input props
```js
  onChangeText:any,
  placeholder:string,
  onSubmitEditing:any,
  secureTextEntry?: boolean,
  autoCorrect?: boolean,
  maxLength?:number,
  height?: string | number,
  width?: string | number
```


## Contributing

To run example project: 

```yarn```
```yarn run example ios```