import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { Photo, MessageCircle, Settings } from 'tabler-icons-react';
import { Feed } from './Feed';
export const TabsHome = () => {
	return (
		<Tabs w="100%">
			<TabList color={"white"} >
				<Tab _hover={{}} fontSize={"20px"}>Feed</Tab>
				<Tab fontSize={"20px"}>Chat aleatório</Tab>
				<Tab fontSize={"20px"}>Chat</Tab>
			</TabList>

			<TabPanels >
				<TabPanel >
					<Feed />
				</TabPanel>
				<TabPanel>
					<p>two!</p>
				</TabPanel>
				<TabPanel>
					<p>three!</p>
				</TabPanel>
			</TabPanels>
		</Tabs>
	)
};