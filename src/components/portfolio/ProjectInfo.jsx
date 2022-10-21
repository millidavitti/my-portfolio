import React from "react";

export default function ProjectInfo(props) {
	const { css, title, img, text, link } = props;
	return (
		<div className={css.project}>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<h2>{title}</h2>
				<img src={img} alt='roll' />
				{text}
			</a>
		</div>
	);
}
