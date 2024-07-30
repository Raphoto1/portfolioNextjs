"use client";
//imports from app
import React, { useState } from "react";
import { Box, Image, transition } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import { motion, useMotionValue } from "framer-motion";
import { MdArrowForwardIos } from "react-icons/md";
//imports created
import Face from "../Faces/Face";
import FaceYG from "../Faces/FaceYG";
import SkillsetDev from "../Info/SkillsetDev";
import TextAnimBold from "../TextAnim/TextAnimBold";
import TextAnimSubt from "../TextAnim/TextAnimSubt";
import ProjectsDev from "../Info/ProjectsDev";
import DragSign from "../Signs/DragSign";

export default function Dev() {
  //dragging setup
  const [slideIndex, setSlideIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);
  const dragBuffer = 10;
  const slidesNumber = 2;
  const onDragStart = () => {
    setDragging(true);
  };
  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();
    if (x <= -dragBuffer && slideIndex < slidesNumber) {
      setSlideIndex((pv) => pv + 1);
    } else if (x >= dragBuffer && slideIndex > 0) {
      setSlideIndex((pv) => pv - 1);
    }
  };

  //slide right accent

  return (
    <div>
      <div className='relative min-h-screen overflow-hidden'>
        <Box
          as={motion.div}
          className='flex cursor-grab items-center'
          style={{
            x: dragX,
          }}
          drag='x'
          dragConstraints={{ left: 0, right: 0 }}
          animate={{
            translateX: `-${slideIndex * 100}%`,
          }}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}>
          <Box minW={"100%"}>
            <DragSign />
            <Box justifyContent={"center"} display={"flex"} position={"absolute"} minW={"100vw"} zIndex={15} pt={10}>
              <TextAnimBold text={`I'm FullStack Dev`} />
            </Box>
            <Box
              justifyContent={"center"}
              display={"flex"}
              alignItems={"end"}
              position={"absolute"}
              textAlign={"center"}
              minW={"100vw"}
              minH={"100vh"}
              pb={10}
              zIndex={15}>
              <TextAnimSubt text={`Full Stack Dev Mern`} />
            </Box>
            <FaceYG glass={"item.color"} title={"item.title"} text={"item.text"} />
          </Box>
          <Box display={"flex"} w={"100%"} minW={"100%"} minHeight={"100vh"} height={"100%"} pl={0}>
            <Box justifyContent={"center"} display={"flex"} position={"absolute"} minW={"100vw"} zIndex={15}>
              <SkillsetDev />
            </Box>
          </Box>
          <Box display={"flex"} w={"100%"} minW={"100%"} minHeight={"100vh"} height={"100%"} pl={0}>
            <Box justifyContent={"center"} display={"flex"} minW={"100vw"} zIndex={15}>
              <ProjectsDev />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
