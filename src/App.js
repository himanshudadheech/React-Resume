import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";
import Recomandation from "./components/Testimonial";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Projects from "./components/Projects";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <VStack p={5}>
        <Flex w="100%">
          <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">
            i'm himanshu
          </Heading>

          <Spacer></Spacer>
          <Link href="https://www.linkedin.com/in/himanshudadheech/" isExternal>
            {" "}
            <IconButton icon={<FaLinkedin />} isRound="true">
              {" "}
            </IconButton>
          </Link>
          <Link href="https://www.instagram.com/himanshu_dadheech_/" isExternal>
            {" "}
            <IconButton
              ml={2}
              icon={<FaInstagram />}
              isRound="true"
            ></IconButton>
          </Link>
          <Link href="https://github.com/himanshudadheech" isExternal>
            <IconButton ml={2} icon={<FaGithub />} isRound="true"></IconButton>{" "}
          </Link>
          <IconButton
            ml={8}
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            onClick={toggleColorMode}
          ></IconButton>
        </Flex>
        <Header></Header>
        <Social></Social>
        <Profile></Profile>

        <Education></Education>
        <Projects></Projects>
        <Recomandation></Recomandation>
        <Contact></Contact>
      </VStack>
    </>
  );
}

export default App;
