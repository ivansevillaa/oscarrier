import { ThemeComponentProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const Card = {
  parts: ["article", "anchor", "imageWrapper", "image", "infoWrapper"],
  baseStyle: (props: ThemeComponentProps) => ({
    article: {
      bg: mode("white", "gray.700")(props),
      borderRadius: "lg",
      boxShadow: "xl",
      cursor: "pointer",
      display: "flex",
      flexGrow: 1,
      flexShrink: 1,
      minH: "420px",
      transition: "all .5s ease",
      _hover: {
        transform: "scale(1.01)"
      }
    },
    anchor: {
      display: "flex"
    },
    imageWrapper: {
      position: "relative"
    },
    image: {
      borderTopLeftRadius: "lg"
    },
    infoWrapper: {
      px: "10",
      py: "8"
    }
  }),
  variants: {
    default: {
      article: {
        flexBasis: "300px",
        flexDirection: "column"
      },
      anchor: {
        flexDirection: "column",
        height: "100%"
      },
      imageWrapper: {
        height: "200px"
      },
      image: {
        borderTopRightRadius: "lg",
        borderBottomLeftRadius: 0
      },
      infoWrapper: {
        flexGrow: 1
      }
    },
    wide: {
      article: {
        flexBasis: { base: "300px", md: "100%" },
        flexDirection: { base: "column", md: "row" }
      },
      anchor: {
        flexDirection: { base: "column", md: "row" },
        width: "100%"
      },
      imageWrapper: {
        flex: { md: "1 1 auto" },
        height: { base: "200px", md: "auto" }
      },
      image: {
        borderTopRightRadius: { base: "lg", md: 0 },
        borderBottomLeftRadius: { base: 0, md: "lg" }
      },
      infoWrapper: {
        flexBasis: { md: "360px" },
        flexGrow: { base: 1, md: 0 }
      }
    }
  },
  defaultProps: {
    variant: "default"
  }
};

export default Card;
