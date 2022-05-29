import React, {useState, useRef} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import styled from 'styled-components/native';
import Toast from 'react-native-easy-toast';
import {Dimensions} from 'react-native';

const App = () => {
  const windowHeight = Dimensions.get('window').height;
  const [todos, setTodos] = useState([]);
  const toastRef = useRef();
  const onRemove = id => {
    toastRef.current.show('삭제 되었습니다.');
    setTodos(todos.filter(todo => todo.id !== id));
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
      <StyleToast
        ref={toastRef}
        positionValue={windowHeight * 0.25}
        // position={'bottom'}
        fadeInDuration={1000} // 들어오는 시간
        fadeOutDuration={2000} // 나가는 시간
        opacity={0.8}
        // textStyle={{color: 'black'}}
      />
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

const StyleToast = styled(Toast)`
  background-color: #a1b3f0;
`;

export default App;
