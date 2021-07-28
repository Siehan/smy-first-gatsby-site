import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";

const Feature = ({ icon, title, text }) => {
  const color = useColorModeValue("gray.600", "teal.50");
  return (
    <Box>
      <Image borderRadius="xl" boxSize="80px" src={icon} mb={4} />
      <Heading fontSize="xl" mb={4}>
        {title}
      </Heading>
      <Text color={color}>{text}</Text>
    </Box>
  );
};

export default Feature;
