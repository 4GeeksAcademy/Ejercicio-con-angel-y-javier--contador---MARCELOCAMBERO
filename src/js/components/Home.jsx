import React, { useState, useEffect } from "react";
import Contador from "./Contador";

//create your first component
const Home = () => {

	const [count, setCount] = useState(0);
	const [counting, setCounting] = useState(true);


	useEffect(() => {
		let intervalId = null;


		if (counting) {
			intervalId = setInterval(() => {setCount(count +1)}, 1000);
		}else {clearInterval(intervalId)};
		return () => clearInterval(intervalId);
	}, [count,counting]);

	

	

	return (
		<div>
			<Contador number={count} />
			<button onClick={() => setCount(0)}>Reset</button>
			<button onClick={() => setCounting(!counting)}>Pausa</button>

		</div>
	);
};

export default Home;