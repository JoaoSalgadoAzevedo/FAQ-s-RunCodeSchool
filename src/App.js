import { Routes, Route } from 'react-router-dom';
// import './App.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./styles/cenas.module.css";

// import TextField from "@mui/material/TextField";
// import List from "./Components/List"

// listaPerguntas.map(p => <div>{p}</div>)


//style={{backgroundImage: `url(${Background})`}}


function App() {
  const [pergunta, setPergunta] = useState("")
  const [listaPergunta, setLista] = useState([])
  function submitPergunta(){
    //l => listaPergunta no momemnto em que a funcao for chamada
    setLista((l) => ([...l, pergunta]));
  }
  return (
    // <div className="main">
    //   <h1>React Search</h1>
    //   <div className="search">
    //     <TextField
    //       id="outlined-basic"
    //       variant="outlined"
    //       fullWidth
    //       label="Search"
    //     />
    //   </div>
    //   <List />
    // </div>
    <div>
      
      
      
      <div className={styles.main}>

    
      <Routes>
        <Route path="/pesquisa" element={
          (<div className={styles.main2}>
            <input className="barraPesquisa" type="text" placeholder="Pesquisa..." />
            <Link to={"/novaPergunta"}>

              <button className="submeter">Submeter Nova Pergunta</button>
            </Link>
          </div>)} />

            <Route path="/novaPergunta" element={(
              <div className={styles.main2}>
                
                <input value={pergunta} onChange={(e) => setPergunta(e.target.value)} type="text" className="boxPerguntas" placeholder="submeta a sua pergunta"/>
                <Link to={"/"}>
                  
                <button onClick={() => submitPergunta()} className="submeter">Submeter</button>
                </Link>
                
              </div>
            )}>


            </Route>



        <Route path="/" element={(
          <Link to={"/pesquisa"}>
            <div>


            <button className={styles.duvidasMainPage}><img className={styles.imagem} src={require('./Img/duvidasButton.png')}></img></button>
            </div>
          </Link>)} />
      </Routes>
      
      </div>
   
       {/* <button onClick={() => console.log(listaPergunta)}>MOSTRA STATE</button> */}
    </div>
  );
}

export default App;

/*
<div>  <button className={styles.chatbotButton} onClick={() => console.log("Hello!")}>  <img src={require('../imagens/chatbot.png')}></img>  </button>  </div>
*/