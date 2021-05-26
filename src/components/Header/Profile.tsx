import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adrian Hideki</Text>
          <Text color="gray.300" fontSize="small">
            adrian.hideki.br@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Adrian Hideki"
        src="http://github.com/adrianhideki.png"
      />
    </Flex>
  );
}
