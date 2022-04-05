import {
  Box, Button, Checkbox, ChakraProvider, HStack, Input, Text, theme, VStack
} from "@chakra-ui/react"
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import * as React from "react"
import { FaUserAlt } from 'react-icons/fa'
import { firebaseConfig } from "../firebase/firabse"



const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const Cadastro = () => {

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
            <Text margin={5} color={"white"}>CADASTRE-SE</Text>
            <Input value={email} onChange={(e: any) => { setEmail(e.target.value) }} fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Email" />
            <Input value={senha} onChange={(e: any) => { setSenha(e.target.value) }} type={"password"} fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Senha" />
            <HStack>
              <Checkbox colorScheme='green' color={"gray"} defaultChecked>
                Li e Aceito todos os termos de uso.
              </Checkbox>
            </HStack>

            <Button onClick={login} colorScheme={"green"} leftIcon={<FaUserAlt />} my={2} width={"full"}>Cadastrar</Button>
            <HStack>
              <Text color={"gray"}>Já possui uma conta?</Text>

              <Text cursor={"pointer"} color={"#64428b"}>faça login</Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </ChakraProvider >
  );
}


