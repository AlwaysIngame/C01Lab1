import { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import uuidv4 from "uuid";
import AddTask from "./AddTask";

function ToDoList({ titles }) {

  const [toDos, setToDos] = useState(titles.map((value) => ({ id: uuidv4(), title: value })))

  function addToDo(newTitle) {
    setToDos((prevToDos) => [...prevToDos, { id: uuidv4(), title: newTitle }])
  }

  function removeToDo(id) {
    setToDos((prevToDos) => prevToDos.filter((item) => { return item.id != id }))
  }

  return (<View style={styles.todoListContainer}>
    {toDos.map((toDo) => (
      <View style={styles.todoItem} key={toDo.id}>
        <Text>{toDo.title}</Text>
        <Button title="Remove" onPress={() => removeToDo(toDo.id)} />
      </View>
    ))}
    <AddTask onAddTask={addToDo} />
  </View>)
}

ToDoList.defaultProps = {
  titles: [],
};

const styles = StyleSheet.create({
  todoListContainer: {
    margin: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ToDoList;
