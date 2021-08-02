import * as React from "react";
import { List, ListItem } from "@chakra-ui/react";
import { Link } from "gatsby";

const NavigationListItems = ({ sx }) => {
  return (
    <List
      sx={{
        textTransform: "uppercase",
        a: { fontSize: "20px", p: 2, display: "inline-block" },
        ...sx,
      }}
    >
      <ListItem>
        <Link to="/">Home</Link>
      </ListItem>
      <ListItem>
        <Link to="/about">About</Link>
      </ListItem>
      <ListItem>
        <Link to="/infos">Infos</Link>
      </ListItem>
      <ListItem>
        <Link to="/experience">Experience</Link>
      </ListItem>
      <ListItem>
        <Link to="/portfolio">Portfolio</Link>
      </ListItem>
      <ListItem>
        <Link to="/social-media">Social Media</Link>
      </ListItem>
      <ListItem>
        <Link to="/contact">Contact</Link>
      </ListItem>
      <ListItem>
        <Link to="/404">404</Link>
      </ListItem>
    </List>
  );
};

export default NavigationListItems;
