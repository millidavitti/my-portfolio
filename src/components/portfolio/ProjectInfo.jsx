import React from "react";

export default function ProjectInfo(props) {
	const { css, title, img, text, link } = props;
	return (
		<a href={link} target='_blank' rel='noopener noreferrer'>
			<div className={css.project}>
				<h2>{title}</h2>
				<img src={img} alt='roll' />
				{text}
			</div>
		</a>
	);
}
