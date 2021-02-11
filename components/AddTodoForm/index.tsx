import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles'
interface AddTodoFormProps {
  addTodo: (text: string) => void
}
const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const { input } = styles
  const [text, setText] = useState('')
  const handleChange = (newText: string) => {
    setText(newText)
  }
  return (
    <View>
      <TextInput
        style={input}
        placeholder='new todo..'
        placeholderTextColor='rgba(0,0,0,0.2)'
        onChangeText={(text: string) => {
          handleChange(text)
        }}
      />
      <Button title='Add Todo' onPress={() => addTodo(text)} />
    </View>
  )
}

export default AddTodoForm
