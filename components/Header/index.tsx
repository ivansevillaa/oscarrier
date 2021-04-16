import { Button, useColorMode } from "@chakra-ui/react";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Button onClick={toggleColorMode}>
        Toggle
        {" "}
        {colorMode == "light" ? "Dark" : "Light"}
      </Button>
    </header>
  );
}
