import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

function Actions() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButtons}>
          <AntDesign name='addfolder' size={26} color='#000' />
        </View>
        <Text style={styles.labelButtons}>Entradas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButtons}>
          <AntDesign name='tagso' size={26} color='#000' />
        </View>
        <Text style={styles.labelButtons}>Compras</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButtons}>
          <AntDesign name='creditcard' size={26} color='#000' />
        </View>
        <Text style={styles.labelButtons}>Carteira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButtons}>
          <AntDesign name='barcode' size={26} color='#000' />
        </View>
        <Text style={styles.labelButtons}>Boletos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <View style={styles.areaButtons}>
          <AntDesign name='setting' size={26} color='#000' />
        </View>
        <Text style={styles.labelButtons}>Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 174,
    height: 174,
    marginEnd: 16,
    marginStart: 16,
    marginTop: 18,
    marginBottom: 14,
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 24,
  },
  areaButtons: {
    width: 56,
    height: 56,
    borderRadius: 100,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelButtons: {
    textAlign: 'center',
    fontWeight: 'semibold',
  },
})

export { Actions }
