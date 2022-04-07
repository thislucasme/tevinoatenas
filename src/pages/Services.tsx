import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { FeedService } from '../componentes/FeedServices';
import { Toolbar } from '../componentes/Toolbar';
import '../css.css';


export const Services = () => {




  return (
    <>
      <VStack w="100%" minH="100vh" bg={"#212042"}>
        <VStack w="100%">
          <Toolbar />
          <Box h={20}></Box>
          <VStack mx={10} borderRadius={10} bg={"#141328"} w={{ sm: "100%", md: "70%", lg: "60%" }} minH={"500"}>
            <Box borderTopLeftRadius={7} borderTopRightRadius={7} w={"full"} h={2} bg={"#64428b"}></Box>
            <FeedService />
          </VStack>
        </VStack>
      </VStack>

    </>
  )
}