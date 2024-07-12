//imports from app
import React, { useState } from "react";
import { useMotionValue, useTransform, motion } from "framer-motion";
//imports created
import ProjectCard from "../Info/ProjectCard";
import { background } from "@chakra-ui/react";

//https://framermotionexamples.com/example/animate-presence-stack-3d
export default function CardAnim(props) {

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
    initial: { scale: 0, y: 150, opacity: 0 },
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
        width: {sm:200,md:400},
        height: "70%",
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
        photo={props.data[props.index]?.image}
        text={props.data[props.index]?.description}
        link1={props.data[props.index]?.link1}
        link1Title={props.data[props.index]?.link1Title}
        link2={props.data[props.index]?.link2}
        link2Title={props.data[props.index]?.link2Title}
        
        style={{
          borderRadius: 30,
          scale,
        }}
      />
    </motion.div>
  );
}
