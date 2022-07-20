import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
function Social() {
  return (
    <HStack spacing="24">
      <Link href="https://www.linkedin.com/in/himanshudadheech/" isExternal>
        <Icon as={FaLinkedin} boxSize="50" />
      </Link>
      <Link href="https://github.com/himanshudadheech" isExternal>
        <Icon as={FaGithub} boxSize="50" />
      </Link>
      <Link href="https://www.instagram.com/himanshu_dadheech_/" isExternal>
        <Icon as={FaInstagram} boxSize="50" />
      </Link>
    </HStack>
  );
}

export default Social;
