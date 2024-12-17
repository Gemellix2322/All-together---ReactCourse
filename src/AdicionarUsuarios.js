import React, { useState } from "react";

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
    <form onSubmit={onSubmit}>
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