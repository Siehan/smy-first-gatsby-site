import { Box, Heading, Text, Image } from "@chakra-ui/react";
import * as React from "react";

const Feature = ({ icon, title, text }) => {
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
