import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
export default function MouseScrollSign() {
  return (
    <>
                 <Box
              className='mouseContainerr'
              display={"flex"}
              position={"absolute"}
              justifyContent={"start"}
              alignItems={"end"}
              w={"100vw"}
              minW={"1vw"}
              h={"100vh"}
              minH={"1vw"}
              pl={5}
              pb={5}
              zIndex={21}>
              <motion.div className='mouse' initial={{ opacity: 1 }} animate={{ opacity: 0 }} transition={{ delay: 8 }}></motion.div>
            </Box> 
    </>
  )
}
