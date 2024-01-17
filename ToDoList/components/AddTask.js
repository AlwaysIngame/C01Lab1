import { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function AddTask( {onAddTask} ) {
  const [title, setTitle] = useState("")

  function handleAddTask() {
    onAddTask(title)
    setTitle("")
  }

  return (
    <View style={styles.addTodoForm}>
      <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
      <Button onPress={handleAddTask} title="Add Task"></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;
