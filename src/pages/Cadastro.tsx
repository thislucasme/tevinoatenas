/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box, Button, ChakraProvider, Checkbox, HStack, Input, Text, theme, VStack
} from "@chakra-ui/react"
import { showNotification } from "@mantine/notifications"
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import * as React from "react"
import { FaUserAlt } from 'react-icons/fa'
import { useNavigate } from "react-router-dom"
import { firebaseConfig } from "../firebase/firabse"




const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const Cadastro = () => {

  const [loading, setLoading] = React.useState(false);

  const [senha, setSenha] = React.useState('');

  const [email, setEmail] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  const auth = getAuth();
  const navigate = useNavigate();


  const showMsg = (color: string, msg: string, title: string) =>
    showNotification({
      color: color,
      title: title,
      message: msg,
    })
  async function login() {


    setLoading(true);

    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        setLoading(false);
        // Signed in
        const user = userCredential.user;
        console.log(user)
        showMsg("green", "Usuário criado", "Sucesso ao criar usuário")
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        showMsg("red", "error:" + errorCode, errorMessage)
        // ..
      })
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

            <Button isLoading={loading} disabled={loading} onClick={login} colorScheme={"green"} leftIcon={<FaUserAlt />} my={2} width={"full"}>Cadastrar</Button>
            <HStack>
              <Text color={"gray"}>Já possui uma conta?</Text>

              <Text onClick={() => { navigate("/") }} cursor={"pointer"} color={"#64428b"}>faça login</Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </ChakraProvider >
  );
}


