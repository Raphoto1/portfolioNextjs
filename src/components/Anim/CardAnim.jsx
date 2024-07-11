//imports from app
import React, { useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
//imports created
import ProjectCard from "../Info/ProjectCard";
import { background } from "@chakra-ui/react";

//https://framermotionexamples.com/example/animate-presence-stack-3d
export default function CardAnim(props) {
  //handle data
  const dataTest = [{ title: 'test1' }, { title: 'test2' }, { title: 'test3' }]

//handle animation
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], { clamp: false });

  const variantsFrontCard = {
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: (custom) => ({
      x: custom,
      opacity: 0,
      scale: 0.8,
      transition: { duratioin: 0.2 },
    }),
  };
  const variantsBackCard = {
    initial: { scale: 0, y: 105, opacity: 0 },
    animate: { scale: 0.75, y: 100, opacity: 0.5 },
  };

  function handleDragEnd(_, info) {
    if (info.offset.x < -100) {
      setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        width: {sm:800,md:1600},
        height: "100%",
        position: "absolute",
        x,
        rotate,
        cursor: "grab",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: 'center',
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      onDragEnd={handleDragEnd}
      variants={props.frontCard ? variantsFrontCard : variantsBackCard}
      initial='initial'
      animate='animate'
      exit={"exit"}
      custom={exitX}
      transition={props.frontCard ? { type: "spring", stiffness: 300, damping: 20 } : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }}>
      <ProjectCard
        title={props.data[props.index]?.title}
        style={{
          borderRadius: 30,
          scale,
        }}
      />
    </motion.div>
  );
}
