import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'
import { RootStackParamList } from '../types/navigation'
import QRCode from 'react-native-qrcode-svg';

const QRScreen = ({route}: StackScreenProps<RootStackParamList, 'QRScreen'>) => {

  const { address } = route.params

  return (
    <View style={styles.container}>
      <QRCode
        size={220}
        value={address}
        color={theme.colors.black}
        backgroundColor={theme.colors.primary}
      />
      <Text style={styles.address}>{address}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    padding: 32,
    flex: 1,
    alignItems: 'center',
    paddingTop: 48
  },  
  qr: {
    width: '100%',
    height: '50%',
    backgroundColor: theme.colors.secondary,
    transform: [{ rotate: '90deg' }],
  },
  address: {
    fontSize: 45,
    width: '100%',
    textAlign: 'left',
    transform: [{ rotate: '90deg' }],
    fontWeight: '500',
    margin: 5,
    marginVertical: 20,
  }
})
export default QRScreen
