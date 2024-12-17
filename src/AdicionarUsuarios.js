import React, { useState } from "react";

const AdicionarUsuarios = ({ onAddUsuario }) => {
  const [name, setName] = useState("");
  const [jogo, setJogo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação: "jogo" deve ser um número
    if (name && !isNaN(jogo)) {
      const novoUsuario = { name, jogo: Number(jogo) }; // Converte para número
      onAddUsuario(novoUsuario); // Adiciona o usuário
      setName(""); // Limpa o campo "name"
      setJogo(""); // Limpa o campo "jogo"
    } else {
      alert("Por favor, digite um nome válido e um número para o jogo.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Adicionar Usuário</button>
    </form>
  );
};

export default AdicionarUsuarios;