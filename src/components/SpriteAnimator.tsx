import React from 'react';
import { Box, VStack, IconButton, Icon, Text, Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons'

export default function SpriteAnimator() {

  return (
    <>
    <VStack mb="5vh">
      <Box mb="2vh" textAlign="center" mt={10}>
        <IconButton 
          icon={<AddIcon w="6vw" h="6vh"/>}
          colorScheme='pink'
          variant="outline"
          borderRadius="3%"
          borderStyle="dashed"
          borderColor="#d33885"
          borderWidth="2px"
          size="lg"
          width="80vw"
          p="15vh"
          aria-label="Add"
        />
      </Box>
      <Text>
        Upload your sprite and watch it come to life!
      </Text>
      <Button>
        <Text>Generate Spritesheet</Text>
      </Button>
      </VStack>
    </>
  );
};

