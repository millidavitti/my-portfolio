import React from "react";
import DeskItem from "./DeskItem";

function Desk(props) {
	const { active, activeMenu } = props;
	return (
		<nav className='desk'>
			<div className='desk-wrap'>
				<h2>Rockstar Dev</h2>
				<ul className='desk-items'>
					{active.map((act) => (
						<DeskItem
							key={act.id}
							id={act.id}
							activeMenu={activeMenu}
							text={act.text}
							isActive={act.isActive}
							link={act.href}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Desk;
