import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Box, Button, Center, Container, Heading, Text } from "@chakra-ui/react";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

// markup
const NotFoundPage = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10} bgGradient="linear(to-l, gray.200, gray.400, gray.200)">
        >
        <Container borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={10}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-r, red, orange, red )"
              _hover={{
                bgGradient: "linear(to-l, orange, yellow)",
              }}
            >
              PAGE NOT FOUND
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" pt={20} pb={20} overflow="hidden">
              <Box pb={10}>
                <StaticImage
                  src="../images/404-page-not-found.png"
                  alt="Page not found"
                  placeholder={"blurred"}
                  width={600}
                  height={700}
                  borderRadius="md"
                  boxShadow="md"
                />
              </Box>
              <Center>
                <Text fontSize={25} mb={10} textAlign="center">
                  Oops{" "}
                  <span role="img" aria-label="Pensive emoji">
                    😔
                  </span>{" "}
                  we couldn’t find what you were looking for.
                  <br />
                  {process.env.NODE_ENV === "development" ? <></> : null}
                  <br />
                  <Button colorScheme="red" size="lg">
                    <Link to="/">Back Home</Link>
                  </Button>
                </Text>
              </Center>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default NotFoundPage;
