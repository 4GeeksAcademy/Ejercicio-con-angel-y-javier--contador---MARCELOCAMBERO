import React, { useState, useEffect } from "react";
import Contador from "./Contador";

//create your first component
const Home = () => {

	const [count, setCount] = useState(0);
	useEffect(() => {
		const intervalId = setInterval(() => {setCount(count +1)}, 1000);
		return () => clearInterval(intervalId);
	}, [count]);

	return (
		<div>
			<Contador number={count} />
		</div>
	);
};

export default Home;