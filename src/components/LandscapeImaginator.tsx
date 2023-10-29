"use client";

/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { Box, VStack, Input, Image, IconButton, Button, InputGroup, Stack, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import { useAction, useQuery } from 'convex/react'
import { api } from '../../convex/_generated/api';

interface liProps {
    t: string
}

export default function LandscapeImaginator(props: liProps) {
    const imageUrls = useQuery((api as any).clientFunctions.list);
    const send = useAction((api as any).dalle.send);
    const [sending, setSending] = useState(false);
    const [textBoxValue, setTextBoxValue] = useState("")
    const [finalVal, setFinalVal] = useState("")

    const handleSubmit = async () => {
        setSending(true);
        try {
            await send({ prompt: textBoxValue });
        } finally {
            setSending(false);
        }
        setFinalVal(textBoxValue)
    };

    useEffect(()=>{
        if(finalVal != '') {
            console.log("submitted")
        }
    }, [finalVal])

  return (
    <>
    <VStack textAlign="center" pt="4vh">
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
            <Input 
                width="80vh" 
                placeholder={props.t} 
                onChange={(e) => {
                    setTextBoxValue(e.target.value);
                }}
            />
            <InputRightAddon 
                backgroundColor="blue.400"
                _hover={{
                    textDecoration: "none",
                    bg: "blue.200",
                    transition: "ease-in-out .2s"
                }}
                onClick={handleSubmit}
            >
                <Button 
                    width=".1vh"
                    backgroundColor="transparent"
                    _hover={{
                        textDecoration: "none",
                        bg: "transparent",
                        transition: "ease-in-out .2s"
                    }}
                    >Submit
                </Button>
            </InputRightAddon>
        </InputGroup>
        <Box>
            <Image 
            w="500px"
            h="500px"
            src={!sending && finalVal != '' ? imageUrls?.[0]?.url : './white.png'} 
            alt={finalVal}>
            </Image>
        </Box>
    </VStack>
    </>
  );
};

