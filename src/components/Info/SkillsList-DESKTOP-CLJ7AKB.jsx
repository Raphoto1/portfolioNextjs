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
          <Box
            p={"4vw"}
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
            p={2}
          >
            <Box display={'flex'} justifyContent={'center'} alignContent={'center'} alignItems={'center'}>
              <CircularProgress
                size={"10vw"}
                value={itm.strenght}
                zIndex={2}
              />
              <motion.div
              whileHover={{scale:1.5}}
              className="flex absolute justify-center md:w-20 sm:w-1"
                zIndex={1}
              >
                <Image
                  src={`${itm.image}`}
                  objectFit={"fill"}
                  alt={`${itm.name}`}
                />
              </motion.div>
            </Box>
            <Box
              zIndex={3}
              display={"flex"}
              backgroundColor={'black'}
              alignContent={'end'}
              alignItems={'end'}
            >
              <h3 className="text-xl font-medium">{itm.name}</h3>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
}
