import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import {
  Box, Button, Heading, Text
} from "@chakra-ui/react";
import { ErrorBoundary } from "react-error-boundary";

function CorruptedComponent({ crash }: { crash: boolean }) {
  const { t } = useTranslation("post-demo");

  if (crash) {
    throw new Error(t("breakErrorMessge"));
  }

  return <hr />;
}

function ErrorFallback({ error }: { error: { message: string } }) {
  const { t } = useTranslation("post-demo");

  return (
    <Box alignItems="center" background="red.400" borderRadius="md" d="flex" flexDir="column" my="0" mx="auto" maxW="320" p="4">
      <Heading as="h3" size="md">{t("somethingWrong")}</Heading>
      <Text>{error.message}</Text>
      <Text>{t("fallbackUIMessage")}</Text>
    </Box>
  );
}

function SameErrorBoundary() {
  const { t } = useTranslation("post-demo");
  const [isCrash, setIsCrashed] = useState(false);

  const timeToCrash = () => {
    setIsCrashed(true);
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Box alignItems="center" d="flex" flexDir="column" my="0" mx="auto" maxW="320">
        <Heading as="h3" size="md">{t("letsPlay")}</Heading>
        {isCrash ? (
          <CorruptedComponent crash />
        ) : (
          <Text>{t("breakDescription")}</Text>
        )}
        <Box>
          <Button mr="4" onClick={timeToCrash}>{t("breakBtn")}</Button>
          <Button onClick={timeToCrash}>{t("breakBtn")}</Button>
        </Box>
      </Box>
    </ErrorBoundary>
  );
}

function ResetErrorFallback({
  error,
  resetErrorBoundary
}: {
  error: {
    message: string
  },
  resetErrorBoundary: () => void;
}) {
  const { t } = useTranslation("post-demo");

  return (
    <Box alignItems="center" background="red.400" borderRadius="md" d="flex" flexDir="column" my="0" mx="auto" maxW="320" p="4">
      <Heading as="h3" size="md">{t("somethingWrong")}</Heading>
      <Text>{error.message}</Text>
      <Button mr="4" onClick={resetErrorBoundary}>{t("tryAgain")}</Button>
    </Box>
  );
}

function ResetUI() {
  const { t } = useTranslation("post-demo");
  const [isCrash, setIsCrashed] = useState(false);

  const timeToCrash = () => {
    setIsCrashed(true);
  };

  return (
    <ErrorBoundary
      FallbackComponent={ResetErrorFallback}
      onReset={() => setIsCrashed(false)}
    >
      <Box alignItems="center" d="flex" flexDir="column" my="0" mx="auto" maxW="320">
        <Heading as="h3" size="md">{t("letsPlay")}</Heading>
        {isCrash ? (
          <CorruptedComponent crash />
        ) : (
          <Text>{t("breakDescription")}</Text>
        )}
        <Box>
          <Button mr="4" onClick={timeToCrash}>{t("breakBtn")}</Button>
          <Button onClick={timeToCrash}>{t("breakBtn")}</Button>
        </Box>
      </Box>
    </ErrorBoundary>
  );
}

export { SameErrorBoundary, ResetUI };
