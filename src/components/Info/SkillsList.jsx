import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, CircularProgress, Image } from "@chakra-ui/react";
export default function SkillsList({ data }) {
  return (
    <>
      <Box display={"flex"} pb={5} justifyContent={"center"} flexWrap={"wrap"} w={"fit-content"}>
        {data.map((itm) => (
          <Box maxW={'20vw'} p={'4vw'} key={uuidv4()} display={'flex'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
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
