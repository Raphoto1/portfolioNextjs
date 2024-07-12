import React from "react";
import { Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    Image,
    ModalBody,
    ModalCloseButton, useDisclosure } from "@chakra-ui/react";

export default function ModalImg({imageUrl, title, isOpen, onOpen, onClose}) {
    
    //use usedisclosure on parent!!!!!
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={['full','xl']}>
              <ModalOverlay />
              <ModalContent>
                  <ModalHeader>{title }</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                  <Image src={imageUrl} borderRadius={"lg"}/>
                  </ModalBody>
              </ModalContent>
      </Modal>
    </>
  );
}
