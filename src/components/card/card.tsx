//Css
import { Todo } from '../../App';
import classes from './card.module.css';

//Interfaces
type CardProps = {
  todo: Todo;
  completeTodo: (id: number) => void;
};

//Function
export default function Card({ todo, completeTodo }: CardProps) {
  function handleCompleteTodo() {
    completeTodo(todo.id);
  }

  return (
    //defeito ao passar uma classe em css module com if ternário
    <div className={`${classes.container_Card} ${classes.done}`}>
      {/* <h2>Fazer café</h2> */}
      <h1>{todo.title}</h1>

      <div className={classes.card_buttons}>
        <button onClick={handleCompleteTodo}>Completar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
}
