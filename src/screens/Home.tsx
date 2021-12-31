import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Platform } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import Footer from '../components/Footer'

import t from '../i18n'
import { RootStackParamList } from '../types/navigation'
import theme from '../theme'


const HomeScreen = ({ navigation }: StackScreenProps<RootStackParamList, 'HomeScreen'>) => {
  const [address, setAddres] = React.useState('')

  const onChangeAddress = (address: string) => {
    setAddres(address)
  }

  const handleGenerate = () => {
    if(address === '') return
    navigation.navigate('QRScreen', { address })
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
      style={styles.container}
    >
      <View style={styles.main}>
        <Text style={styles.description}>{t('home.description')}</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
          placeholder={t('home.inputPlaceholder')}
        />
        <TouchableOpacity style={styles.button} onPress={handleGenerate}>
          <Text style={styles.buttonTxt}>{t('home.button')}</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 85,
  },
  input: {
    width: '90%',
    borderColor: theme.colors.grey[500],
    backgroundColor: theme.colors.fakeWhite,
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
  button: {
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 32,
    backgroundColor: theme.colors.primary,
    width: '90%',
  },
  buttonTxt: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
})

export default HomeScreen
