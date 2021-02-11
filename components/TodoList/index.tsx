import React, { useState } from 'react'
import {
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Header from '../Header'
import { styles } from './styles'
import ItemList from '../ItemList'
import AddTodoForm from '../AddTodoForm'

export default function TodoList() {
  const { container, main, list } = styles
  interface Todo {
    text: string
    key: string
  }
  const [todos, setTodos] = useState<Todo[]>([{ text: 'husdhifas', key: '1' }])
  const handlePress = (key: string) => {
    console.log(key)
    setTodos(
      todos.filter((todo) => {
        return todo.key !== key
      })
    )
  }
  const addTodo = (text: string) => {
    if (text.trim() !== '') {
      setTodos([
        ...todos,
        {
          text: text,
          key: Math.floor(Math.random() * 100000000).toLocaleString(),
        },
      ])
    } else {
      Alert.alert('OOOPS', 'Empty todos not allowed', [
        { text: 'Understood', onPress: () => console.log('closed') },
      ])
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={container}>
        <Header />
        <View style={main}>
          <AddTodoForm addTodo={addTodo} />
          <View style={list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return (
                  <>
                    <ItemList
                      handlePress={handlePress}
                      text={item.text}
                      id={item.key}
                    />
                  </>
                )
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}
