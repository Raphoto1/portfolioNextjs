import React from "react";
import { motion } from "framer-motion";

export default function TextAnimBold({ text }) {

  const innerText = text.split(" ");

  return (
    <div>
      {innerText.map((el, i) => (
        <motion.span
          className='text-4xl md:text-6xl font-extrabold'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: i / 10 }}
          key={i}>
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}
