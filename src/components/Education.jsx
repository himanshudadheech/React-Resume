import {
  Box,
  
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const options1 = [
  { id: 1, desc: "Bachelor of Technology (BTech)" },
  { id: 2, desc: "CSE" },
];
interface PackageTierProps {
  title: string;
  options: Array<{ id: number, desc: string }>;
  typePlan: string;
  checked?: boolean;
}
const PackageTier = ({
  title,
  options,
  typePlan,
  checked = false,
}: PackageTierProps) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-start",
        md: "space-around",
      }}
      direction={{
        base: "row",
        md: "column",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"lg"}>{title}</Heading>{" "}
      <Heading size={"l"}>{typePlan}</Heading>
      <List spacing={3} textAlign="start">
        {options.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
// 2

const options2 = [
  { id: 1, desc: "Higher Secondary Education" },
  { id: 2, desc: "PCM" },
];
interface PackageTierProps2 {
  title2: string;
  options2: Array<{ id: number, desc: string }>;
  typePlan2: string;
  checked?: boolean;
}

// 2
const PackageTier2 = ({
  title2,
  options2,
  typePlan2,
  checked = false,
}: PackageTierProps2) => {
  const colorTextLight = checked ? "white" : "purple.600";
  const bgColorLight = checked ? "purple.400" : "gray.300";

  const colorTextDark = checked ? "white" : "purple.500";
  const bgColorDark = checked ? "purple.400" : "gray.300";

  return (
    <Stack
      p={3}
      py={3}
      justifyContent={{
        base: "flex-centre",
        md: "space-around",
      }}
      direction={{
        base: "row",
        md: "column",
      }}
      alignItems={{ md: "center" }}
    >
      <Heading size={"lg"}>{title2}</Heading>{" "}
      <Heading size={"l"}>{typePlan2}</Heading>
      <List spacing={3} textAlign="start">
        {options2.map((desc, id) => (
          <ListItem key={desc.id}>
            <ListIcon as={FaCheckCircle} color="green.500" />
            {desc.desc}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

// final
const Education = () => {
  return (
    <Box py={6} px={5} min={"100vh"}>
      <Stack spacing={4} width={"100%"} direction={"column"}>
        <Stack
          p={5}
          alignItems={"center"}
          justifyContent={{
            base: "flex-centre",
            md: "space-around",
          }}
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <Heading size={"lg"}>
            Education <Text color="purple.400">Academic Qualification</Text>
          </Heading>
        </Stack>
        <Divider />
        <PackageTier
          title={"Techno India NJR Institute Of Technology"}
          typePlan="2019-2023"
          options={options1}
        />
        <Divider />
        <PackageTier2
          title2={"Board Of Secondary Education Rajasthan"}
          typePlan2="2017-2019"
          options2={options2}
        />
      </Stack>
    </Box>
  );
};

export default Education;
