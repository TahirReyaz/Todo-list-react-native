import { requireNativeViewManager } from '@unimodules/react-native-adapter';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const addTaskHandler = newTask => {
    if(newTask.length === 0) {
      return;
    }
    setTasks( currentTasks => [...currentTasks, {
      id: Math.random().toString(),
      value: newTask
    }]);
    setIsAddMode(false);
  }
  const deleteHandler = taskId => setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId))
  const cancelAdditionHandler = () => setIsAddMode(false);

  return (
    <View style={styles.screen}>
      <View style={styles.heading}>
        <Text style={{fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline'}}>TODO LIST</Text>
      </View>
      <Button title="+" onPress={() => setIsAddMode(true)} />
      <TaskInput onAddTask={addTaskHandler} mode={isAddMode} onCancel={cancelAdditionHandler} />
      <TaskList tasks={tasks} onDelete={deleteHandler} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    justifyContent: 'center'
  },
  heading: {
    alignItems: 'center',
    margin: 20
  }
});
