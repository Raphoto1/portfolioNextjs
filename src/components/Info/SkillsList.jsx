//app imports
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, CircularProgress, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function SkillsList({ data }) {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        w={"fit-content"}
      >
        {data.map((itm) => (
          <Box p={"4vw"}
          w={'33%'}
          h={'100%'}
          key={uuidv4()}
          display={"flex"}
          flexDir={'column'}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={'black'}
          borderColor={'white'}
          borderWidth={5}
          >
            <CircularProgress size={'10vw'} value={itm.strenght} zIndex={2} position={'absolute'}/>
            <Box w={'5vw'} display={'flex'} position={"absolute"} justifyContent={'center'} zIndex={1}>
              <Image src='\img\icons\soft\html-5.png' objectFit={"fill"} alt="Rafa's" />
            </Box>
            <Box zIndex={3} display={'flex'} justifyContent={'end'} justifyItems={'end'} justifySelf={'end'}>
                <h3 className='text-xl font-medium'>{itm.name}</h3>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
