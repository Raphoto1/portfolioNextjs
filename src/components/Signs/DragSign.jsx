import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { MdArrowForwardIos } from "react-icons/md";

export default function DragSign() {
  return (
    <>
      <Box
              display={"flex"}
              position={"absolute"}
              justifyContent={"end"}
              alignItems={"center"}
              w={"100vw"}
              minW={"1vw"}
              h={"100vh"}
              minH={"1vw"}
              zIndex={21}
              pr={{ sm: 0, md: 5 }}
              >
              <motion.div initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 8 }}>
                <motion.div className="flex" animate={{ x: 15 }} transition={{repeat:3, duration:3, repeatType:'mirror'}}>
                  {/* <Box as="p" pr={-20} position={'absolute'}>drag here...</Box> */}
                  <MdArrowForwardIos size={60} />
                </motion.div>
              </motion.div>
            </Box>
    </>
  )
}
