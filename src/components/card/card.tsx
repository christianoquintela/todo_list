//Css
import { Todo } from '../../App';
import './card.css';

//Interfaces / Types
type CardProps = {
  todo: Todo;
  completeTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

//Function
export default function Card({ todo, completeTodo, deleteTodo }: CardProps) {
  function handleCompleteTodo() {
    completeTodo(todo.id);
  }
  function handleDeleteTodo() {
    deleteTodo(todo.id);
  }

  return (
    //ao passar mais de uma classe em que precisa de if ternário é necessário usar template strings
    <div className={`container_Card  card ${todo.completed ? 'done' : ''}`}>
      {/* <h2>Fazer café</h2> */}
      <h1>{todo.title}</h1>

      <div className='card_buttons'>
        <button onClick={handleCompleteTodo}>
          {todo.completed ? 'Retomar' : 'Completar'}
        </button>
        <button onClick={handleDeleteTodo}>Deletar</button>
      </div>
    </div>
  );
}
