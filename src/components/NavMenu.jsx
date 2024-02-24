import { Box, Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FaSmile, FaBars } from "react-icons/fa";
import { useState } from "react";

const NavMenu = () => {
  const [emojis, setEmojis] = useState(["😀", "🎉", "❤️", "🙏"]);

  return (
    <Flex justify="space-between" align="center" p="4" bg="pink.50" borderBottomWidth="2px" borderColor="pink.100">
      <Menu>
        <MenuButton as={IconButton} icon={<FaBars />} variant="outline" colorScheme="pink" />
        <MenuList>
          {emojis.map((emoji, index) => (
            <MenuItem key={index} minH="48px">
              {emoji}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Box>
        <Button leftIcon={<FaSmile />} colorScheme="pink" onClick={() => setEmojis([...emojis, "😊"])}>
          Add Emoji
        </Button>
      </Box>
    </Flex>
  );
};

export default NavMenu;
