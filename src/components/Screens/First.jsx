"use client";
//imports from app
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
//imports created
import Face from "../Faces/Face";
import DragSign from "../Signs/DragSign";
import MouseScrollSign from "../Signs/MouseScrollSign";
import Bio from "../Info/Bio";
import TextAnimBold from "../TextAnim/TextAnimBold";
import TextAnimSubt from "../TextAnim/TextAnimSubt";
import SkillsetGeneral from "../Info/SkillsetGeneral";
import ProjectsGeneral from "../Info/ProjectsGeneral";

export default function First() {
  //dragging setup
  const [slideIndex, setSlideIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragX = useMotionValue(0);
  const dragBuffer = 10;
  const slidesNumber = 3;
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
            <MouseScrollSign />
            <Box justifyContent={"center"} display={"flex"} position={"absolute"} minW={"100vw"} zIndex={15} pt={5}>
              <TextAnimBold text={`Hi I'm Rafa`} />
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
              <TextAnimSubt text={`Visual Artist & Full Stack Dev from Colombia and more...`} />
            </Box>
            <Face glass={"item.color"} title={"item.title"} text={"item.text"} />
          </Box>
          <Box display={"flex"} w={'100%'} minW={"100%"} minHeight={"100vh"} height={'100%'} pl={0} alignItems={'center'}>
            <Box justifyContent={"center"} display={"flex"} position={"absolute"} minW={"100vw"} zIndex={15}>
              <Bio />
            </Box>
          </Box>
          <Box display={"flex"} w={"100%"} minW={"100%"} minHeight={"100vh"} height={"100%"} pl={0}>
            <Box >
              <SkillsetGeneral />
            </Box>
          </Box>
          <Box display={"flex"} minW={"100%"} minHeight={"100%"} pl={0} justifyContent={'center'}>
            <Box >
              <ProjectsGeneral />
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
}
