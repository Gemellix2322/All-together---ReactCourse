import React, { useState } from "react";
import "./App.css";

const AdicionarUsuarios = ({ onAddUsuario }) => {
  const [name, setName] = useState("");
  const [jogo, setJogo] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    onAddUsuario({name, jogo});
    setName("");
    setJogo(0);
  }

  const inputempty = () => name === "";

  return (
    <form onSubmit={onSubmit} className="usuario-form">
      <h2>Digite os Usuários</h2>
      <input
        type="text"
        placeholder="Nome do usuário"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Número do jogo"
        value={jogo}
        onChange={(e) => setJogo(e.target.value)}
      />
      <button disabled={inputempty()} type="submit">Adicionar Usuário</button>
    </form>
  );
};

export default AdicionarUsuarios;