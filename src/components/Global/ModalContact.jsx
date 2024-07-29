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
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

export default function ModalContact({ isOpen, onOpen, onClose }) {
  const [mailInput, setMailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [fetchError, setFetchError] = useState(false);
  const isErrorMail = mailInput === "";
  const isErrorMessage = messageInput === "";
  const contactPath = "https://shops.creativerafa.com/api/contact";

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = document.getElementById("contactForm");
    let formData = new FormData(form);
    try {
      await fetch(contactPath, {
        mode: "no-cors",
        credentials: "include",
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert("error contacting, please try again");
            onClose;
          } else {
            alert("Successfully Contacted to CreativeRafa");
            onClose;
          }
        });
    } catch (error) {
      onClose
      setFetchError(!fetchError);
    }
  };
  return (
    <>
      {fetchError?<Alert status='error'>
          <AlertIcon />
          <AlertTitle>Ups my bad</AlertTitle>
          <AlertDescription>Please try again later</AlertDescription>
        </Alert>:null}
      <Modal isOpen={isOpen} onClose={onClose} size={["full", "xl"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> Let's Talk </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit} id='contactForm'>
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
                <Button type='submit'>Send</Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
