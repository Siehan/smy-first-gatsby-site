import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, List, ListItem, ListIcon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Features from "../components/Features";

import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

const ExperiencePage = () => {
  const list = ["2021", "2020", "2019-1997", "1997", "1997-1993", "1992-1991"];
  const color = useColorModeValue("orange");

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
              EXPERIENCE
            </Heading>

            <Text fontSize={25} pt={5} textAlign="center">
              I summarized some of my jobs, but for the last one, I spent 23 years in the same company.
            </Text>

            <Text fontSize={25} textAlign="center" pb={10}>
              Time has flown!
            </Text>

            <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <StaticImage
                src="../images/code_review_bro_gray.png"
                alt="Code review"
                placeholder={"blurred"}
                width={500}
                height={600}
              />

              <Stack
                direction={["column", null, "row"]}
                sx={{
                  gap: "2rem",
                }}
                alignItems="center"
              >
                <Box flex="1">
                  <Heading mb={6} textAlign="center" fontSize={40} textShadow="1px 3px orange">
                    <Text as="span" color="teal">
                      Experiences
                    </Text>
                  </Heading>

                  <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                    {list.map((el, index) => {
                      return (
                        <ListItem key={index}>
                          <ListIcon as={CheckCircleIcon} color={color} />
                          {el}
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </Stack>
            </Box>
            <Features />
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ExperiencePage;
