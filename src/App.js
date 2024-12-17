import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import ListaUsuarios from "./ListaUsuarios";
import AdicionarUsuarios from "./AdicionarUsuarios";

const App = () => {
  const [usuarios, setUsuarios] = useState([])

  const handleAddUsuario = (novoUsuario) => {
    const nomeJaExiste = usuarios.some(
      (usuario) => usuario.name.toLowerCase() === novoUsuario.name.toLowerCase()
    );

    if (nomeJaExiste) {
      alert("Este nome já foi adicionado! Tente outro.");
    } else {
      setUsuarios([...usuarios, novoUsuario]); // Adiciona o usuário
    }
  };

  const handleOcultarJogo = (indexToOcultar) => {
    const novaListaUsuarios = usuarios.map((usuario, index) =>
      index === indexToOcultar
        ? { ...usuario, jogo: 0 } // Define "jogo" como 0
        : usuario
    );
    setUsuarios(novaListaUsuarios);
  };


  const handleDelete = (indexToDelete) => {
    const novaLista = usuarios.filter((_, index) => index !== indexToDelete);
    setUsuarios(novaLista);
  }

  const handleIncrementJogo = (indexToIncrement) => {
    const novaListaUsuarios = usuarios.map((usuario, index) => 
      index === indexToIncrement 
        ? {...usuario, jogo: usuario.jogo + 1} 
        : usuario
    );
    setUsuarios(novaListaUsuarios);
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <AdicionarUsuarios onAddUsuario={handleAddUsuario}/>
        <h2>Usuários</h2>
        <ListaUsuarios usuarios={usuarios} handleDelete={handleDelete} handleIncrementJogo={handleIncrementJogo} handleOcultarJogo={handleOcultarJogo}/>
      </div>
    </div>
  );
};

export default App;
