import React from "react";

import { Box, Card, CardBody, Image, Stack, Heading, Text, CardFooter, Button, ButtonGroup, Divider } from "@chakra-ui/react";

export default function ProjectCard({photo,title,text,link1,link2,link1Title, link2Title}) {
  return (
    <>
      <Card maxW={'lg'} minW={'xs'}>
        <CardBody>
          <Image src='/img/projects/arts/displate.png' borderRadius={"lg"}/>
          <Stack mt={6} spacing={3}>
            <Heading size={"xl"}>{title }</Heading>
            <Text noOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo, accusamus vel explicabo dicta quod at fugiat. Eligendi autem ipsa
              soluta numquam dolorem quia unde earum sint veritatis repudiandae? Incidunt.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup>
            <Button variant={"solid"} fontSize={['md',"2xl"]}>
              Link 1
            </Button>
            <Button variant={"solid"} fontSize={['md',"2xl"]}>
              Link2
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}
