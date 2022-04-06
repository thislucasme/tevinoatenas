import { Box, Flex, Image, Spacer, Text, VStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Input, Textarea, } from "@chakra-ui/react";
import { Button } from '@mantine/core';
import React, { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase/firabse";


export const Toolbar = () => {

	const [progress, setProgress] = useState(0);

	const app = initializeApp(firebaseConfig);
	const storage = getStorage(app);

	const [imagemUpload, setImagemUpload] = useState(null);


	const [textWhatAmIThinking, setTextWhatAmIThinking] = useState('');


	const uploadFiles = (file: any) => {
		//
		if (!file) return;
		const sotrageRef = ref(storage, `files/${file.name}`);
		const uploadTask = uploadBytesResumable(sotrageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				);
				setProgress(prog);
			},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log("File available at", downloadURL);
				});
			}
		);
	};

	const onteste = (e: any) => {
		console.log(e)
	}





	const uploadImagem = (e: any) => {

	};



	const OverlayOne = () => (
		<ModalOverlay
			bg='blackAlpha.300'
			backdropFilter='blur(10px) hue-rotate(90deg)'
		/>
	)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [overlay, setOverlay] = React.useState(<OverlayOne />)

	// const tratar = (e: any) => {
	// 	setImagem(e.target?.files[0])
	// 	setFile(URL.createObjectURL(""))
	// }



	const abrirModalPost = () => {
		setOverlay(<OverlayOne />)
		onOpen()
	}

	return (
		<>
			<VStack w="100%" bg={"#141328"} position={"fixed"}>
				<Flex w="100%">
					<Image ml={10} mt={5} w={"40px"} h={"40px"} borderRadius={"100%"} src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
					<Text cursor={"pointer"} ml={5} mt={5} color={"white"} fontSize={"20px"}>Feed</Text>
					<Text cursor={"pointer"} ml={5} mt={5} color={"white"} fontSize={"20px"}>Chat aleatório</Text>
					<Text cursor={"pointer"} ml={5} mt={5} color={"white"} fontSize={"20px"}>Chat</Text>
					<Button color={"green"} onClick={abrirModalPost} ml={10} mt={15} variant="subtle">Postar</Button>
					<Spacer />
					<Text mr={3} cursor={"pointer"} ml={5} mt={5} color={"white"} fontSize={"20px"}>Lucas silva</Text>
					<Image cursor={"pointer"} mr={10} mt={5} w={"40px"} h={"40px"} borderRadius={"100%"} src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
				</Flex>
				<Box bg={"#1b1c20"} w="100%" h={0.2}></Box>
			</VStack>



			< Modal size={"md"} isCentered isOpen={isOpen} onClose={onClose} >
				{overlay}
				< ModalContent backgroundColor={"#141328"}>
					<ModalHeader color={"white"}>O que você está pensando?</ModalHeader>
					<ModalCloseButton />
					<ModalBody>

						<Textarea fontSize={"20px"} my={2} color={"white"} borderColor={"gray"} borderRadius={3} borderWidth={0.1} placeholder="Escreva seu texto aqui" />
						{/* <Image src={MediaSource.CreateFromStorageFile()} /> */}
						<Input variant={"outline"} id="teste" onChange={(e: any) => {
							uploadFiles(e.target?.files[0])
						}} color={"white"} type={"file"} />
					</ModalBody>
					<ModalFooter>
						<Button variant="outline" mr={5} onClick={onClose}>Close</Button>
						<Button type={"submit"}>Publicar</Button>
					</ModalFooter>
				</ModalContent >
			</Modal >
		</>
	)
};