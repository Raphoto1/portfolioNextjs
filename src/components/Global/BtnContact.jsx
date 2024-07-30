import React, { useEffect, useState } from "react";
import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { GrContact } from "react-icons/gr";

import ModalContact from "./ModalContact";
export default function BtnContact() {
  const [responseBack, setResponseBack] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    onClose();
  }, [responseBack]);

  return (
    <>
      <Box position='fixed' bottom={['10px','20px']} left={["10px", "30px"]} zIndex={3}>
        <GrContact size={30} onClick={onOpen} />
        <ModalContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} responseBack={responseBack} setResponseBack={setResponseBack} />
      </Box>
    </>
  );
}
