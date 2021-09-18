import {ChakraProps} from "@chakra-ui/react";
import {GlobalStyleProps, mode} from "@chakra-ui/theme-tools";
import prismTheme from "@styles/prism";

const {styles: prismStyles} = prismTheme;

interface GlobalStyles {
  prismStyles: string;
  body: ChakraProps;
}

const styles = {
  global: (props: GlobalStyleProps): GlobalStyles => ({
    prismStyles,
    body: {
      bg: mode("gray.50", "gray.800")(props)
    }
  })
};

export default styles;
