import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export default function TodoList() {
  const { header } = styles
  return (
    <View>
      <Text style={header}>My Todos</Text>
    </View>
  )
}
