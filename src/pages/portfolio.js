import * as React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

const PortfolioPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10} bgGradient="linear(to-l, gray.400, gray.300, gray.400)">
        <Container borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={5}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-l, #48BB78, #81E6D9)",
              }}
            >
              PORTFOLIO
            </Heading>

            <Text fontSize={28} mb={5} textAlign="center">
              I love photography !
            </Text>

            <Box
              align="center"
              borderRadius="md"
              boxShadow="xl"
              p={10}
              pb={20}
              overflow="hidden"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-l, #48BB78, #81E6D9)",
              }}
            >
              <Box p={5}>
                <StaticImage
                  ml={"3"}
                  src="../images/francine.jpg"
                  alt="francine"
                  placeholder="blurred"
                  width={550}
                  height={700}
                />
              </Box>
              <Box p={5}>
                <StaticImage
                  src="../images/anabelle.jpg"
                  alt="anabelle"
                  placeholder="blurred"
                  width={550}
                  height={700}
                />
              </Box>
              <Box p={5}>
                <StaticImage
                  src="../images/anabelle2.jpg"
                  alt="anabelle2"
                  placeholder="blurred"
                  width={550}
                  height={700}
                />
              </Box>
              <Box p={5}>
                <StaticImage src="../images/yoanne.jpg" alt="Yoanne" placeholder="blurred" width={550} height={700} />
              </Box>
              <Box p={5}>
                <StaticImage
                  src="../images/francine2.jpg"
                  alt="Francine2"
                  placeholder="blurred"
                  width={550}
                  height={700}
                />
              </Box>
              <Box p={5}>
                <StaticImage
                  src="../images/francine3.jpg"
                  alt="Francine3"
                  placeholder="blurred"
                  width={550}
                  height={700}
                />
              </Box>
              <Box p={5}>
                <StaticImage
                  src="../images/francine4.jpg"
                  alt="Francine4"
                  placeholder="blurred"
                  width={550}
                  height={700}
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

export default PortfolioPage;
