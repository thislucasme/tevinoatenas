import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Cadastro } from "../pages/Cadastro";

export const RouteComponets = () => {
	return (
		<Routes>
			<Route path="login" element={<App />} />
			<Route path="cadastro" element={<Cadastro />} />
			<Route path="/app" element={<App />}>
				<Route path="login" element={<App />} />
				<Route path="cadastro" element={<Cadastro />}>

				</Route>
				<Route path="home" element={<App />} />
			</Route>
			<Route index element={<App />} />
			<Route path={"teste"} element={<App />} />
		</Routes>
	);
}