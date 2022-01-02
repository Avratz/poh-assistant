import { ImageBackground, StyleSheet, View } from 'react-native'
import bgImg from '../../assets/bg.png'

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    zIndex: -1,
  },
  image: {
    flex: 1,
  },
})

const Footer = () => {
  return (
    <View style={styles.footer}>
      <ImageBackground source={bgImg} resizeMode="cover" style={styles.image} />
    </View>
  )
}

export default Footer
