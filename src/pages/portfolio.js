import * as React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";
import Footer from "../components/Footer";

const PortfolioPage = () => {
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
              PORTFOLIO
            </Heading>
            <Text fontSize={25} mb={10} pt={5} textAlign="center">
              I love photography !
            </Text>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <Box pb={10}>
                <StaticImage src="../images/francine.jpg" borderRadius="md" alt="francine" placeholder="blurred" />
              </Box>

              <Box pb={10}>
                <StaticImage src="../images/anabelle.jpg" borderRadius="md" alt="anabelle" placeholder="blurred" />
              </Box>

              <Box pb={10}>
                <StaticImage src="../images/anabelle2.jpg" borderRadius="md" alt="anabelle2" placeholder="blurred" />
              </Box>

              <Box pb={10}>
                <StaticImage src="../images/yoanne.jpg" borderRadius="md" alt="Yoanne" placeholder="blurred" />
              </Box>

              <Box pb={10}>
                <StaticImage src="../images/francine2.jpg" borderRadius="md" alt="Francine2" placeholder="blurred" />
              </Box>

              <Box pb={10}>
                <StaticImage src="../images/francine3.jpg" borderRadius="md" alt="Francine3" placeholder="blurred" />
              </Box>

              <Box pb={10}>
                <StaticImage src="../images/francine4.jpg" borderRadius="md" alt="Francine4" placeholder="blurred" />
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
