import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import Toast from 'react-native-toast-message';

const App = () => {
  const windowHeight = Dimensions.get('window').height;
  const [todos, setTodos] = useState([]);
  const showToast = (title, message) => {
    Toast.show({
      type: 'success',
      text1: title,
      text2: message,
      position: 'bottom',
      bottomOffset: windowHeight * 0.12,
      visibilityTime: 2000,
    });
  };
  const onRemove = (id, title, message) => {
    setTodos(todos.filter(todo => todo.id !== id));
    showToast(title, message);
  };
  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
      // id 를 key 값으로 사용하기 위해서 만든건데, 원래는 random 이 아닌, 절대 중복되지 않는 값으로 줘야함.
    ]);
  };

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    // <Container>
    <Container style={styles.container}>
      <Text style={styles.appTitle}>Hello TodoList!</Text>
      <View style={styles.card}>
        <TodoInsert onAddTodo={addTodo} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      <Toast />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: '#3143e8';
`;

export default App;
