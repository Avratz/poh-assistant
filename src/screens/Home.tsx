import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  TextStyle,
} from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import * as ScreenOrientation from 'expo-screen-orientation'
import { useIsFocused } from '@react-navigation/native'

import Footer from '../components/Footer'
import Button from '../components/Button'

import t from '../i18n'
import { RootStackParamList } from '../types/navigation'
import { colors } from '../theme'
import useAddress from '../hooks/useAddress'

const HomeScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'HomeScreen'>) => {
  const isFocused = useIsFocused()
  const { address, error, onChangeAddress, handleGenerate, pasteAddress } = useAddress(navigation)

  React.useEffect(() => {
    if (isFocused) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT).then()
    }
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={200} style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.description}>{t('home.description')}</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            autoCompleteType='off'
            autoCorrect={false}
            clearButtonMode='always'
            placeholder={t('home.inputPlaceholder')}
          />
          {error ? <Text style={styles.error}>{t('error.' + [error])}</Text> : null}
          <Button onPress={pasteAddress} theme='secondary'>
            {t('home.buttonPaste')}
          </Button>
          <Button onPress={handleGenerate} disabled={address === '' || error !== ''}>
            {t('home.button')}
          </Button>
        </View>
      </KeyboardAvoidingView>
      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    borderColor: colors.grey[500],
    backgroundColor: colors.fakeWhite,
    borderWidth: 1,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 32,
    padding: 16,
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 36,
    paddingHorizontal: 16,
  },
  error: {
    color: colors.error,
    padding: 16,
  },
})

export default HomeScreen
