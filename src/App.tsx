import {
  Box, Button, ChakraProvider, Grid,
  Text,
  Input,
  theme, VStack, HStack
} from "@chakra-ui/react"
import { initializeApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import * as React from "react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { firebaseConfig } from "./firebase/firabse"

import BG from '../src/rsc/BGB.png';

import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword } from 'firebase/auth';

import { FaUserAlt } from 'react-icons/fa'
const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const App = () => {

  const [senha, setSenha] = React.useState('');

  const [email, setEmail] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth();



  async function carregar() {
    const dados = collection(db, 'mensagens');
    const dadosSnapshot = await getDocs(dados);

    const listaDados = dadosSnapshot.docs.map(doc => doc.data());
    console.log(listaDados)
    return listaDados;
  }
  async function login() {

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });
  }

  return (
    <ChakraProvider theme={theme}>
      <VStack minH="100vh" textAlign="center" alignItems={"center"} justifyContent={"center"} fontSize="xl" bg={"#212042"}>
        <Box borderRadius={10} bg={"#141328"} w={"40%"} h={"400"}>
          <Box borderTopLeftRadius={7} borderTopRightRadius={7} w={"full"} h={2} bg={"#64428b"}></Box>
          <Box mx={20}>
            <Text margin={5} color={"white"}>CONECTE-SE</Text>
            <Input value={email} onChange={(e: any) => { setEmail(e.target.value) }} fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Email" />
            <Input value={senha} onChange={(e: any) => { setSenha(e.target.value) }} type={"password"} fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Senha" />
            <Button onClick={login} colorScheme={"green"} leftIcon={<FaUserAlt />} my={2} width={"full"}>Entrar</Button>
            <HStack>
              <Text color={"gray"}>Não possui uma conta?</Text>

              <Text cursor={"pointer"} color={"#64428b"}>cadastre-se</Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </ChakraProvider>
  );
}


