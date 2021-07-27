import * as React from "react";
import alyra_logo from "../images/alyra_logo.png";
import ironHack from "../images/ironHack.png";
import francs10_logo from "../images/francs10_logo.png";
import calendar1 from "../images/calendar1.jpg";
import calendar3 from "../images/calendar3.png";
import calendar4 from "../images/calendar4.png";
import Feature from "./Feature";
import { Box, Button, Center, Container, SimpleGrid, Text } from "@chakra-ui/react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Features = () => {
  const features = [
    {
      icon: alyra_logo,
      title: "2021",
      text: "A development school at the heart of the blockchain",
    },
    {
      icon: ironHack,
      title: "2020",
      text: "An Immersive Web Development school",
    },
    {
      icon: francs10_logo,
      title: "2019-1997",
      text: "Television programs distribution company",
    },
    {
      icon: calendar1,
      title: "1997",
      text: "Association of families of disabled children",
    },
    {
      icon: calendar3,
      title: "1997-1993",
      text: "Various trips abroad (USA, JAPAN, AFRICA)",
    },
    {
      icon: calendar4,
      title: "1992-1991",
      text: "DPAM - (Du Pareil au Même) French children's fashion company",
    },
  ];
  return (
    <Box as="section" w={"100%"}>
      <Container borderRadius="md" maxW="container.xl" p={20} pb={10} boxShadow="xl">
        <SlideFadeOnScroll>
          <SimpleGrid columns={[1, null, 3]} gap="8">
            {features.map((el, index) => {
              return <Feature key={index} {...el}></Feature>;
            })}
          </SimpleGrid>
          <Box>
            <Text fontSize="xl" mb={10} pt={7} textAlign="center">
              Please, feel free to download my Curriculum vitae for more informations :
            </Text>
            <Center>
              <Button colorScheme="teal" size="lg">
                Download CV
              </Button>
            </Center>
          </Box>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Features;
