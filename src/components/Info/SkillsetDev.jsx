import { Box } from "@chakra-ui/react";
import React from "react";

import TextAnimBold from "../TextAnim/TextAnimBold";
import TextAnimSubt from "../TextAnim/TextAnimSubt";
import SkillsList from "./SkillsList";
import {skillsDevFront, skillsDevBack,skillsDevGeneral} from '../../data/skillset'
export default function SkillsetDev() {

  return (
    <>
      <Box display={"flex"} flexDirection={"column"} w={'100%'}>
        <Box display={"flex"} w={"100vw"} justifyContent={"center"} justifyItems={"center"} justifySelf={"center"} pb={'2vh'}>
          <TextAnimBold text={`Skillset Dev`} />
        </Box>
        <Box display={"flex"} w={"90%"} flexFlow={"wrap"} alignContent={'center'} alignItems={'center'} alignSelf={'center'} h={'85vh'} maxH={'100%'} justifyContent={'space-evenly'} gap={1} >
          <Box backgroundColor={'lightslategray'} w={{md:'30%'}} className='md:w-1/4 w-full text-center justify-center rounded-md'>
            <Box pb={'1vh'}>
              <TextAnimSubt text={"Front End"}/>
            </Box>
            <SkillsList data={skillsDevFront} />
          </Box>
          <Box backgroundColor={'lightslategray'} w={{md:'30%'}} className='md:w-1/4 w-full text-center rounded-md'>
            <Box pb={'1vh'}>
              <TextAnimSubt text={"Back End"} />
            </Box>
            <SkillsList data={skillsDevBack} />
          </Box>
          <Box backgroundColor={'lightslategray'} w={{md:'30%'}} className='md:w-1/4 w-full text-center rounded-md'>
            <Box pb={'1vh'}>
              <TextAnimSubt text={"General"} />
            </Box>
            <SkillsList data={skillsDevGeneral} />
          </Box>
        </Box>
      </Box>
    </>
  );
}
