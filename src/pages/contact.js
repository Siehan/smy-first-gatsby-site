import * as React from "react";
import { Box, Button, Center, Container, Heading, Text, useDisclosure } from "@chakra-ui/react";
import Form from "../components/Form";
import { StaticImage } from "gatsby-plugin-image";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

const ContactPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Navigation />
      <Box w={"100%"} py={10} bgGradient="linear(to-l, gray.400, gray.300, gray.400)">
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
              CONTACT
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <StaticImage
                src="../images/icon_contact.png"
                alt="icon contact"
                imgStyle={{ borderRadius: "1%" }}
                placeholder={"blurred"}
                width={500}
                height={500}
              />
              <Box>
                <Text fontSize={25} mb={10} textAlign="center">
                  If you wish to send me a message, click on below to complete the form :
                </Text>
                <Center>
                  <Button colorScheme="blue" size="lg" onClick={onOpen}>
                    Submit
                  </Button>
                </Center>
              </Box>
            </Box>
            <Form isOpen={isOpen} onClose={onClose} />
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default ContactPage;
