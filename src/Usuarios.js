import "./App.css";

const Usuarios = ({ usuario, onDelete, onIncrementJogo, handleOcultarJogo}) => {
    return (
      <li className="usuarios-item">
          <p><strong>{usuario.name}</strong> jogou <strong>{usuario.jogo}</strong> jogos</p>
          <button onClick={onDelete}>Deletar usuario</button>
          <button onClick={onIncrementJogo}>Incrementar Jogos</button>
          <button onClick={handleOcultarJogo}>Ocultar Jogos</button>
      </li>
    );
  };

export default Usuarios;