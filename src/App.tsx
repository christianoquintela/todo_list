//Libs
import { ChangeEvent, useState, useEffect } from 'react';

//Components
import Card from './components/card/card';

//Css
import classes from './App.module.css';

export type Todo = {
  id: number;
  title?: string;
  completed?: boolean;
};

function App() {
  //useState
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const storedTodos = localStorage.getItem('@codersList:todos');

    if(storedTodos){
      return JSON.parse(storedTodos);
    }
    return [];
  });

  //useEffect
  useEffect(()=> {
localStorage.setItem('@codersList:todos', JSON.stringify(todos))
  },[todos])

  function addTodo() {
    //handlers
    setTodos((previousTodos) => [
      ...todos,
      { id: Math.random(), title: todoInput, completed: false },
    ]);
    setTodoInput('');
  }
  function completeTodo(id: number) {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function deleteTodo(id: number) {
    setTodos((previousTodos) => previousTodos.filter((todo) => todo.id !== id));
  }

  //return
  return (
    <div className={classes.container_App}>
      <div className={classes.add_todo}>
        <input
          placeholder='Fazer, faça, prática, praticar, praticou!'
          value={todoInput}
          onChange={handleInputChange}
        />
        <button onClick={addTodo}>Adicionar</button>
        {todos.map((todo) => (
          <Card
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
