import React, {useRef} from "react";

import "./dialog.style.css";

export function Dialog() {
  // Criamos uma referência para o elemento dialog
  const dialogRef = useRef(null);

  // Função para abrir a modal
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  // Função para fechar a modal
  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <React.Fragment>
      <dialog ref={dialogRef}>
        <input placeholder="Digite o item que deseja adicionar"></input>
        
        <br />
        
        <button type="submit" autoFocus onClick={closeDialog}>Salvar item</button>
      </dialog>
      <button onClick={openDialog}>Show the dialog</button>
    </React.Fragment>
  );
}
