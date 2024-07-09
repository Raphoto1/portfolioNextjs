import React from "react";
import { Text, Box } from "@chakra-ui/react";

import WhiteGLines from "../Anim/WhiteGLines";
import TextAnimBold from "../TextAnim/TextAnimBold";
import TextAnimLong from "../TextAnim/TextAnimLong";
export default function Bio() {
  return (
    <>
      <Box
              padding={['2vw',"5vw"]}
              border='5px'
              alignContent={"center"}
              borderColor='gray'
              backgroundColor={"gray.500"}
              borderRadius={"xl"}
              margin={['1%',"10%"]}
              width={"fit-content"}>
              <WhiteGLines />
              <TextAnimBold text={"Bio"} minW={"100vw"} />
              <TextAnimLong
                text={`Professional Visual Artist far interested in cross-bounds between tech, creativity and marketing with Wide experience in creation, planning and
              execution of digital and interactive products for high scale projects in broadcast, live-shows, education and marketing (direction, execution,
              team leadership and budged projections). Developing new skills on web and software development. Commited to be envolved in great team work
              enviroment focused in goals. Open to relocate.`}
              />
            </Box>
    </>
  );
}
