import { Box, Heading, Spacer, Text, VStack } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box className="Header" textAlign="center" verticalAlign={"center"}>
            <VStack pt="25vh">
                <Heading 
                bgGradient='linear(to-l, #FFF4CD, #FFC700)'
                bgClip='text'
                mb="5vh" as="h1" 
                m='6'
                size="3xl">BREATHE LIFE</Heading>
                <Text fontSize="2xl" color="gray.100">
                into your games
                </Text>
            </VStack>
      </Box>
    );
}