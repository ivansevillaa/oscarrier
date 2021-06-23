import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";
import prismTheme from "@styles/prism";

const { styles: prismStyles } = prismTheme;

const styles = {
  global: (props: GlobalStyleProps) => ({
    prismStyles,
    body: {
      bg: mode("gray.50", "gray.800")(props)
    }
  })
};

export default styles;
