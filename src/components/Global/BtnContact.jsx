import React from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { GrContact } from "react-icons/gr";

import ModalContact from "./ModalContact";
export default function BtnContact() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Box position='fixed' bottom='20px' left={["10px", "50px"]} zIndex={3}>
        <GrContact size={40} onClick={onOpen} />
        <ModalContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Box>
    </>
  );
}
