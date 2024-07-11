"use client";
//imports from app
import { Box, Image } from "@chakra-ui/react";

//imports Created
import ThemeToggle from "../components/Global/ThemeToggle";
import First from '../components/Screens/First'
import Dev from '../components/Screens/Dev'

//test
import ProjectsGeneral from "../components/Info/ProjectsGeneral";

export default function Home() {

  return (
    <>
      <ThemeToggle />
      {/* <ProjectsGeneral/> */}
      <First />
      <Dev/>
    </>
  );
}
