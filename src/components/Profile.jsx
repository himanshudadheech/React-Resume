import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Icon from "@chakra-ui/icon";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";
import {
  FaWordpress,
  FaCode,
  FaDatabase,
  FaReact,
  FaGithub,
} from "react-icons/fa";
function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "column"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="14" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          Skills
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Technology
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Web and App Developers, specialised in mobile app development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="20vh"
            w="20vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={DiAndroid} w="14" h="14" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Android Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={DiCodeigniter} w="14" h="14" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Flutter Apps
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={DiWebplatform} p="4" w="14" h="14" color="black" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              Web Development
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={FaReact} w="14" h="14" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              React
            </Text>
          </Flex>
        </Flex>
        {/* 2 */}
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            bg="blue.400"
            h="20vh"
            w="20vh"
            justify="flex-end"
          >
            <Icon color="white" p="4" as={FaWordpress} w="14" h="14" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              Wordpress
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={FaCode} w="14" h="14" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              C++, Java
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "green.400" }}
          >
            <Icon as={FaDatabase} p="4" w="14" h="14" color="black" />
            <Text color="black" p="4" fontSize="l" fontWeight="semibold">
              MySql, Php,Firebase
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            bg="gray.100"
            h="20vh"
            w="20vh"
            justify="flex-end"
            _hover={{ bg: "teal.400" }}
          >
            <Icon color="black" p="4" as={FaGithub} w="14" h="14" />
            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
              Git/Github
            </Text>
          </Flex>
        </Flex>
        {/* 2 */}
      </Box>
    </Flex>
  );
}

export default Profile;
