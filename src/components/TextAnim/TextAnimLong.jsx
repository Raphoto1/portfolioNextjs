import React from "react";
import { motion } from "framer-motion";
export default function TextAnimLong({ text }) {
  const innerText = text.split(" ");
  return (
    <div>
      {innerText.map((el, i) => (
        <motion.span
          viewport={{ once: true, amount: 0.8 }}
          whileInView={"onScreen"}
          className='font-extralight sm:text-sm md:text-xl justify-center text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, delay: i / 10 }}
          key={i}>
          {el}{" "}
        </motion.span>
      ))}
    </div>
  );
}
