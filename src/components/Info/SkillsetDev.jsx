import { Box } from "@chakra-ui/react";
import React from "react";

import TextAnimBold from "../TextAnim/TextAnimBold";
import TextAnimSubt from "../TextAnim/TextAnimSubt";
import SkillsList from "./SkillsList";
export default function SkillsetDev() {
  const frontEnd = [
    { name: "TEch", strenght: 20, image: "img/icons/soft/html-5.png" },
    { name: "TEch2", strenght: 30, image: "img/icons/soft/html-5.png" },
    { name: "TEch3", strenght: 90, image: "img/icons/soft/html-5.png" },
    { name: "TEch3", strenght: 40, image: "img/icons/soft/html-5.png" },
  ];

  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          w={"100vw"}
          justifyContent={"center"}
          justifyItems={"center"}
          justifySelf={"center"}
          pb={10}
        >
          <TextAnimBold text={`Skillset`} />
        </Box>
        <Box
          display={"flex"}
          w={"100vw"}
          flexFlow={"wrap"}
          justifyContent={"space-evenly"}
        >
          <Box backgroundColor={"blue"} className="md:w-1/3 text-center">
            <TextAnimSubt text={"Front End"} />
            <SkillsList data={frontEnd} />
          </Box>
          <Box backgroundColor={"green"} className="md:w-1/3 text-center">
            <TextAnimSubt text={"Back End"} />
            <SkillsList data={frontEnd} />
          </Box>
          <Box backgroundColor={"red"} className="md:w-1/3 text-center">
            <TextAnimSubt text={"General"} />
            <SkillsList data={frontEnd} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
