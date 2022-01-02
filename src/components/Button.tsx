import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { colors } from '../theme'

type buttonProps = {
  onPress: () => void
  children: React.ReactNode
  disabled?: boolean
  theme?: 'primary' | 'secondary'
}

const Button = ({ children, theme = 'primary', disabled, ...otherProps }: buttonProps) => {
  const styleBtn = () => {
    switch (theme) {
      case 'primary':
        return {
          backgroundColor: colors.primary,
        }
      case 'secondary':
        return {
          backgroundColor: colors.secondary,
        }
      default:
        return {
          backgroundColor: colors.primary,
        }
    }
  }
  const styleDisabled = () => {
    if(disabled){
      return {
        backgroundColor: colors.grey[300],
      }
    }
  }
  return (
    <TouchableOpacity style={[styles.buttonDefault, styleBtn(), styleDisabled()]} disabled={disabled ? true : false} {...otherProps}>
      <Text style={styles.buttonTxt}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonDefault: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 32,
    backgroundColor: colors.primary,
    width: '90%',
  },
  buttonTxt: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
})

export default Button
