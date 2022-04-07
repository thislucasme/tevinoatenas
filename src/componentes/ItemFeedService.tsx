import { Box, HStack, Image, Spacer, Text, VStack } from "@chakra-ui/react";
import { Button } from "@mantine/core";
import { FaRegCommentDots } from 'react-icons/fa';
import { GoReport } from 'react-icons/go';


//VscReport

interface Props {
	post: any
}
export const ItemFeedService = (props: Props) => {

	console.log(props)
	return (
		<VStack my={10} w={"100%"}>
			<HStack alignItems={"start"} w="100%">
				<Image p={1} bg={"white"} ml={10} w={"50px"} h={"50px"} borderRadius={"10px"} src={props.post.url} />
				<VStack alignItems={"start"}>
					<HStack>
						<Text color="white" fontSize={"18px"}>Usuário: {props.post.nome}</Text>
						<Text pt={1} color="white" fontSize={"12px"}>{"Desde " + new Date(props.post.data.seconds * 1000).getDate() + "/" + new Date(props.post.data.seconds * 1000).getMonth() + " ás " + new Date(props.post.data.seconds * 1000).getHours() + ":" + new Date(props.post.data.seconds * 1000).getMinutes()}</Text>
					</HStack >
					<Text color={"gray"}>Contador</Text>
				</VStack>
				<Spacer />
				<HStack>
					<Button variant="subtle" onClick={() => {

					}}>
						<FaRegCommentDots />
					</Button>
					<Button variant="subtle">
						<GoReport />
					</Button>
				</HStack>
			</HStack>
			<Box mt={10} bg={"#1b1c20"} w="100%" h={0.2}></Box>
		</VStack>
	)
};
