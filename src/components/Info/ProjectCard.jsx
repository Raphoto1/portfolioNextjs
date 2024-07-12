import React from "react";
import { Box, Card, useDisclosure, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider, Link } from "@chakra-ui/react";

import ModalImg from "./../Global/ModalImg";

export default function ProjectCard({ photo, title, text, link1, link2, link1Title, link2Title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalImg imageUrl={photo} title={title} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <Card maxW={"lg"} minW={"xs"}>
        <CardBody>
          <Image src={photo} borderRadius={"lg"} onClick={onOpen}/>
          <Stack mt={6} spacing={3}>
            <Heading size={"xl"}>{title}</Heading>
            <Text noOfLines={3}>{text}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Link href={link1} target='blank'>
              <Button variant={"solid"} fontSize={["md", "xl"]}>
                {link1Title}
              </Button>
            </Link>
            <Link href={link2} target='blank'>
              <Button variant={"solid"} fontSize={["md", "xl"]}>
                {link2Title}
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
