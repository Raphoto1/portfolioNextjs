import { Box } from "@chakra-ui/react";
import React from "react";

import TextAnimBold from "../TextAnim/TextAnimBold";
import TextAnimSubt from "../TextAnim/TextAnimSubt";
import SkillsList from "./SkillsList";
import {skillsDev,skillsCreative,skillsGeneral} from '../../data/skillset'
export default function SkillsetGeneral() {
  const frontEnd = [
    { name: "Html", strenght: 20, image: "img/icons/soft/html-5.png" },
    { name: "React Native", strenght: 30, image: "img/icons/soft/html-5.png" },
    { name: "nextjs", strenght: 90, image: "img/icons/soft/html-5.png" },
    { name: "next", strenght: 40, image: "img/icons/soft/html-5.png" },
    { name: "github", strenght: 40, image: "img/icons/soft/html-5.png" },
    { name: "Html", strenght: 20, image: "img/icons/soft/html-5.png" },
    { name: "React Native", strenght: 30, image: "img/icons/soft/html-5.png" },
    { name: "nextjs", strenght: 90, image: "img/icons/soft/html-5.png" },
    { name: "next", strenght: 40, image: "img/icons/soft/html-5.png" },
    { name: "github", strenght: 40, image: "img/icons/soft/html-5.png" },
  ];

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} w={'100%'}>
        <Box display={"flex"} w={"100vw"} justifyContent={"center"} justifyItems={"center"} justifySelf={"center"} pb={'2vh'}>
          <TextAnimBold text={`General Skillset`} />
        </Box>
        <Box display={"flex"} w={"90%"} flexFlow={"wrap"} alignContent={'center'} alignItems={'center'} alignSelf={'center'} h={'85vh'} maxH={'100%'} justifyContent={'space-evenly'} gap={1} >
          <Box backgroundColor={'lightslategray'} w={{md:'30%'}} className='md:w-1/4 w-full text-center justify-center rounded-md'>
            <Box pb={'1vh'}>
              <TextAnimSubt text={"Dev"}/>
            </Box>
            <SkillsList data={skillsDev} />
          </Box>
          <Box backgroundColor={'lightslategray'} w={{md:'30%'}} className='md:w-1/4 w-full text-center rounded-md'>
            <Box pb={'1vh'}>
              <TextAnimSubt text={"Creative"} />
            </Box>
            <SkillsList data={skillsCreative} />
          </Box>
          <Box backgroundColor={'lightslategray'} w={{md:'30%'}} className='md:w-1/4 w-full text-center rounded-md'>
            <Box pb={'1vh'}>
              <TextAnimSubt text={"General"} />
            </Box>
            <SkillsList data={skillsGeneral} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
