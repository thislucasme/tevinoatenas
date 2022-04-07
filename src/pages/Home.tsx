import { Box, Button, Modal, ModalBody, Text, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, VStack } from '@chakra-ui/react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { Feed } from '../componentes/Feed';
import { Toolbar } from '../componentes/Toolbar';
import '../css.css';

import { useNavigate } from 'react-router-dom';

export const Home = () => {




  return (
    <>
      <VStack w="100%" minH="100vh" bg={"#212042"}>
        <VStack w="100%">
          <Toolbar />
          <Box h={20}></Box>
          <VStack borderRadius={10} bg={"#141328"} w={{ sm: "100%", md: "70%", lg: "60%" }} minH={"500"}>
            <Box borderTopLeftRadius={7} borderTopRightRadius={7} w={"full"} h={2} bg={"#64428b"}></Box>
            <Feed />
          </VStack>
        </VStack>
      </VStack>

    </>
  )
}