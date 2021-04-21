import { GlobalStyleProps, mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode("gray.50", "gray.800")(props)
    }
  })
};

export default styles;
