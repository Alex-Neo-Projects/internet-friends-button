import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  Animated,
  Pressable,
  ActivityIndicator,
} from 'react-native';

interface ButtonProps { 
  text: string, 
  textColor?: string, 
  buttonColor?: string,
  onPressButton: Function, 
  showShadow?: boolean,
  width?: string | number,
  height?: string | number,
  style?: any
}
export function Button({ text, width, height, textColor = '#ffffff', buttonColor = '#1D99FF', onPressButton, showShadow = true, style = null } : ButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const animatedScale = useRef(new Animated.Value(0)).current

  useEffect(() => {
    animatedScale.setValue(1)
  }, [])

  const buttonAnimation = () => {
    animatedScale.setValue(0.9)
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 1,
      speed: 50,
      useNativeDriver: true,
    }).start()
  }

  const handleOnPress = async () => {
    setIsPressed(true)
    buttonAnimation()
    await onPressButton()
    setIsPressed(false)
  }

  return (
    <View
      style={[style, {flex: 1}]}
    >
      <Pressable
        onPress={async () => await handleOnPress()}
        disabled={isPressed}
      >
        <Animated.View
          style={[
            {
              backgroundColor: buttonColor,
              width: width ? width : 200,
              height: height ? height : undefined,
              padding: 20,
              borderRadius: 50,
              shadowColor: buttonColor,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowOpacity: showShadow ? 0.6 : 0,
              shadowRadius: 16,
            },
            { transform: [{ scale: animatedScale }] },
          ]}
        >
          {isPressed ? (
            <ActivityIndicator size={20} color="#ffffff" />
          ) : (
            <Text
              style={{
                color: textColor,
                fontWeight: '600',
                fontSize: 20,
                fontFamily: 'System',
              }}
            >
              {text ? text : "Enter text here"}
            </Text>
          )}
        </Animated.View>
      </Pressable>
    </View>
  )
}
