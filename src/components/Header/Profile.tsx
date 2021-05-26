import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Adrian Hideki</Text>
        <Text color="gray.300" fontSize="small">
          adrian.hideki.br@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Adrian Hideki"
        src="http://github.com/adrianhideki.png"
      />
    </Flex>
  );
}
