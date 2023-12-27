//Libs
import { ChangeEvent, useState } from 'react';

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
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    setTodos((previousTodos) => [
      ...todos,
      { id: Math.random(), title: todoInput, completed: false },
    ]);
    setTodoInput('');
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTodoInput(e.target.value);
  }

  function completeTodo(id: number) {
    setTodos((previousTodos) => previousTodos.map((todo) => todo.id !== id ? todo : {...todo, completed: !todo.completed}));
    
  }

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
          <Card key={todo.id} todo={todo} completeTodo={completeTodo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
