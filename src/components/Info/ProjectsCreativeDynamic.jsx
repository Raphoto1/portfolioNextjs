//impoorts from app
import React, { useState, useEffect } from "react";
import { Box, SimpleGrid, useMediaQuery, Spinner } from "@chakra-ui/react";
//imports created

import CardAnimContainer from "../Anim/CardAnimContainer";
import TextAnimBold from "../TextAnim/TextAnimBold";
import { projectsGeneralList, projectsDevList, projectsVfxList, projectsArtsList } from "../../data/projects";

export default function ProjectsCreative() {
  const [isLargerThan400] = useMediaQuery("(min-width:400px)");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/designs?sortField=likes&sortQ=-1&limit=10")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const payload = data.payload || data;
        const designsArray = payload.docs || [];
        
        if (!designsArray || designsArray.length === 0) {
          setProjects(projectsArtsList);
          setLoading(false);
          return;
        }
        
        const transformedProjects = designsArray.map((design) => ({
          title: design.title || design.name || "Untitled",
          description: design.description || design.desc || "",
          image: design.photo || design.img || design.thumbnail || "",
          link1: "https://shops.creativerafa.com/",
          link1Title: "Shops",
          link2: `https://shops.creativerafa.com/shops/${design._id || design.id}`,
          link2Title: "Design",
        }));
        
        setProjects(transformedProjects);
        setLoading(false);
      })
      .catch((error) => {
        setProjects(projectsArtsList);
        setLoading(false);
      });
  }, []);
  
  return (
    <>
      <Box display={"flex"} w={"100vw"} justifyContent={"center"} justifyItems={"center"} justifySelf={"center"} position={"absolute"} pt={[0, "1vh"]}>
        <TextAnimBold text={`Projects Visual Arts`} />
      </Box>
      <Box display={"flex"} justifyContent={"center"} maxW={"100vw"} minH={"100vh"} alignContent={"center"}>
        <Box display={"flex"} width={"100vw"} height={"100%"} justifyContent={"space-around"} alignSelf={"center"} flexWrap={"wrap"}>
          <Box>
            {loading ? (
              <Spinner size="xl" color="blue.500" />
            ) : (
              <CardAnimContainer dataIn={projects} dataLenght={projects.length} />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
