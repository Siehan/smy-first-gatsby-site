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
      <Box w={"100%"} py={10} bgGradient="linear(to-l, gray.400, gray.300, gray.400)" style={{ display: "grid" }}>
        {/* You can use a GatsbyImage component if the image is dynamic */}
        <StaticImage
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt=""
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          //src="../images/IMG_5845.jpeg"
          formats={["auto", "webp", "avif"]}
        />

        {/* Any content here will be centered in the component */}

        <Container
          as="header"
          maxW="container.xl"
          py={20}
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            //placeItems: "center",
            display: "grid",
          }}
        >
          <SlideFadeOnScroll>
            <Heading as="h1" fontSize={["3xl", "4xl"]} pb={30} p={10}>
              <Text
                fontSize={40}
                pb={5}
                bgGradient="linear(to-l, #3CAADD, #4FAA1B)"
                _hover={{
                  bgGradient: "linear(to-r, cyan.500, blue.600, purple.600)",
                }}
                bgClip="text"
              >
                Hi, I'm
              </Text>
              <Text
                fontSize={60}
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
            <Box
              pt={28}
              pb={5}
              //boxShadow="lg"
              d="flex"
              maxW={"100%"}
              alignItems="center"
              flexDir="column"
              textAlign="center"
              py={4}
            >
              <StaticImage
                imgStyle={{ borderRadius: "100%" }}
                alignSelf="center"
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
