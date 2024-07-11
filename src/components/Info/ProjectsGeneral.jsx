//impoorts from app
import React from "react";
import { Box, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
//imports created
import ProjectCard from "./ProjectCard";
import CardAnimContainer from "../Anim/CardAnimContainer";

export default function ProjectsGeneral() {
  const dataTest = [{ title: "test1" }, { title: "test2" }, { title: "test3" }];
  const [isLargerThan400] = useMediaQuery("(min-width:400px)");

  return (
    <>
      <Box display={"flex"} justifyContent={"center"} maxW={"100vw"} minH={"100vh"} alignContent={"center"}>
        <Box display={"flex"} width={"100vw"} height={"100%"} justifyContent={'space-around'} alignSelf={"center"} flexWrap={"wrap"}>
          {isLargerThan400 ? (
            <>
              <Box>
                <CardAnimContainer dataIn={dataTest} dataLenght={dataTest.length} />
              </Box>
              <Box>
                <CardAnimContainer dataIn={dataTest} dataLenght={dataTest.length} />
              </Box>
              <Box>
                <CardAnimContainer dataIn={dataTest} dataLenght={dataTest.length} />
              </Box>
            </>
          ) : (
            <Box>
              <CardAnimContainer dataIn={dataTest} dataLenght={dataTest.length} />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}
