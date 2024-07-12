"use client";
//imports from app
import { Box, Image } from "@chakra-ui/react";

//imports Created
import ThemeToggle from "../components/Global/ThemeToggle";
import First from '../components/Screens/First'
import Dev from '../components/Screens/Dev'
import Creative from '../components/Screens/Creative'
import Vfx from '../components/Screens/Vfx'
//test
import ProjectsGeneral from "../components/Info/ProjectsGeneral";
//https://medium.com/@ojogbomichael/same-page-navigation-with-nextjs-bb99cccfda11
export default function Home() {

  return (
    <>
      <ThemeToggle />
      {/* <ProjectsGeneral/> */}
      <First />
      <Dev />
      <Creative />
      <Vfx/>
    </>
  );
}
