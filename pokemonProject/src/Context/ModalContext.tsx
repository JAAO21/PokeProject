import React, { createContext, useContext, useState, FC } from "react";
import { ChildrenSxInterface } from "../Layout/Types/ChildrenSxInterface";
import { useOpen } from "../Hook/UseOpen";
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType>({
  isOpen: true,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider: FC<ChildrenSxInterface> = ({ children }) => {
  const { isOpen, setIsOpen } = useOpen();

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
