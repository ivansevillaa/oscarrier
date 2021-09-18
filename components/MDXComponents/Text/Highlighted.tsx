import {Text, useColorModeValue} from "@chakra-ui/react";

interface Props {
  text: string;
}

function Highlighted({text}: Props): JSX.Element {
  const bg = useColorModeValue("gray.200", "gray.700");

  return (
    <Text as="code" background={bg} color="teal.500" px={1} py={0.5}>
      {text}
    </Text>
  );
}

export default Highlighted;
