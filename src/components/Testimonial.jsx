import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string,
  name: string,
  title: string,
}) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Recomandation() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Reference</Heading>
          <Text>Testimonials</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Excellent</TestimonialHeading>
              <TestimonialText>
                He is a great and hardworking guy. I am so proud of him.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/3uyYLwf"}
              name={"Rs Vyas"}
              title={"Director At TINJR"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Great Working Experience</TestimonialHeading>
              <TestimonialText>
                Good Working Experience with him.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://unrighteous-toes.000webhostapp.com/portfolio/vipulcv-master/vanija.jpeg"
              }
              name={"Vanija Joshi"}
              title={"CEO & Founder - Vayra Renewable Energy Solution"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Creative Design</TestimonialHeading>
              <TestimonialText>
                He is very good. I appreciate his work.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/3D0GGuP"}
              name={"Aaditya Maheshwari"}
              title={"Icube Lead/Google Mentor at TINJR"}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Wonderful work Service</TestimonialHeading>
              <TestimonialText>
                He is a great co-worker and a friend.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={"https://bit.ly/3N8YIzy"}
              name={"Akshat Bordia"}
              title={"Digital Marketing Head At The Mad"}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
