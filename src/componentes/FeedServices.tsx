import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { ItemFeedService } from "./ItemFeedService";
export const FeedService = () => {


	const [posts, setPosts] = useState<any[]>([]);


	const getPosts = async () => {
		const dataPosts: any[] = [];
		const querySnapshot = await getDocs(collection(db, "services"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			console.log(doc.id, " => ", doc.data());

			dataPosts.push(doc.data())
			//setPosts(...posts)
			const dados = doc.data();
			//setPosts(typeof (dados))
			console.log("tipo de dado:", typeof (dados))
		});
		setPosts(dataPosts)
	}

	useEffect(() => {
		getPosts()
	}, [])

	return (
		<>
			{posts.map((post) => {
				return <ItemFeedService post={post} />
			})}
		</>
	)
};
