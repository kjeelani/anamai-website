import { Box, Heading, Spacer, Text, VStack } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box className="Header" textAlign="center" verticalAlign={"center"}>
            <VStack pt="30vh">
                <Heading mb="5vh" as="h1" size="2xl">
                Breathe Life
                </Heading>
                <Text fontSize="lg" color="gray.600">
                Into your Games
                </Text>
            </VStack>
      </Box>
    );
}