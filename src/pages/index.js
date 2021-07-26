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
      <Box w={"100%"} py={10}>
        <Container as="header" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading as="h1" fontSize={["3xl", "4xl"]} pb={30} pt={10}>
              <Text
                fontSize={40}
                pb={5}
                bgGradient="linear(to-l, yellow,orange)"
                _hover={{
                  bgGradient: "linear(to-l, cyan.500, blue.500, purple.600)",
                }}
                bgClip="text"
              >
                Hi, I'm
              </Text>
              <Text
                fontSize={60}
                fontWeight="bold"
                bgGradient="linear(to-r , cyan.500, blue.600, purple.600)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
                bgClip="text"
              >
                Sylvie Mémain-Yé
              </Text>
            </Heading>

            <Box pt={28} pb={5} d="flex" maxW={"100%"} alignItems="center" flexDir="column" textAlign="center" py={4}>
              <StaticImage
                alignSelf="center"
                borderRadius="full"
                boxShadow="lg"
                src="../images/smyPhoto2.jpg"
                alt="Smy Photo2"
                placeholder="blurred"
                width={500}
                height={500}
              />
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
