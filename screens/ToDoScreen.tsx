import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import TodoItem from '../components/ToDoItem';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {



return (
  <View style={styles.container}>
    <Text style={styles.title}>Tab One</Text>
    <TodoItem />



  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
