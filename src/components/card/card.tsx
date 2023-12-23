//Css
import classes from './card.module.css';

//Interfaces
type CardProps = {
  title: string;
};

//Function
export default function Card({ title }: CardProps) {
  return (
    <div className={classes.container_Card}>
      {/* <h2>Fazer café</h2> */}
      <h1>{title}</h1>

      <div className={classes.card_buttons}>
        <button>Completar</button>
        <button>Deletar</button>
      </div>
    </div>
  );
}
