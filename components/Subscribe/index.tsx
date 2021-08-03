/* eslint-disable react/jsx-props-no-spreading */
import {
  Button, Box, Heading, Text, Input, useColorModeValue
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { emailRegex } from "@utils/inputRegex";
import useTranslation from "next-translate/useTranslation";

// TODO: maybe add a hook to handle a post, move the styles to style file
export default function Subscribe() {
  const [petition, setPetition] = useState({ state: "idle", err: "" });
  const { handleSubmit, register } = useForm();
  const boxBackground = useColorModeValue("gray.50", "gray.700");
  const boxBorderColor = useColorModeValue("gray.400", "gray.300");
  const { t } = useTranslation("common");

  async function subscribe(data: { email: string }) {
    setPetition({ state: "pending", err: "" });
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: data.email
      }),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    });

    if (res.ok) {
      setPetition({ state: "resolved", err: "" });
    } else {
      const { errCode } = await res.json();
      setPetition({
        state: "rejected",
        err: errCode == "ERR-40X"
          ? t("newsletterClientErr")
          : t("newsletterServerErr")
      });
    }
  }

  return (
    <Box
      background={boxBackground}
      border="1px solid"
      borderColor={boxBorderColor}
      borderRadius="md"
      boxShadow="lg"
      marginX="auto"
      marginTop="32"
      maxW="600px"
      padding="6"
    >
      <Heading as="h3" fontSize="2xl" marginBottom="2">{t("newsletterTitle")}</Heading>
      <Text marginBottom="4">{t("newsletterDescription")}</Text>
      <form onSubmit={handleSubmit(subscribe)}>
        <Input
          isInvalid={petition.state == "rejected"}
          type="email"
          placeholder={t("newsletterEmail")}
          {...register("email", { required: true, pattern: emailRegex })}
          marginBottom={petition.state == "rejected" || petition.state == "resolved" ? "0" : "4"}
        />
        {petition.state == "rejected" && <Text color="red.500" fontWeight="bold" fontSize="sm" marginBottom="4">{petition.err}</Text>}
        {petition.state == "resolved" && <Text color="teal.500" fontWeight="bold" fontSize="sm" marginBottom="4">{t("newsletterNewSubscription")}</Text>}
        <Button
          isLoading={petition.state == "pending"}
          type="submit"
          background="teal.500"
          color="white"
          _hover={{
            background: "teal.400"
          }}
        >
          {t("newsletterButton")}
        </Button>
      </form>
    </Box>
  );
}
