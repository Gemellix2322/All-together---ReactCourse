

const Usuarios = ({ usuario, onDelete, onIncrementJogo}) => {
    return (
      <li>
        <div>
          <p><strong>Nome:</strong> {usuario.name}</p>
          <p><strong>Jogo:</strong> {usuario.jogo}</p>
          <button onClick={onDelete}>Deletar usuario</button>
          <button onClick={onIncrementJogo}>Incrementar Jogos</button>
        </div>
      </li>
    );
  };

export default Usuarios;