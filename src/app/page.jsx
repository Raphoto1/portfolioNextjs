"use client";
//imports from app
import { Box, Image } from "@chakra-ui/react";

//imports Created
import ThemeToggle from "../components/Global/ThemeToggle";
import BtnContact from "../components/Global/BtnContact";
import SocialLinks from "../components/Global/SocialLinks";
import First from "../components/Screens/First";
import Dev from "../components/Screens/Dev";
import Creative from "../components/Screens/Creative";
import Vfx from "../components/Screens/Vfx";
//test
import ProjectsGeneral from "../components/Info/ProjectsGeneral";
//sp navigatioin
//https://medium.com/@ojogbomichael/same-page-navigation-with-nextjs-bb99cccfda11

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <BtnContact />
      <SocialLinks />
      {/* <ProjectsGeneral/> */}
      <First />
      <Dev />
      <Creative />
      <Vfx />
    </>
  );
}
