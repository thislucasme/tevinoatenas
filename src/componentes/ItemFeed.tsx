import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Button } from "@mantine/core";
import { FaRegCommentDots } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';
import Anonimato from '../rsc/anonimo.png';

//VscReport

interface Props {
	post: any
}
export const ItemFeed = (props: Props) => {

	console.log(props)
	return (
		<VStack my={10} w={"80%"}>
			<HStack alignItems={"start"} w="50%">
				<Image p={1} bg={"green"} ml={10} w={"40px"} h={"40px"} borderRadius={"100%"} src={Anonimato} />
				<Text color="white" fontSize={"18px"}>Usuário anonimo#</Text>
				<Text pt={1} color="white" fontSize={"12px"}>{"postado em " + new Date(props.post.data.seconds * 1000).getDate() + "/" + new Date(props.post.data.seconds * 1000).getMonth() + " ás " + new Date(props.post.data.seconds * 1000).getHours() + ":" + new Date(props.post.data.seconds * 1000).getMinutes()}</Text>
			</HStack>

			<Image borderRadius={4} src={props.post.url} />
			<HStack>
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
