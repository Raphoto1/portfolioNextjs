//app imports
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, CircularProgress, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function SkillsList({ data }) {
  return (
    <>
      <Box display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"} w={"100%"}>
        {data.map((itm) => (
          <Box
            display={"flex"}
            w={['20%','33%']}
            key={uuidv4()}
            flexDir={"column"}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={"center"}
            alignSelf={"start"}
            pb={['2vh',"1vh"]}>
            <Box py={"2vw"} pt={['2vh',"4vh"]} pb={"4vh"} w={"33%"} h={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <CircularProgress size={['12vw',"6vw"]} value={itm.strenght} zIndex={2} position={"absolute"} />
              <Box as={motion.div} whileHover={{scale:1.5}} w={['8vw',"4vw"]} display={"flex"} position={"absolute"} justifyContent={"center"} zIndex={4}>
                <Image src={itm.image} objectFit={"fill"} alt={itm.name} />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"} maxW={"10vw"}>
              <h3 className='md:text-base text-xs font-extralight leading-none'>{itm.name}</h3>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
