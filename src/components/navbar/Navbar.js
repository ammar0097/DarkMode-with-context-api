import React, { useContext } from "react";
import { Flex, Button } from "@chakra-ui/react";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../contexts/themeContext";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode",!darkMode);
  };
  return (
    <Flex>
      <Flex position="fixed" top="1rem" right="1rem" align="center">
        {/* Desktop */}
        <Flex>
          <Button onClick={handleClick} variant="Link" >
            {darkMode ? (
              <MdOutlineLightMode style={{ color: "#2c7a7b" }} size={40} />
            ) : (
              <MdOutlineDarkMode  style={{ color: "#2c7a7b" }} size={40} />
            )}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
