import React from "react";
import { motion } from "framer-motion";

export default function TextAnimSubt({ text }) {
  const innerText = text.split(" ");
  return (
    <div>
      {innerText.map((el, i) => (
        <motion.span
          className='text-xl font-extralight justify-center text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: i / 10 }}
          key={i}>
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}
