import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
interface ItemListProps {
  text: string
  id: string
  handlePress: (key: string) => void
}
const ItemList: React.FC<ItemListProps> = ({ text, id, handlePress }) => {
  const { item, itemText } = styles
  return (
    <TouchableOpacity onPress={() => handlePress(id)} style={item}>
      <Text style={itemText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ItemList
