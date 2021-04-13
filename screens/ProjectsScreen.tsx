import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, Alert } from 'react-native';
import ProjectItem from '../components/ProjectItem';
import { Text, View } from '../components/Themed';
import { useQuery, gql } from '@apollo/client';

const MY_PROJECTS = gql`
query myTaskLists {
  myTaskLists {
    id
    title
    createdAt
  }
}
`

export default function ProjectsScreen() {
  const [project, setProjects] = useState([]);

  const { data, error, loading } = useQuery(MY_PROJECTS)

  useEffect(() => {
    if (error) {
      Alert.alert('Error fetching projects', error.message);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      setProjects(data.myTaskLists);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        data={project}
        renderItem={({item}) => <ProjectItem project={item} />}
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
