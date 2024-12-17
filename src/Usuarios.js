

const Usuarios = ({ usuario, onDelete, onIncrementJogo, handleOcultarJogo}) => {
    return (
      <li>
          <p>{usuario.name} jogou {usuario.jogo} jogos</p>
          <button onClick={onDelete}>Deletar usuario</button>
          <button onClick={onIncrementJogo}>Incrementar Jogos</button>
          <button onClick={handleOcultarJogo}>Ocultar Jogos</button>
      </li>
    );
  };

export default Usuarios;