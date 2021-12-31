import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import theme from '../theme'
import { RootStackParamList } from '../types/navigation'
import QRCode from 'react-native-qrcode-svg'
import * as ScreenOrientation from 'expo-screen-orientation'

const QRScreen = ({ route }: StackScreenProps<RootStackParamList, 'QRScreen'>) => {
  const { address } = route.params
  React.useLayoutEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).then()
    return () => {
      ScreenOrientation.unlockAsync().then()
    }
  }, [])
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
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    padding: 32,
    justifyContent: 'center',
    paddingTop: 48,
  },
  address: {
    width: '50%',
    fontSize: 45,
    textAlign: 'left',
    fontWeight: '500',
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 16,
  },
})
export default QRScreen
