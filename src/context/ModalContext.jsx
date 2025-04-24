import { createContext, useState } from "react";

export const modalContext = createContext(null)

export const ModalContextProvider = ({children})=>{
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <modalContext.Provider value={{modalOpen, setModalOpen}}>
          {children}
        </modalContext.Provider>
    )
}