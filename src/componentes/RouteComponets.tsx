import { Route, Routes } from "react-router-dom";
import { App } from "../App";
import { Home } from "../pages/Home";
import { Cadastro } from "../pages/Cadastro";
import { Services } from "../pages/Services";

export const RouteComponets = () => {
	return (
		<Routes>
			<Route path="login" element={<App />} />
			<Route path="cadastro" element={<Cadastro />} />
			<Route path="app" >
				<Route path="home" element={<Home />}>
				</Route>
				<Route path="services" element={<Services />}>
				</Route>
			</Route>
			<Route index element={<App />} />
			<Route path={"teste"} element={<App />} />
		</Routes>
	);
}