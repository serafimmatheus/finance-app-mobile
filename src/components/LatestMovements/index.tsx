import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Card } from './Card'

const latestMovements = [
  {
    id: 1,
    title: 'Pagamento de luz',
    value: 100,
    date: '03/10/2024',
    type: 'expense',
  },
  {
    id: 2,
    title: 'Pagamento de água',
    value: 50,
    date: '03/10/2024',
    type: 'expense',
  },
  {
    id: 3,
    title: 'Salário',
    value: 5040,
    date: '02/10/2024',
    type: 'income',
  },
  {
    id: 4,
    title: 'Pagamento de internet',
    value: 100,
    date: '04/10/2024',
    type: 'expense',
  },
  {
    id: 5,
    title: 'Condôminio',
    value: 290,
    date: '10/10/2024',
    type: 'expense',
  },
  {
    id: 6,
    title: 'Pagamento de cartão',
    value: 1000,
    date: '10/10/2024',
    type: 'expense',
  },
  {
    id: 7,
    title: 'Bonificação Applause',
    value: 1200,
    date: '15/10/2024',
    type: 'income',
  },
  {
    id: 8,
    title: 'Ifood',
    value: 41.89,
    date: '17/10/2024',
    type: 'expense',
  },
]

export default function LatestMovements() {
  return (
    <FlatList
      style={styles.container}
      data={latestMovements.reverse()}
      keyExtractor={(item) => String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <Card item={item} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    marginStart: 16,
    marginEnd: 16,
    marginTop: 16,
  },
})
