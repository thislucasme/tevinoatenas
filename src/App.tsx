import {
  Box, Button, ChakraProvider, HStack, Input, Text, theme, VStack
} from "@chakra-ui/react"
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import * as React from "react"
import { FaUserAlt } from 'react-icons/fa'
import { firebaseConfig } from "./firebase/firabse"

import { useNavigate } from "react-router-dom"
import { showNotification } from "@mantine/notifications"


const provider = new GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const App = () => {

  const navigate = useNavigate();

  const [senha, setSenha] = React.useState('');

  const [email, setEmail] = React.useState('');

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const auth = getAuth();
  const [loading, setLoading] = React.useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;

      navigate('app/home')

      // ...
    } else {
      // User is signed out
      // ...
    }
  });



  async function carregar() {
    const dados = collection(db, 'mensagens');
    const dadosSnapshot = await getDocs(dados);

    const listaDados = dadosSnapshot.docs.map(doc => doc.data());
    console.log(listaDados)
    return listaDados;
  }

  const showMsg = (color: string, msg: string, title: string) =>
    showNotification({
      color: color,
      title: title,
      message: msg,
    });

  async function login() {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('app/home')
        setLoading(false)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMsg("red", "error:" + errorCode, errorMessage)
        setLoading(false)
      });
  }

  return (
      <VStack minH="100vh" textAlign="center" alignItems={"center"} justifyContent={"center"} fontSize="xl" bg={"#212042"}>
        <Box borderRadius={10} bg={"#141328"} w={"40%"} h={"400"}>
          <Box borderTopLeftRadius={7} borderTopRightRadius={7} w={"full"} h={2} bg={"#64428b"}></Box>
          <Box mx={20}>
            <Text margin={5} color={"white"}>CONECTE-SE</Text>
            <Input value={email} onChange={(e: any) => { setEmail(e.target.value) }} fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Email" />
            <Input value={senha} onChange={(e: any) => { setSenha(e.target.value) }} type={"password"} fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Senha" />
            <Button isLoading={loading} disabled={loading} onClick={login} colorScheme={"green"} leftIcon={<FaUserAlt />} my={2} width={"full"}>Entrar</Button>
            <HStack>
              <Text color={"gray"}>Não possui uma conta?</Text>

              <Text onClick={() => { navigate("cadastro") }} cursor={"pointer"} color={"#64428b"}>cadastre-se</Text>
            </HStack>
          </Box>
        </Box>
      </VStack>
  );
}


