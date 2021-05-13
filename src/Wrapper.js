import { useState } from "react";
import Likes from "./Likes";
import groot from "./babygroot.webp";

const Wrapper = () => {
	const [name, setName] = useState("I am Groot");

	let handleClick1 = () => {
		setName("I am Groot");
	};

	let handleClick2 = () => {
		setName("Web Development");
	};

	return (
		<div className="wrapper">
			<img src={groot} alt="I am Groot" className="pic" />
			<h1>Hi!</h1>
			<p>{name}</p>
			<div className="buttons">
				<button onClick={handleClick1} type="submit" className="btn-name">
					Name
				</button>
				<button onClick={handleClick2} className="btn-skills">
					Skills
				</button>
			</div>

			<Likes />
		</div>
	);
};

export default Wrapper;
