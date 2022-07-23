import React from "react";
import portfolioData from "./portfolioData";
import ProjectInfo from "./ProjectInfo";

export default function Projects(props) {
	const { css } = props;

	const renderProInfo = portfolioData.map((info) => (
		<ProjectInfo
			key={info.id}
			css={css}
			title={info.title}
			img={info.img}
			text={info.text}
		/>
	));
	return <div className={css.portfolio}>{renderProInfo}</div>;
}
