//impoorts from app
import React from "react";
import { Box, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
//imports created

import CardAnimContainer from "../Anim/CardAnimContainer";
import TextAnimBold from "../TextAnim/TextAnimBold";
import { projectsGeneralList, projectsDevList, projectsVfxList, projectsArtsList } from "../../data/projects";

export default function ProjectsVfx() {
  const [isLargerThan400] = useMediaQuery("(min-width:400px)");

  return (
    <>
      <Box display={"flex"} w={"100vw"} justifyContent={"center"} justifyItems={"center"} justifySelf={"center"} position={"absolute"} pt={[0, "1vh"]}>
        <TextAnimBold text={`Projects Vfx`} />
      </Box>
      <Box display={"flex"} justifyContent={"center"} maxW={"100vw"} minH={"100vh"} alignContent={"center"}>
        <Box display={"flex"} width={"100vw"} height={"100%"} justifyContent={"space-around"} alignSelf={"center"} flexWrap={"wrap"}>
          <Box>
            <CardAnimContainer dataIn={projectsVfxList} dataLenght={projectsVfxList.length} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
