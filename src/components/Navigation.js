import * as React from "react";
import NavigationListItems from "./NavigationListItems";
import { Avatar, Box, Link as ChakraLink, useColorModeValue, useMediaQuery, Wrap, WrapItem } from "@chakra-ui/react";
import smyPhoto2 from "../images/smyPhoto2.jpg";
import { Link } from "gatsby";
import MobileNavigation from "./MobileNavigation";
import SwitchColorMode from "./SwitchColorMode";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  console.log(isMobile);
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  return (
    <>
      <Box
        as="nav"
        mx="auto"
        display="flex"
        alignItems="center"
        sx={{
          "a:hover": {
            textDecoration: "none",
            color: "darkorange",
          },
        }}
        bg={bg}
        py={3}
        px={[4, 6, 10, 14, 20]}
        w="100%"
        position="fixed"
        zIndex="sticky"
        borderRadius="md"
        bgGradient="linear(to-r, cyan.400, blue.300, purple.500)"
        _hover={{
          bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
        }}
      >
        <Wrap>
          <WrapItem>
            <Avatar marginX="4" size="md" name="Sylvie Mémain-Yé" img src={smyPhoto2} alt="Sylvie Mémain-Yé" />
          </WrapItem>
        </Wrap>
        <ChakraLink as={Link} href="/" fontWeight="bold" fontSize={20} mr="auto">
          Sylvie Mémain-Yé
        </ChakraLink>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Box>
    </>
  );
};

export default Navigation;
