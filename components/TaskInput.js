import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const TaskInput = (props) => {
    const [newTask, setNewTask] = useState('');

    return (
        <Modal visible={props.mode} animationType="slide" >
            <View style={styles.addTaskContainer}>
                <TextInput 
                    placeholder="Add Task"
                    style={styles.addTaskInput}
                    onChangeText={text => setNewTask(text)}
                    value={newTask}
                />
                <View style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Button title="Add" onPress={() => {
                            props.onAddTask(newTask);
                            setNewTask('');
                        }} />
                    </View>
                    <View style={styles.button} >
                        <Button title="Cancel" color="grey" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    addTaskContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        padding: 50
    },
    addTaskInput: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});

export default TaskInput;
