//imports de app
'use client'
import React from "react";
import { Button, useColorMode, IconButton, useColorModeValue, VStack, Box } from "@chakra-ui/react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {

const {colorMode,toggleColorMode}=useColorMode()
  return (
    <Box display='flex' justifyContent='flex-end'>
      <IconButton
        zIndex={30}
        position='absolute'
        aria-label="ModeChange"
        variant="ghost"
        colorScheme='black'
        icon={useColorModeValue(<BsMoon />, <BsSun />)}
        onClick={toggleColorMode}
      />
    </Box>
  );
}
