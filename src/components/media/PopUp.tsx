import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import { btn } from "../../data/propertyStyles";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  header?: React.ReactNode;
  body?: React.ReactNode;
}

const PopUp = ({ isOpen, onClose, header, body }: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="10px">
        <ModalHeader
          bg="#6cb30a"
          padding="5px"
          textAlign="center"
          color="white"
          borderTopRadius="10px"
        >
          {header}
        </ModalHeader>

        <ModalBody>{body}</ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            bgGradient={btn.bgGradient}
            border={btn.border}
            mr={3}
            onClick={onClose}
            _hover={{
              bgGradient: btn.hoverBgGradient,
            }}
            color="white"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PopUp;
