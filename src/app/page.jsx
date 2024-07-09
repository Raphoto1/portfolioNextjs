"use client";
//imports from app
import { Box, Image } from "@chakra-ui/react";

//imports Created
import ThemeToggle from "../components/Global/ThemeToggle";
import First from '../components/Screens/First'
import Dev from '../components/Screens/Dev'
import Second from '../components/Second'
import SkillsetDev from "../components/Info/SkillsetDev";

export default function Home() {

  return (
    <>
      <ThemeToggle />
      {/* <SkillsetDev/> */}
      <First />
      <Dev/>
    </>
  );
}
