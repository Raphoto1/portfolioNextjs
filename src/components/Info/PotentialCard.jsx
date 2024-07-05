import React from "react";
import { Card, CardBody, Image, Stack, Heading } from "@chakra-ui/react";

export default function PotentialCard() {
  return (
    <>
      <Card maxWidth={"sm"}>
        <CardBody>
          <Image />

          <Stack>
            <Heading>Potential</Heading>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}
