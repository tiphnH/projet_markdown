import React, { useState } from 'react';
import {marked} from 'marked';
import './App.css';

function App() {
  //state
  const [text, setText] = useState('Mon texte par défaut');
  
  //function
  const changeTextHandler = event => {
    setText(event.target.value)
  };
  /* I get back the value of my textarea with event.target.value, event = évènement, value = champ, value = valeur*/
  const markdownToHTML = () => {
    return {__html: marked(text)};
  }

  return (
    <div className="App">
      <div className='title'>
        <h1>Prévisualisateur</h1>
      </div>
      <div className='elements'>
        <div className='element'>
          <textarea
            rows='30'
            value= {text}
            onChange={(e) => changeTextHandler(e)}> 
          </textarea>
        </div>
        <div className='element'>         
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>
      </div>     
    </div>
  );
}

export default App;

/* handler is a standard
rows='30" is for having 30 line*/