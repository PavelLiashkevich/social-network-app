import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const PATH = {
	PATH1: '/profile',
	PATH2: '/dialogs',
	PATH3: '/news',
	PATH4: '/music',
	PATH5: '/settings',
} as const

export const Sidebar = () => {
	return (
		<StyledSidebar>
			<h2>Sidebar</h2>
			<ul>
				<li>
					<StyledLink to={PATH.PATH1}>Profile</StyledLink>
				</li>
				<li>
					<StyledLink to={PATH.PATH2}>Messages</StyledLink>
				</li>
				<li>
					<StyledLink to={PATH.PATH3}>News</StyledLink>
				</li>
				<li>
					<StyledLink to={PATH.PATH4}>Music</StyledLink>
				</li>
				<li>
					<StyledLink to={PATH.PATH5}>Settings</StyledLink>
				</li>
			</ul>
		</StyledSidebar>
	)
}

const StyledSidebar = styled.aside`
	width: 30%;
	background-color: #ef7070;
	height: 100vh;
	padding: 52px 0;
	text-align: center;
`

const StyledLink = styled(NavLink)`
	color: white;

	&.active {
		color: #cb9610;
	}

	&:hover {
		color: green;
	}
`
