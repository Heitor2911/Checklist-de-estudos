import React, {Children, useEffect, useRef} from "react";

import "./dialog.style.css";
import { IconClose } from "../icons";

export function Dialog({ isOpen, onClose, children }) {
  // Criamos uma referência para o elemento dialog
  const dialogRef = useRef(null);

  useEffect(() => {
      if (isOpen) {
        openDialog()
      } else {
        closeDialog()
      }
  }, [isOpen])

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
      <dialog ref={dialogRef} className="dialog">
          <div className="btn-close-wrapper">
              <button 
                autofocus 
                onClick={onClose}
                className="btn-close"    
              >
                <IconClose/> 
              </button>
          </div>
          <div className="body">
            {children}
          </div>
      </dialog>
    </React.Fragment>
  );
}
