"use client";
import React, { useRef } from "react";
import { Box, Image, Stack, HStack } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";

export default function Face({ glass, title, text }) {
  const { ref } = useRef(null);
  const faceVariants = {
    offscreen: {
      y: -400,
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      width: "10vw",
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 },
    },
  };

  return (
    <>
      <Box>
        <Box
          as={motion.div}
          height={"100vh"}
          width={"100vw"}
          display={"flex"}
          justifyContent={"center"}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.9 }}>
          <Box as={motion.div} position={"absolute"} justifyContent={'center'} display={"flex"} minW={'100Vw'} alignSelf={'center'} maxH={'99vh'} zIndex={20} variants={faceVariants}>
            <Image src='/img/personal/colorGlass-01-01.webp' objectFit={"contain"} alt='glasses in multicolor' />
          </Box>
          <Box as={motion.div} position={"absolute"} display={'flex'} justifyContent={'center'} minW={'100vw'} alignSelf={'center'} maxH={'99vh'}>
            <Image src='/img/personal/selfportait-01-01.webp' objectFit={"contain"} alt="Rafa's portrait vectorial style with hat fragmented" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
