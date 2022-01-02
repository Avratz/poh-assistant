import React from 'react'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../types/navigation'
import * as Clipboard from 'expo-clipboard';
import isValidAddress from '../utils/validateAddress';

const useAddress = (navigation: StackNavigationProp<RootStackParamList>) => {
  const [address, setAddress] = React.useState('')
  const [error, setError] = React.useState('')

  const prevAddress = React.useRef('')

  const onChangeAddress = (address: string) => {
    if(address !== '') prevAddress.current = address
    setAddress(address)
  }

  const handleGenerate = () => {
    if (address === '') return
    navigation.navigate('QRScreen', { address })
  }

  const pasteAddress = async () => {
    try{
      const value = await Clipboard.getStringAsync()
      if (!value) return
      onChangeAddress(value)
    } catch (e) {
    }
  }

  React.useEffect(() => {
    setError('')
    if(address === '') {
      if(prevAddress.current !== '') setError('empty')
      return	
    }
    
    const validAddress = isValidAddress(address)
    if (!validAddress) setError('invalid')
  }, [address])

  return {address, error, onChangeAddress, handleGenerate, pasteAddress}
}

export default useAddress
