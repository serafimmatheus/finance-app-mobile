import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native'

import { Feather } from '@expo/vector-icons'

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.userName}>Matheus Serafim</Text>

        <TouchableOpacity activeOpacity={0.6}>
          <Feather name='user' size={27} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    paddingTop: statusBarHeight,
    paddingBottom: 44,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 12,
  },
  userName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
})

export { Header }
