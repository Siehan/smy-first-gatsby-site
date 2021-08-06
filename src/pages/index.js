import * as React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={20} bgGradient="linear(to-l, gray.100, gray.300, gray.100)">
        <Container borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading as="h1" fontSize={["3xl", "4xl"]} py={10} p={10}>
              <Text
                fontSize={40}
                pb={10}
                bgGradient="linear(to-l, #3CAADD, #4FAA1B)"
                _hover={{
                  bgGradient: "linear(to-r, cyan.500, blue.600, purple.600)",
                }}
                bgClip="text"
              >
                Hi, I'm
              </Text>
              <Text
                fontSize={50}
                fontWeight="bold"
                bgGradient="linear(to-r, cyan.500, blue.600, purple.600)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
                bgClip="text"
              >
                Sylvie Mémain-Yé
              </Text>
            </Heading>
            <Box align="center" borderRadius="md" boxShadow="xl" mb={20} pb={20} overflow="hidden">
              <Box pb={10}>
                <StaticImage
                  imgStyle={{ borderRadius: "100%" }}
                  src="../images/smyPhoto2.jpg"
                  alt="Smy Photo2"
                  placeholder="blurred"
                  width={400}
                  height={400}
                />
              </Box>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
