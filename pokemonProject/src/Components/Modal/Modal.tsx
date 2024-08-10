import { FC } from "react";
import { Modal } from "@mui/material";
import { useModal } from "../../Context/ModalContext";
import { ChildrenSxInterface } from "../../Layout/Types/ChildrenSxInterface";
const ModalComponent: FC<ChildrenSxInterface> = ({ children }) => {
  const { isOpen, closeModal } = useModal();

  return (
    <Modal open={isOpen} onClose={closeModal} closeAfterTransition={true}>
      <div> {children}</div>
    </Modal>
  );
};

export default ModalComponent;
