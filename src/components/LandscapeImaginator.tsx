"use client";

/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { Box, HStack, VStack, Input, Image, IconButton, Button, InputGroup, Stack, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';
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
            const prompt = "2D Pixel Art character for retro side scrolling video game. " + textBoxValue;
            await send({ prompt });
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
        <Box bg={'blue.800'} minHeight={'100vh'}> {/* Added Box to set background color */}
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
                        color='white'
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
                            color='white'
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
                <HStack>
                    {imageUrls?.slice(1).map((image: any, index: any)  => (
                        <Image 
                        w="50px"
                        h="50px"
                        key={index}
                        src={!sending && finalVal != '' ? imageUrls?.[index + 1]?.url : './white.png'} 
                        alt={finalVal}></Image>
                    ))}
                </HStack>
            </VStack>
        </Box> 
    );    
};

