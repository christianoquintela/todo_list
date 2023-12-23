//Libs
// import { useState } from 'react';

//Components
import Card from './components/card/card';

//Css
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container_App}>

      <div className={classes.add_todo}>
        <input placeholder='Fazer café' />
        <button>Adicionar</button>
        <Card title='fazer café' />
      </div>

    </div>
  );
}

export default App;
