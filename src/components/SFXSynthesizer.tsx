/* eslint-disable react/no-children-prop */
import React from 'react';
import { Box, Input, IconButton, Button, InputGroup, Stack, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

export default function LandscapeImaginator() {
  return (
    <>
    <Stack pt="4vh">
        <InputGroup  justifyContent="center" size='lg'>
            <InputLeftAddon
                _hover={{
                    textDecoration: "none",
                    bg: "cyan.600",
                    transition: "ease-in-out .2s"
                }}
            >
                <IconButton id="settings"
                    aria-label='settings'
                    backgroundColor="transparent"
                    _hover={{
                        textDecoration: "none",
                        bg: "transparent",
                        transition: "ease-in-out .2s"
                    }}
                >
                    <SettingsIcon>

                    </SettingsIcon>
                </IconButton>
            </InputLeftAddon>
            <Input width="80vh" placeholder='Describe your SFX' />
            <InputRightAddon 
                backgroundColor="blue.400"
                _hover={{
                    textDecoration: "none",
                    bg: "blue.200",
                    transition: "ease-in-out .2s"
                }}
            >
                <Button 
                    width=".1vh"
                    backgroundColor="transparent"
                    _hover={{
                        textDecoration: "none",
                        bg: "transparent",
                        transition: "ease-in-out .2s"
                    }}
                >
                    Submit
                </Button>
            </InputRightAddon>
        </InputGroup>
    </Stack>
    </>
  );
};

