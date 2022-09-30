import React from "react";
import avatar from "../../assets/images/avatar.jpg";

export default function Me(props) {
	const { css } = props;

	return (
		<section className={css.aboutMe}>
			<div>
				<img className={css.avatar} src={avatar} alt='Donald Abua' />
				<article>
					<h2>Donald Abua</h2>
					<p>
						I can see you're a bit curious. Well, I am motivated, task-oriented,
						efficient, and my knowledge of the front-end web development
						industry is comprehensive and current. My enthusiasm and commitment
						to excellence has served me well in learning the fundamental and
						advanced concepts in front end development. I have extensive
						experience with vanilla JavaScript, React UI library, a and have had
						the chance to significantly develop my front-end development skills
						while working on little side projects.
						<br />
						<br />
						When I'm not thinking and writing code, I do what I've always loved
						doing before I decided to pursue a career in Front-end development
						i.e make music on my laptop. To be precise I produce instrumentals,
						😎.
						<br />
						<br />
						Apart from making and grooving to my own instrumentals, I like to
						consume content on human psychology I find interesting and lots of
						Jordan B. Peterson. I also spend a lot of time on Quora (answered a
						few simple questions too)
						<br />
						<br />
						Lastly, I create graphics with Adobe Illustrator. I usually create
						graffiti and head shot illustrations. Once in a while I attempt
						replicating logos. That's about it! Adios amigo(s) 😏
						<br />
						<br />
						<span>abuadonald@gmail.com</span>
					</p>
				</article>
			</div>
		</section>
	);
}
