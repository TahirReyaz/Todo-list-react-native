import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

const Task = ( props ) => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>    
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#40E0D088',
        padding: 15,
        marginTop: 10
      }
});

export default Task;