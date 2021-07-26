import * as React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={10}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-l, #48BB78, #81E6D9)",
              }}
            >
              ABOUT
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <StaticImage
                src="../images/SylvieMemainYeComputer.jpg"
                alt="Sylvie and computer"
                placeholder="blurred"
                width={500}
                height={500}
              />

              <Box>
                <Heading textAlign="center" pt="5" fontWeight="bold" fontSize={40} textShadow="1px 3px orange">
                  <Text as="span" color="teal">
                    I am a Junior Web Developper
                  </Text>
                </Heading>
              </Box>
              <Text fontSize={25} mb={10} pt={5} textAlign="center">
                Who am I ? What can I do? 🧐
              </Text>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};
export default AboutPage;
