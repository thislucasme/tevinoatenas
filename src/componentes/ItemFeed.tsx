import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react"
import { Button } from "@mantine/core";
import Anonimato from '../rsc/anonimo.png'
import { AiOutlineLike } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import { GoReport } from 'react-icons/go'

//VscReport

export const ItemFeed = () => {
	return (
		<VStack my={10}>
			<HStack alignItems={"start"} w="100%">
				<Image p={1} bg={"green"} ml={10} w={"40px"} h={"40px"} borderRadius={"100%"} src={Anonimato} />
				<Text color="white" fontSize={"18px"}>Usuário anonimo#</Text>
				<Text pt={1} color="white" fontSize={"12px"}>45 Minutos atrás</Text>
			</HStack>

			<Image borderRadius={4} w="80%" src={"https://static-cse.canva.com/blob/759727/ComoTirareEditarSuaFotoparaPerfilemRedesSociaisfeaturedimagee1559023010630.jpg"} />
			<HStack>
				<Button variant="subtle">
					<AiOutlineLike />
				</Button>
				<Button variant="subtle">
					<FaRegCommentDots />
				</Button>
				<Button variant="subtle">
					<GoReport />
				</Button>
			</HStack>
			<Box mt={10} bg={"#1b1c20"} w="100%" h={0.2}></Box>
		</VStack>
	)
};
