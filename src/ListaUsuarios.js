
import { useState } from "react";
import Usuarios from "./Usuarios";

const ListaUsuarios = ({ usuarios, handleDelete, handleIncrementJogo}) => {
    return (
      <div className="list-users">
        <ol className="usuarios-list">
          {usuarios.map((usuario, index) => (
            <Usuarios key={index} usuario={usuario} onDelete={() => handleDelete(index)} onIncrementJogo={() => handleIncrementJogo(index)}/>
          ))}
        </ol>
      </div>
    );
  };

export default ListaUsuarios;