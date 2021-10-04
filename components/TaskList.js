import React from 'react'
import { View, FlatList } from 'react-native'
import Task from './Task'

const TaskList = ( props ) => {

    return (
        <View>
            <FlatList
                keyExtractor = {(item, index) => item.id}
                data = {props.tasks}
                renderItem = { taskData => <Task id={taskData.item.id} title={taskData.item.value} onDelete={(id) => props.onDelete(id)} />}
            />
      </View>
    );
}

export default TaskList;