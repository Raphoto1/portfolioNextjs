import React from "react";
import { IconButton, Menu, MenuButton, MenuList, MenuItem, Link, Box } from "@chakra-ui/react";
import { TiSocialAtCircular } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
export default function SocialLinks() {
  return (
    <>
      <Box display={'flex'} position={'absolute'} zIndex={15}>
        <Menu>
          <MenuButton as={IconButton} aria-label='Social Media Links' icon={<TiSocialAtCircular size={"md"}/>} variant={'outline'}/>
          <MenuList>
            <MenuItem as={Link} icon={<FiGithub />} href="https://github.com/Raphoto1" isExternal>Github</MenuItem>
            <MenuItem as={Link} icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/rafael-mart%C3%ADnez-0a579b63/" isExternal>LinkedIn</MenuItem>
            <MenuItem as={Link} icon={<FaInstagram />} href="https://www.instagram.com/creativerafaco/" isExternal>Instagram</MenuItem>
            <MenuItem as={Link} icon={<FaBehance />} href="https://www.instagram.com/creativerafaco/" isExternal>Behance</MenuItem>
            <MenuItem as={Link} icon={<TiSocialFacebook />} href="https://www.facebook.com/CreativeRafaCo" isExternal>Facebook</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}
