import { View, Text, StyleSheet } from 'react-native'

function Balence() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.itemTitle}>Saldo</Text>
        <Text style={styles.balence}>R$ 1.400,00</Text>
      </View>

      <View>
        <Text style={styles.itemTitle}>Gastos</Text>
        <Text style={styles.expenses}>- R$ 532,23</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginEnd: 16,
    marginStart: 16,
    marginTop: -28,
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
  },
  itemTitle: {
    fontSize: 20,
    color: '#dadada',
  },
  balence: {
    fontSize: 22,
    color: '#2ecc71',
  },

  expenses: {
    fontSize: 22,
    color: '#e74c3c',
  },
})

export { Balence }
