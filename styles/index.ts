import {extendTheme} from "@chakra-ui/react";
import styles from "./styles";
import Card from "./components/card";
import PostList from "./components/post-list";

const overrides = extendTheme({
  styles,
  components: {
    Card,
    PostList
  }
});

export default extendTheme(overrides);
