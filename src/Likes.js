import { useState } from "react";

const Likes = () => {
	const [number, setNumber] = useState(0);

	let handleNumber = () => {
		setNumber(number + 1);
	};
	return (
		<div className="likes">
			<p>{number}</p>
			<i onClick={handleNumber} className="fas fa-heart"></i>
			<a href="https://github.com/richardj-codes">
				<i className="fab fa-github"></i>
			</a>
		</div>
	);
};

export default Likes;
