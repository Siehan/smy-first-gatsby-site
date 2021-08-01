import * as React from "react";
import Icon from "@chakra-ui/icon";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Button, Container, Heading, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SlideFadeOnScroll from "../components/SlideFadeOnScroll";

const socialAccounts = [
  { Icon: FaLinkedin, path: "https://www.linkedin.com/in/sylvie-mémain-yé-9714501b9/", title: "Linkedin" },
  { Icon: FaGithub, path: "https://github.com/Siehan", title: "Github" },
  { Icon: FaTwitter, path: "https://twitter.com/memainye", title: "Twitter" },
  { Icon: FaFacebookF, path: "https://www.facebook.com/SylvieMemainYe/", title: "Facebook" },
  { Icon: FaInstagram, path: "https://www.instagram.com/memainye/?hl=fr", title: "Instagram" },
];

function SocialMediaPage() {
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
              SOCIAL MEDIA
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={20} overflow="hidden">
              <StaticImage src="../images/social_media3.jpg" alt="Social media" placeholder={"blurred"} />

              <Box pt={20} pb={15}>
                {socialAccounts.map((item, index) => (
                  <ChakraLink
                    href={item.path}
                    aria-label={item.title}
                    mx={6}
                    _focus={{ outline: "none" }}
                    key={index}
                    isExternal
                  >
                    <Button aria-label={item.title} bg="transparent" boxSize="55" m={50}>
                      <Icon as={item.Icon} boxSize="75" />
                    </Button>
                  </ChakraLink>
                ))}
              </Box>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default SocialMediaPage;
