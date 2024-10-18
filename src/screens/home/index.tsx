import { SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native'
import { Header } from '../../components/Header'
import { Balence } from '../../components/balence'
import LatestMovements from '../../components/LatestMovements'
import { Actions } from '../../components/Actions'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <Balence />

      <Actions />

      <Text style={styles.title}>últimas movimentações</Text>
      <LatestMovements />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginStart: 16,
    marginEnd: 16,
    marginTop: 16,
  },
})
