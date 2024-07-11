import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CardAnim from "./CardAnim";

export default function CardAnimContainer({ dataIn, dataLenght }) {
  const [index, setIndex] = useState(0);

  if (dataLenght == index) {
    setIndex(0);
  }
  return (
    <motion.div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
      <AnimatePresence initial={false}>
        <CardAnim key={index + 1} frontCard={false} data={dataIn} />
        <CardAnim key={index} frontCard={true} index={index} setIndex={setIndex} drag='x' data={dataIn} />
      </AnimatePresence>
    </motion.div>
  );
}
