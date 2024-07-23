import React, { useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";

export default function ModalContact({ isOpen, onOpen, onClose }) {
  const [mailInput, setMailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const isErrorMail = mailInput === "";
  const isErrorMessage = messageInput === "";
  const contactPath = 'https://shops.creativerafa.com/api/contact'
  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById("contactForm");
    let formData = new FormData(form);
    let response = await fetch(contactPath, {
      method: 'post',
      credentials: 'include',
      body:formData
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert('error contacting, please try again') 
        } else {
          alert('Successfully Contacted to CreativeRafa'); 
          
        }
    })
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={["full", "xl"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Let's Talk </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} id="contactForm">
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input type='text' name='name' placeholder='name' />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type='email' name='email' onChange={setMailInput} placeholder='awesome@email.com' />
                {isErrorMail ? <FormHelperText>Mail is required </FormHelperText> : null}
              </FormControl>
              <FormControl isRequired>
                <FormLabel>How can I help you</FormLabel>
                {isErrorMessage ? <FormHelperText>Message is required </FormHelperText> : null}
                <Textarea name='message' resize={"vertical"} size={"sm"} onChange={setMessageInput} placeholder="Let's talk!!" />
              </FormControl>
              <Box pt={"5"}>
                <Button type="submit" onClick={onClose}>Send</Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
