import React from "react";
import { Box, Card, useDisclosure, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider, Link, Tooltip } from "@chakra-ui/react";

import ModalImg from "./../Global/ModalImg";

export default function ProjectCard({ photo, title, text, link1, link2, link1Title, link2Title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <ModalImg imageUrl={photo} title={title} isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
      <Card maxW={"lg"} minW={"xs"}>
        <CardBody>
          <Tooltip label={'Check Image'}>
            <Box maxH={[300,400]} overflow={'hidden'}>
              <Image src={photo} borderRadius={"lg"} objectFit={'contain'} onClick={onOpen}/>
            </Box>
          </Tooltip>
          <Stack mt={6} spacing={3}>
            <Heading size={"xl"}>{title}</Heading>
            <Text noOfLines={3}>{text}</Text>
          </Stack>
        </CardBody>
        <Divider />
        {link1Title!=='null'?<CardFooter justify={'center'}>
          <ButtonGroup>
            <Link href={link1} target='blank'>
              <Button variant={"solid"} fontSize={["md", "xl"]}>
                {link1Title}
              </Button>
            </Link>
        {link2Title!=='null'?<Link href={link2} target='blank'>
              <Button variant={"solid"} fontSize={["md", "xl"]}>
                {link2Title}
              </Button>
            </Link>:null}
          </ButtonGroup>
        </CardFooter>:null}
      </Card>
    </>
  );
}
