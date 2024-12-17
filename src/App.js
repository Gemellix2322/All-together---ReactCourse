import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ListaUsuarios from "./ListaUsuarios";

const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const handleUsuarios = (usuarios) => {
    setUsuarios([...usuarios, usuarios]);
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <AdicionarUsuarios/>
        <h2>Usuários</h2>
        <ListaUsuarios/>
      </div>
    </div>
  );
};

export default App;
