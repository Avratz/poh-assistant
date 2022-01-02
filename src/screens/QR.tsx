import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import * as ScreenOrientation from 'expo-screen-orientation'
import { RFValue } from 'react-native-responsive-fontsize'
import QRCode from 'react-native-qrcode-svg'

import { colors } from '../theme'
import { RootStackParamList } from '../types/navigation'

const QRScreen = ({ route }: StackScreenProps<RootStackParamList, 'QRScreen'>) => {
  const { address } = route.params
  React.useLayoutEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).then()
  }, [])

  return (
    <View style={styles.container}>
      <QRCode size={200} value={address} color={colors.black} backgroundColor={colors.primary} />
      <Text style={styles.address}>{address}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    flexDirection: 'row',
  },
  address: {
    width: '60%',
    textAlign: 'left',
    fontWeight: '500',
    paddingLeft: 32,
    fontSize: RFValue(50),
  },
})
export default QRScreen
