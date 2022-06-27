import React from "react";
import { Link } from "react-router-dom";

export default function DeskItem(props) {
	const { activeMenu, id, text, isActive, link } = props;

	const underline = {
		borderBottom: isActive ? "2px solid var(--btn-bg)" : "none",
	};

	return (
		<li className='desk-item' onClick={activeMenu.bind(null, id)}>
			<Link to={link} style={underline}>
				{text}
			</Link>
		</li>
	);
}
