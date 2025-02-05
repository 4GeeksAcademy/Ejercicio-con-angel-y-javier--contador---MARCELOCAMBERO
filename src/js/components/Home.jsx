import React, { useState, useEffect } from "react";
import Contador from "./Contador";

//create your first component
const Home = () => {
	
	const [seconds, setSeconds] = useState(0);


	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(prev() => {
				const newSeconds = [prev];
				newSeconds += 1;
			})
		}, 1000);
	})


	return (
		<div>
			<Contador number={0}/>
		</div>
	);
};

export default Home;