import React, { useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import ProjectItem from '../components/ProjectItem';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {



  const [project, setProject] = useState([{
    id: '1',
    title: 'Project 1',
    createdAt: '20',
  },
  {
    id: '2',
    title: 'Project 2',
    createdAt: '20',
  },
  {
    id: '3',
    title: 'Project 3',
    createdAt: '20',

  }]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <FlatList
        data={project}
        renderItem={({ item }) =>
          <ProjectItem project={item} />}

        style={{ width: '100%' }}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
