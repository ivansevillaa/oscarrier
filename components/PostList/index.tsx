import { chakra, useStyleConfig } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PostList({ children }: Props) {
  const styles = useStyleConfig("PostList");

  return (
    <chakra.section __css={styles}>
      {children}
    </chakra.section>
  );
}
