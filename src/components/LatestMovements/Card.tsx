import { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

type CardProps = {
  item: {
    id: number
    title: string
    value: number
    date: string
    type: string
  }
}

function Card({ item }: CardProps) {
  const [showValue, setShowValue] = useState(false)

  const handleShowValue = () => {
    setShowValue((prevState) => !prevState)
  }

  return (
    <TouchableOpacity onPress={handleShowValue} style={styles.container}>
      <Text style={styles.date}>{item.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{item.title}</Text>
        {showValue ? (
          <Text
            style={item.type === 'expense' ? styles.expense : styles.income}
          >
            {item.type === 'expense'
              ? `- ${item.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`
              : `${item.value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}`}
          </Text>
        ) : (
          <View style={styles.skeleton} />
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#dadada',
    paddingBottom: 8,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    paddingTop: 8,
  },
  date: {
    fontSize: 14,
    color: '#dadada',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  expense: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#e74c3c',
  },
  income: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: '#2ecc71',
  },
  skeleton: {
    width: 100,
    height: 20,
    backgroundColor: '#dadada',
    borderRadius: 6,
  },
})

export { Card }
